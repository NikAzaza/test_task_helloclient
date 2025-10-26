import type {SidebarSelectedItemData} from "../models/sidebar-item.model.ts";
import {useCallback, useState} from "react";
import type {SidebarConfig} from "../models/sidebar-config.model.ts";
import type {
  SidebarSelectHookItemPressCallback,
  SidebarSelectHookItemSelectedFn, SidebarSelectHookSubItemPressCallback,
  SidebarSelectHookSubItemSelectedFn,
  SidebarSelectHookValues
} from "../models/sidebar-select-hook.model.ts";

export function useSelectedItem(sidebarConfig: SidebarConfig): SidebarSelectHookValues {
  const [selectedData, setSelectedData] = useState<SidebarSelectedItemData>(sidebarConfig.initiallySelectedItemData);

  const itemPressedCallback = useCallback((data: SidebarSelectedItemData) => {
    sidebarConfig.onItemPressed(data);
  }, [sidebarConfig.onItemPressed])

  const isItemSelected = useCallback<SidebarSelectHookItemSelectedFn>((itemIndex: number) => {
    return itemIndex === selectedData.index;
  }, [selectedData.index]);

  const isSubItemSelected = useCallback<SidebarSelectHookSubItemSelectedFn>((itemIndex: number, childIndex: number) => {
    return itemIndex === selectedData.index && childIndex === selectedData.childIndex;
  }, [selectedData.index, selectedData.childIndex]);

  const onItemClickHandler = useCallback<SidebarSelectHookItemPressCallback>((itemIndex: number) => {
    const selectionData: SidebarSelectedItemData = {...selectedData, index: itemIndex};
    setSelectedData(selectionData);
    itemPressedCallback(selectionData);
  }, []);

  const onSubItemClickHandler = useCallback<SidebarSelectHookSubItemPressCallback>((itemIndex: number, childIndex: number) => {
    const selectionData: SidebarSelectedItemData = {...selectedData, index: itemIndex,  childIndex: childIndex};
    setSelectedData({...selectedData, index: itemIndex, childIndex: childIndex});
    itemPressedCallback(selectionData);
  }, []);

  return {
    isItemSelected,
    isSubItemSelected,
    onItemClickHandler,
    onSubItemClickHandler,
  };
}
