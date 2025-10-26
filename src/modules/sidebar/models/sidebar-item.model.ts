export type SidebarBaseItem = {
  key: string;
  label: string;
};

export type SidebarItem = SidebarBaseItem & {
  iconData?: string;
  children?: SidebarSubItem[];
};

export type SidebarSubItem = SidebarBaseItem & {};

export type SidebarSelectedItemData = {
  index: number | null;
  childIndex: number | null;
}