import type {SidebarSubItem} from "../../../models/sidebar-item.model.ts";
import {DefaultDesktopItemChildrenView} from "../../views/default-items/default-desktop-item-children-view.tsx";

type DefaultSidebarItemProps = {
  items?: SidebarSubItem[];
  itemsClickHandler: (childIndex: number) => void;
  isSubItemSelectedCallback: (childIndex: number) => boolean;
};

export function DefaultSidebarChildrenList({
  items,
  itemsClickHandler,
  isSubItemSelectedCallback,
}: DefaultSidebarItemProps) {
  const childrenItems = Array.isArray(items) ? items : [];

  const activeClasses = 'bg-blue-200';

  return (
    <ol>
      {childrenItems.map((item, index) => (
        <li
          className={`flex ${isSubItemSelectedCallback(index) ? activeClasses : ''}`}
          key={item.key}
          onClick={(e) => {
            e.stopPropagation();
            itemsClickHandler(index)
          }}
        >
          <DefaultDesktopItemChildrenView
            text={item.label}
          />
        </li>
      ))}
    </ol>
  );
}
