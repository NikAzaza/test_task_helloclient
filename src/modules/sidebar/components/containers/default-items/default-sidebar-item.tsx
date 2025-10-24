import type {SidebarItem} from "../../../models/sidebar-item.model.ts";
import {DefaultSidebarItemView} from "../../views/default-items/default-sidebar-item-view.tsx";
import {DefaultSidebarItemTextView} from "../../views/default-items/default-sidebar-item-text-view.tsx";
import {useMemo} from "react";

type DefaultSidebarItemProps<T> = {
  item: T;
  isExpanded: boolean;
  isMobileView: boolean;
};

export function DefaultSidebarItem<T extends SidebarItem>({
  item,
  isExpanded,
  isMobileView,
}: DefaultSidebarItemProps<T>) {

  const textComponent = useMemo(() => {
    return (isExpanded && !isMobileView)
      ?  <DefaultSidebarItemTextView text={item.label}/>
      : null;
  }, [isExpanded, isMobileView, item.label]);

  return (
    <DefaultSidebarItemView imageSrc={item.iconData || ''}>
      {textComponent}
    </DefaultSidebarItemView>
  );
}
