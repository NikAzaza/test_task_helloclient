import type {SidebarItem} from "../../models/sidebar-item.model.ts";
import {SidebarItemsListView} from "../views/sidebar-items-list-view.tsx";
import {DefaultSidebarItem} from "./default-items/default-sidebar-item.tsx";
import type {SidebarSelectHookValues} from "../../models/sidebar-select-hook.model.ts";

export type SidebarContentProps<T> = {
  items: T[];
  isExpanded: boolean;
  isMobileView: boolean;
  viewportClasses: string;
  selectUtils: SidebarSelectHookValues,
}

export function SidebarContent<Item extends SidebarItem>(props: SidebarContentProps<Item>) {
  const {
    isItemSelected,
    isSubItemSelected,
    onItemClickHandler,
    onSubItemClickHandler,
  } = props.selectUtils;

  return (
    <SidebarItemsListView containerClasses={props.viewportClasses}>
      {props.items.map((item: Item, index: number) =>
        <div
            key={item.key}
            onClick={() => onItemClickHandler(index)}
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
    </SidebarItemsListView>
  );
}
