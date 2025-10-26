import type {SidebarConfig} from "../models/sidebar-config.model.ts";

export function useSidebarStyles(config: SidebarConfig, isMobileViewport: boolean, isSidebarOpened: boolean) {
  const sidebarWidth = isMobileViewport
    ? '100%' // in mobile view occupy the whole available width
    : isSidebarOpened ? config.desktopOpenedWidth: config.desktopMinifiedWidth; // for desktop use fixed width dependently on open state

  const sidebarHeight = isMobileViewport
    ? config.mobileHeight // for mobile view use fixed height
    : '100%'; // for desktop use all available height

  const viewportContainerClasses: string = isMobileViewport
    ? 'flex flex-row w-full'
    : 'flex flex-col h-full';

  const viewportScrollClasses: string = isMobileViewport
      ? 'w-auto max-w-full overflow-x-auto'
      : 'h-auto max-h-full overflow-y-auto';

  return {
    sidebarWidth,
    sidebarHeight,
    viewportContainerClasses,
    viewportScrollClasses,
  };
}
