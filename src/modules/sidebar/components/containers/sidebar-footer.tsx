import {SidebarFooterView} from "../views/sidebar-footer-view.tsx";

export type SidebarFooterProps = {};

type SidebarFooterStateProps = {
  isOpen: boolean;
  onItemPress: () => void;
};

export function SidebarFooter({
  isOpen,
  onItemPress,
}: SidebarFooterProps & SidebarFooterStateProps) {
  const iconContent = isOpen ? '<' : '>';

  return (
    <footer className='sidebar-footer-container mt-auto '>
      <SidebarFooterView
        containerClass={''}
        iconContainerClass={''}
        onItemPress={onItemPress}
      ><button>{iconContent}</button></SidebarFooterView>
    </footer>

  );
}
