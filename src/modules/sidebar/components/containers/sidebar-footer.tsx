import {SidebarFooterView} from "../views/sidebar-footer-view.tsx";
import type {ReactNode} from "react";

export type SidebarFooterProps = {
  // some additional props to have a possibility to customize footer, if required
  footerContainerClasses?: string;
  footerToggleWrapperClasses?: string;
  footerToggleComponent?: ReactNode;
};

type SidebarFooterStateProps = {
  isOpen: boolean;
  onItemPress: () => void;
};

export function SidebarFooter({
  isOpen,
  onItemPress,
  footerContainerClasses,
  footerToggleWrapperClasses,
  footerToggleComponent,
}: SidebarFooterProps & SidebarFooterStateProps) {
  const iconContent = isOpen ? '<' : '>';

  return (
    <footer className='sidebar-footer-container mt-auto '>
      <SidebarFooterView
        containerClass={footerContainerClasses || ''}
        iconContainerClass={footerToggleWrapperClasses || ''}
        onItemPress={onItemPress}
      >
        {
          !!footerToggleComponent
            ? (footerToggleComponent)
            : <button>{iconContent}</button>
        }
      </SidebarFooterView>
    </footer>

  );
}
