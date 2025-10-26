import type {SidebarSubItem} from "./sidebar-item.model.ts";

export type SidebarSelectHookItemSelectedFn = (itemIndex: number) => boolean;
export type SidebarSelectHookSubItemSelectedFn = (itemIndex: number, childIndex: number) => boolean

export type SidebarSelectHookItemPressCallback = (itemIndex: number) => void;
export type SidebarSelectHookSubItemPressCallback = (itemIndex: number, childIndex: number) => void;


export type SidebarSelectHookValues = {
  selectedItemIndex: number | null,
  selectedSubItemIndex: number | null,
  selectedItemHasChildren: boolean,
  selectedChildrenItems: SidebarSubItem[],
  isItemSelected: SidebarSelectHookItemSelectedFn,
  isSubItemSelected: SidebarSelectHookSubItemSelectedFn,
  onItemClickHandler: SidebarSelectHookItemPressCallback,
  onSubItemClickHandler: SidebarSelectHookSubItemPressCallback,
};

