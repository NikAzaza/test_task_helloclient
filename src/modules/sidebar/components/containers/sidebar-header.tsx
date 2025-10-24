import {SidebarHeaderView} from "../views/sidebar-header-view.tsx";
import type {ReactNode} from "react";

export type SidebarHeaderProps = {
  titleLabel: string;
  // additional classes in case we need to add some styles to default header
  headerContainerClasses?: string;
  headerTitleContainerClasses?: string;
  headerTitleClasses?: string;
  // custom header element
  headerTitleComponent?: ReactNode;
};

export function SidebarHeader({
  titleLabel,
  headerContainerClasses,
  headerTitleContainerClasses,
  headerTitleClasses,
  headerTitleComponent,
}: SidebarHeaderProps) {
  return (
    <header className={'sidebar-header-container ' + (headerContainerClasses || '')}>
      {
        !!headerTitleComponent
          ? (headerTitleComponent)
          : (
            <SidebarHeaderView
              title={titleLabel}
              titleClasses={headerTitleClasses || ''}
              titleContainerClasses={headerTitleContainerClasses || ''}
            />
          )
      }
    </header>
  );
}
