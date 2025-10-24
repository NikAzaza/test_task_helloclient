import type {SidebarItem} from "../../models/sidebar-item.model.ts";
import {SidebarItemsListView} from "../views/sidebar-items-list-view.tsx";
import {DefaultSidebarItem} from "./default-items/default-sidebar-item.tsx";

export type SidebarContentProps<T> = {
  items: T[];
  isExpanded: boolean;
  isMobileView: boolean;
  viewportClasses: string;
}

export function SidebarContent<Item extends SidebarItem>(props: SidebarContentProps<Item>) {
  return (
    <SidebarItemsListView containerClasses={props.viewportClasses}>
      {props.items.map((item) =>
        <DefaultSidebarItem
          key={item.key}
          item={item}
          isExpanded={props.isExpanded}
          isMobileView={props.isMobileView}
        ></DefaultSidebarItem>
      )}
    </SidebarItemsListView>
  );
}
