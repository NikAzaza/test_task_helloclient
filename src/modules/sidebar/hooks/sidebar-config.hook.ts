import type {SidebarConfig} from "../models/sidebar-config.model.ts";
import type {SidebarConfigurableProps} from "../components/containers/sidebar.tsx";
import {
  MINIFIED_SIDEBAR_WIDTH_PX,
  MOBILE_BREAKPOINT_PX, MOBILE_VIEW_HEIGHT_PX,
  OPENED_SIDEBAR_WIDTH_PX
} from "../constants/default-sizes.constant.ts";
import {setConfigPixelRelatedValue} from "../utils/config.utils.ts";

export function useSidebarConfig(sidebarProps: SidebarConfigurableProps): SidebarConfig {

  return {
    mobileBreakpoint: setConfigPixelRelatedValue(sidebarProps.mobileBreakpoint, MOBILE_BREAKPOINT_PX),
    desktopMinifiedWidth: setConfigPixelRelatedValue(sidebarProps.desktopClosedWidth, MINIFIED_SIDEBAR_WIDTH_PX),
    desktopOpenedWidth: setConfigPixelRelatedValue(sidebarProps.desktopOpenedWidth, OPENED_SIDEBAR_WIDTH_PX),
    mobileHeight: setConfigPixelRelatedValue(sidebarProps.mobileHeight, MOBILE_VIEW_HEIGHT_PX),
  };
}