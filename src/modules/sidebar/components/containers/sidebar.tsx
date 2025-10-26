import type {SidebarItem, SidebarSelectedItemData} from "../../models/sidebar-item.model.ts";
import {SidebarLoader, type SidebarLoaderProps} from "./sidebar-loader.tsx";
import {SidebarFooter, type SidebarFooterProps} from "./sidebar-footer.tsx";
import {SidebarHeader, type SidebarHeaderProps} from "./sidebar-header.tsx";
import {SidebarContent} from "./sidebar-content.tsx";
import {useSidebar} from "../../hooks/sidebar.hook.ts";
import type {
  StateChangeCallback,
  ViewportChangeCallback
} from "../../models/sidebar-config.model.ts";

export type SidebarConfigurableProps = Partial<{
  // sidebar size-related values
  mobileBreakpoint: number;
  mobileHeight: number;
  desktopClosedWidth: number;
  desktopOpenedWidth: number;

  // sidebar state-related and viewport change-related values
  initiallyOpened: boolean;
  onStateChange: StateChangeCallback;
  onViewPortChange: ViewportChangeCallback;

  // sidebar selected-related config
  initiallySelectedItem: SidebarSelectedItemData;
  onItemPressedCallback: (selectedItem: SidebarSelectedItemData) => void;
}>;

type SidebarProps<Item> = SidebarLoaderProps & SidebarHeaderProps & SidebarFooterProps & SidebarConfigurableProps & {
  items: Item[];
  isLoading?: boolean;
  sidebarContainerClasses?: string;
}

export function Sidebar<Item extends SidebarItem>(props: SidebarProps<Item>) {
  const {
    stylesConfig,
    isMobileViewport,
    isSidebarOpen,
    setIsSidebarOpen,
    selectionUtils,
  } = useSidebar<Item>(props, props.items);

  return (
    <aside
      className={`sidebar-container relative ${stylesConfig.viewportContainerClasses} ${props.sidebarContainerClasses || ''}`}
      style={{width: stylesConfig.sidebarWidth, height: stylesConfig.sidebarHeight}}
    >
      {/* optional loader */}
      {
        props.isLoading &&
          <SidebarLoader
            loaderContainerClasses={props.loaderContainerClasses}
            customLoaderComponent={props.customLoaderComponent}
          />
      }

      {/*header, content and footer */}
      <div className={`sidebar-content-wrapper ${stylesConfig.viewportContainerClasses}`}>
        {
          !isMobileViewport &&
          <SidebarHeader
            titleLabel={props.titleLabel}
            headerContainerClasses={props.headerContainerClasses}
            headerTitleContainerClasses={props.headerTitleContainerClasses}
            headerTitleClasses={props.headerTitleClasses}
            headerTitleComponent={props.headerTitleComponent}
          />
        }

        <SidebarContent
          items={props.items}
          isExpanded={isSidebarOpen}
          isMobileView={isMobileViewport}
          viewportClasses={`${stylesConfig.viewportContainerClasses} ${stylesConfig.viewportScrollClasses}`}
          selectUtils={selectionUtils}
        ></SidebarContent>

        {
          !isMobileViewport &&
          <SidebarFooter
            isOpen={isSidebarOpen}
            onItemPress={() => setIsSidebarOpen()}
          />
        }
      </div>
    </aside>
  );
}
