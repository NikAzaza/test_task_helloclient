export type SidebarBaseItem = {
  key: string;
  label: string;
};

export type SidebarItem = SidebarBaseItem & {
  iconData?: string;
  children?: SidebarSubItem[];
};

export type SidebarSubItem = SidebarBaseItem & {};