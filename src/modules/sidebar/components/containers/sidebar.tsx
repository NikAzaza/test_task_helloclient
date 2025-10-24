import type { SidebarItem } from "../../models/sidebar-item.model.ts";
import {SidebarLoader, type SidebarLoaderProps} from "./sidebar-loader.tsx";
import {SidebarFooter, type SidebarFooterProps} from "./sidebar-footer.tsx";
import {SidebarHeader, type SidebarHeaderProps} from "./sidebar-header.tsx";
import {SidebarContent} from "./sidebar-content.tsx";
import {useSidebar} from "../../hooks/sidebar.hook.ts";

export type SidebarConfigurableProps = Partial<{
  mobileBreakpoint: number;
  mobileHeight: number;
  desktopClosedWidth: number;
  desktopOpenedWidth: number;
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
  } = useSidebar(props);

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
        ></SidebarContent>

        {
          !isMobileViewport &&
          <SidebarFooter
            isOpen={isSidebarOpen}
            onItemPress={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        }
      </div>
    </aside>
  );
}
