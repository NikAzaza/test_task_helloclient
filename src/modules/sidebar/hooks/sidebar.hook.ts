import {useCallback, useState} from "react";
import {useScreenWidth} from "./screen-width.hook.ts";
import {useSidebarStylesConfig} from "./sidebar-styles-config.hook.ts";
import {useSidebarConfig} from "./sidebar-config.hook.ts";
import type {SidebarConfigurableProps} from "../components/containers/sidebar.tsx";
import type {SidebarConfig} from "../models/sidebar-config.model.ts";

export function useSidebar(passedConfig: SidebarConfigurableProps) {
  const sidebarConfig: SidebarConfig = useSidebarConfig(passedConfig);
  const screenWidth = useScreenWidth(sidebarConfig.mobileBreakpoint, passedConfig.onViewPortChange || (() => {}));
  const [isSidebarOpen, setIsSidebarOpen] = useState(passedConfig.initiallyOpened ?? false);

  const isMobileViewport = screenWidth < sidebarConfig.mobileBreakpoint;

  const stylesConfig = useSidebarStylesConfig(sidebarConfig, isMobileViewport, isSidebarOpen);

  const changeSidebarState = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
    passedConfig.onStateChange ? passedConfig.onStateChange(!isSidebarOpen) : (() => {})();
  }, [setIsSidebarOpen, passedConfig.onStateChange, isSidebarOpen]);

  return {
    isMobileViewport,
    isSidebarOpen,
    setIsSidebarOpen: changeSidebarState,
    stylesConfig,
  };
}