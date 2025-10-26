export type SidebarSelectHookItemSelectedFn = (itemIndex: number) => boolean;
export type SidebarSelectHookSubItemSelectedFn = (itemIndex: number, childIndex: number) => boolean

export type SidebarSelectHookItemPressCallback = (itemIndex: number) => void;
export type SidebarSelectHookSubItemPressCallback = (itemIndex: number, childIndex: number) => void;


export type SidebarSelectHookValues = {
  isItemSelected: SidebarSelectHookItemSelectedFn,
  isSubItemSelected: SidebarSelectHookSubItemSelectedFn,
  onItemClickHandler: SidebarSelectHookItemPressCallback,
  onSubItemClickHandler: SidebarSelectHookSubItemPressCallback,
};

