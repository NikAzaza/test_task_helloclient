import type {SidebarItem} from "../../../models/sidebar-item.model.ts";
import {DefaultSidebarItemView} from "../../views/default-items/default-sidebar-item-view.tsx";
import {DefaultSidebarItemTextView} from "../../views/default-items/default-sidebar-item-text-view.tsx";
import {type MouseEventHandler, useMemo} from "react";
import {DefaultSidebarChildrenList} from "./default-sidebar-children-list.tsx";
import type {
  SidebarSelectHookSubItemPressCallback,
  SidebarSelectHookSubItemSelectedFn
} from "../../../models/sidebar-select-hook.model.ts";

type DefaultSidebarItemProps<T> = {
  item: T;
  isExpanded: boolean;
  isMobileView: boolean;
  isActive: boolean;
  itemIndex: number;
  subItemPressCallback: SidebarSelectHookSubItemPressCallback;
  isSubItemActiveFn: SidebarSelectHookSubItemSelectedFn;
  mouseEnterCallback: MouseEventHandler<HTMLLIElement>;
  mouseLeaveCallback: MouseEventHandler<HTMLLIElement>;
};

export function DefaultSidebarItem<T extends SidebarItem>({
  item,
  isExpanded,
  isMobileView,
  isActive,
  itemIndex,
  subItemPressCallback,
  isSubItemActiveFn,
  mouseEnterCallback,
  mouseLeaveCallback,
}: DefaultSidebarItemProps<T>) {

  const textComponent = useMemo(() => {
    return (isExpanded && !isMobileView)
      ?  <DefaultSidebarItemTextView text={item.label}/>
      : null;
  }, [isExpanded, isMobileView, item.label]);

  const listComponent = isActive && isExpanded && !isMobileView
    ? <DefaultSidebarChildrenList
        items={item.children}
        itemsClickHandler={(childIndex: number) => subItemPressCallback(itemIndex, childIndex)}
        isSubItemSelectedCallback={(childIndex: number) => isSubItemActiveFn(itemIndex, childIndex)}
      />
    : null;

  const additionalClasses = isActive
    ? 'border-2 border-sky-500'
    : 'border-2 border-transparent';

  return (
    <DefaultSidebarItemView
      title={!isExpanded && !isMobileView && !item.children ? item.label : ''}
      imageSrc={item.iconData || ''}
      containerClasses={additionalClasses}
      textComponent={textComponent}
      mouseEnterCallback={mouseEnterCallback}
      mouseLeaveCallback={mouseLeaveCallback}
    >
      {listComponent}
    </DefaultSidebarItemView>
  );
}
