import type {SidebarSelectedItemData} from "./sidebar-item.model.ts";

export type StateChangeCallback = (isOpened: boolean) => void;
export type ViewportChangeCallback = (currentWidth: number, isMobileView: boolean) => void;

export type ItemPressedCallback = (selectedItem: SidebarSelectedItemData) => void;

export type SidebarConfig = {
  mobileBreakpoint: number; // max width of the screen that considered a 'mobile'
  mobileHeight: number; // height of the sidebar when it's in 'mobile' view
  desktopMinifiedWidth: number; // width of the minified sidebar
  desktopOpenedWidth: number; // height of the opened sidebar

  initiallyOpened: boolean; // whether sidebar initially opened
  onStateChange: StateChangeCallback // a callback to call once sidebar isOpen state(true / false) changed
  onViewPortChange: ViewportChangeCallback;// a callback to call once display size has changed. Also called initially

  initiallySelectedItemData: SidebarSelectedItemData; // an item that should be initially selected
  onItemPressed: ItemPressedCallback; // a callback to call once item is pressed
};