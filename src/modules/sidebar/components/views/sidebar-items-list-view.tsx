import type {PropsWithChildren} from "react";

type SidebarItemsListViewProps = {
  containerClasses?: string;
}

export function SidebarItemsListView({
  containerClasses,
  children,
}: PropsWithChildren<SidebarItemsListViewProps>) {
  return (
    <ul className={`${containerClasses || ''}`}>
      {children}
    </ul>
  );
}
