import {useCallback, useState} from "react";
import {useScreenWidth} from "./screen-width.hook.ts";
import {useSidebarStyles} from "./sidebar-styles.hook.ts";
import {useSidebarConfig} from "./sidebar-config.hook.ts";
import type {SidebarConfigurableProps} from "../components/containers/sidebar.tsx";
import type {SidebarConfig} from "../models/sidebar-config.model.ts";
import {useSelectedItem} from "./selected-item.hook.ts";
import type {SidebarSelectHookValues} from "../models/sidebar-select-hook.model.ts";

export function useSidebar(passedConfig: SidebarConfigurableProps) {
  const sidebarConfig: SidebarConfig = useSidebarConfig(passedConfig);
  const screenWidth = useScreenWidth(sidebarConfig);
  const [isSidebarOpen, setIsSidebarOpen] = useState(sidebarConfig.initiallyOpened);

  const isMobileViewport = screenWidth < sidebarConfig.mobileBreakpoint;

  const stylesConfig = useSidebarStyles(sidebarConfig, isMobileViewport, isSidebarOpen);

  const changeSidebarState = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
    sidebarConfig.onStateChange(!isSidebarOpen)
  }, [setIsSidebarOpen, sidebarConfig.onStateChange, isSidebarOpen]);

  const selectionUtils: SidebarSelectHookValues = useSelectedItem(sidebarConfig);

  return {
    isMobileViewport,
    isSidebarOpen,
    setIsSidebarOpen: changeSidebarState,
    stylesConfig,
    selectionUtils,
  };
}