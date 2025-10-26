import type {SidebarItem} from "../../models/sidebar-item.model.ts";
import {SidebarItemsListView} from "../views/sidebar-items-list-view.tsx";
import {DefaultSidebarItem} from "./default-items/default-sidebar-item.tsx";
import type {SidebarSelectHookValues} from "../../models/sidebar-select-hook.model.ts";
import {useDisclosure} from "@heroui/modal";
import {DefaultMobileSidebarChildrenList} from "./default-items/default-mobile-sidebar-children-list.tsx";

export type SidebarContentProps<T> = {
  items: T[];
  isExpanded: boolean;
  isMobileView: boolean;
  viewportClasses: string;
  selectUtils: SidebarSelectHookValues,
}

export function SidebarContent<Item extends SidebarItem>(props: SidebarContentProps<Item>) {
  const {
    selectedItemIndex,
    selectedChildrenItems,
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
          ></DefaultSidebarItem>
        </div>
      )}
      <DefaultMobileSidebarChildrenList
        items={selectedChildrenItems}
        isOpen={isOpen}
        subItemClickHandler={(childIndex: number) => onSubItemClick(childIndex)}
        closeCallback={closeModal}
      />
    </SidebarItemsListView>
  );
}
