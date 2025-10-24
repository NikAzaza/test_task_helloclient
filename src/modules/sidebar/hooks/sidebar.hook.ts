import {useState} from "react";
import {useScreenWidth} from "./screen-width.hook.ts";
import {useSidebarStylesConfig} from "./sidebar-styles-config.hook.ts";
import {useSidebarConfig} from "./sidebar-config.hook.ts";
import type {SidebarConfigurableProps} from "../components/containers/sidebar.tsx";
import type {SidebarConfig} from "../models/sidebar-config.model.ts";

export function useSidebar(passedConfig: SidebarConfigurableProps) {
  const screenWidth = useScreenWidth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarConfig: SidebarConfig = useSidebarConfig(passedConfig);

  const isMobileViewport = screenWidth < sidebarConfig.mobileBreakpoint;

  const stylesConfig = useSidebarStylesConfig(sidebarConfig, isMobileViewport, isSidebarOpen);

  return {
    isMobileViewport,
    isSidebarOpen,
    setIsSidebarOpen,
    stylesConfig,
  };
}