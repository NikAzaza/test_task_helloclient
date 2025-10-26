import type {SidebarItem, SidebarSelectedItemData} from "../models/sidebar-item.model.ts";
import {useCallback, useState} from "react";
import type {SidebarConfig} from "../models/sidebar-config.model.ts";
import type {
  SidebarSelectHookItemPressCallback,
  SidebarSelectHookItemSelectedFn, SidebarSelectHookSubItemPressCallback,
  SidebarSelectHookSubItemSelectedFn,
  SidebarSelectHookValues
} from "../models/sidebar-select-hook.model.ts";

export function useSelectedItem<Item extends SidebarItem>(
  sidebarConfig: SidebarConfig,
  items: Item[],
): SidebarSelectHookValues {
  const [selectedData, setSelectedData] = useState<SidebarSelectedItemData>(sidebarConfig.initiallySelectedItemData);

  const itemPressedCallback = useCallback((data: SidebarSelectedItemData) => {
    sidebarConfig.onItemPressed(data);
  }, [sidebarConfig.onItemPressed]);

  const isItemSelected = useCallback<SidebarSelectHookItemSelectedFn>((itemIndex: number) => {
    return itemIndex === selectedData.index;
  }, [selectedData.index]);

  const isSubItemSelected = useCallback<SidebarSelectHookSubItemSelectedFn>((itemIndex: number, childIndex: number) => {
    return itemIndex === selectedData.index && childIndex === selectedData.childIndex;
  }, [selectedData.index, selectedData.childIndex]);

  const onItemClickHandler: SidebarSelectHookItemPressCallback = (itemIndex: number) => {
    const selectionData: SidebarSelectedItemData = {...selectedData, index: itemIndex, childIndex: null};
    setSelectedData(selectionData);
    itemPressedCallback(selectionData);
  };

  const onSubItemClickHandler: SidebarSelectHookSubItemPressCallback = (itemIndex: number, childIndex: number) => {
    const selectionData: SidebarSelectedItemData = {...selectedData, index: itemIndex, childIndex: childIndex};
    setSelectedData(selectionData);
    itemPressedCallback(selectionData);
  };

  const selectedItem = selectedData.index ? items[selectedData.index] : null

  return {
    selectedItemIndex: selectedData.index,
    selectedSubItemIndex: selectedData.childIndex,
    selectedItemHasChildren: selectedItem ? !!selectedItem.children?.length : false,
    selectedChildrenItems: Array.isArray(selectedItem?.children) ? selectedItem.children : [],
    isItemSelected,
    isSubItemSelected,
    onItemClickHandler,
    onSubItemClickHandler,
  };
}
