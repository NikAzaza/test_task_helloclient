import { type PropsWithChildren} from "react";

type SidebarFooterViewProps = {
  onItemPress: () => void;
  containerClass: string;
  iconContainerClass: string;
};

export function SidebarFooterView({
  children,
  onItemPress,
  containerClass,
  iconContainerClass,
}: PropsWithChildren<SidebarFooterViewProps>) {
  return (
    <div
      className={'flex flex-row ' + containerClass}
      onClick={onItemPress}
    >
      <div className={'flex flex-col ' + iconContainerClass}>
        {children}
      </div>
    </div>
  );
}
