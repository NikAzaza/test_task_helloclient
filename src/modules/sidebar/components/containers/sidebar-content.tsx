import type {SidebarItem} from "../../models/sidebar-item.model.ts";
import {SidebarItemsListView} from "../views/sidebar-items-list-view.tsx";
import {DefaultSidebarItem} from "./default-items/default-sidebar-item.tsx";
import type {SidebarSelectHookValues} from "../../models/sidebar-select-hook.model.ts";
import {useDisclosure} from "@heroui/modal";
import {DefaultMobileSidebarChildrenList} from "./default-items/default-mobile-sidebar-children-list.tsx";
import {DefaultPopover} from "./default-items/default-popover.tsx";
import { useMinifiedItemsPopover} from "../../hooks/minified-items-popover.hook.ts";
import type {MouseEvent} from "react";

export type SidebarContentProps<T> = {
  items: T[];
  isExpanded: boolean;
  isMobileView: boolean;
  viewportClasses: string;
  selectUtils: SidebarSelectHookValues,
}

export function SidebarContent<Item extends SidebarItem>(props: SidebarContentProps<Item>) {
  const {
    popoverConfig,
    updatePopoverConfig,
    changePopoverTriggerState,
  } = useMinifiedItemsPopover();

  const {
    selectedItemIndex,
    selectedChildrenItems,
    getChildItemsBySelectedItemIndex,
    isItemSelected,
    isSubItemSelected,
    onItemClickHandler,
    onSubItemClickHandler,
  } = props.selectUtils;

  const {isOpen, onOpen, onClose} = useDisclosure();

  function onItemClick(item: Item, index: number) {
    onItemClickHandler(index);

    if (props.isMobileView && !!item.children?.length) {
      onOpen();
    }
  }

  function onSubItemClick(childIndex: number) {
    onSubItemClickHandler(selectedItemIndex || 0, childIndex);
    onClose();
  }

  function closeModal() {
    onClose();
  }

  function onEnterElement(event: MouseEvent, index: number): void {
    if (props.isExpanded) {
      return;
    }
    const {top, left} = extractElementRect(event);

    updatePopoverConfig({top, left, itemIndex: index, isTriggeredByItem: true, isTriggeredByPopover: false});
  }

  function onLeaveElement(event: MouseEvent, index: number): void {
    const {top, left} = extractElementRect(event);

    updatePopoverConfig({top, left, itemIndex: index, isTriggeredByItem: false, isTriggeredByPopover: false})
  }

  function extractElementRect(event: MouseEvent): Pick<DOMRect, 'top' | 'left'> {
    const rect = (event.target as HTMLLIElement).getBoundingClientRect();

    return {top: rect.top, left: rect.right - 2};
  }

  const isPopoverAllowed = !props.isMobileView && !props.isExpanded && !!getChildItemsBySelectedItemIndex(popoverConfig.itemIndex)?.length;
  const popoverVisibility = isPopoverAllowed && (popoverConfig.isTriggeredByPopover || popoverConfig.isTriggeredByItem);

  return (
    <SidebarItemsListView containerClasses={props.viewportClasses}>
      {props.items.map((item: Item, index: number) =>
        <div
          key={item.key}
          onClick={() => onItemClick(item, index)}
        >
          <DefaultSidebarItem
            itemIndex={index}
            item={item}
            isExpanded={props.isExpanded}
            isMobileView={props.isMobileView}
            isActive={isItemSelected(index)}
            subItemPressCallback={onSubItemClickHandler}
            isSubItemActiveFn={isSubItemSelected}
            mouseLeaveCallback={(event) => onLeaveElement(event, index)}
            mouseEnterCallback={(event) => onEnterElement(event, index)}
          ></DefaultSidebarItem>
        </div>
      )}
      {
        popoverVisibility && (
          <DefaultPopover
            items={getChildItemsBySelectedItemIndex(popoverConfig.itemIndex)}
            top={`${popoverConfig.top}px`}
            left={`${popoverConfig.left}px`}
            onSubItemPress={(index: number) => onSubItemClickHandler(popoverConfig.itemIndex, index)}
            onEnterCallback={() => changePopoverTriggerState(true)}
            onLeaveCallback={() => changePopoverTriggerState(false)}
            isSubItemSelectedFn={(index) => isSubItemSelected(popoverConfig.itemIndex, index)}
          />
        )
      }
      <DefaultMobileSidebarChildrenList
        items={selectedChildrenItems}
        isOpen={isOpen}
        subItemClickHandler={(childIndex: number) => onSubItemClick(childIndex)}
        closeCallback={closeModal}
      />
    </SidebarItemsListView>
  );
}
