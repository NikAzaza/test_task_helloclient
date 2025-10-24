import { DefaultSidebarItemIconView } from "./default-sidebar-item-icon-view.tsx";
import type { PropsWithChildren } from "react";

type DefaultSidebarItemViewProps = {
  imageSrc: string;
  containerClasses?: string;
};

export function DefaultSidebarItemView({
  imageSrc,
  containerClasses,
  children,
}: PropsWithChildren<DefaultSidebarItemViewProps>) {
  return (
    <li className={'flex ' + (containerClasses || '')}>
      <DefaultSidebarItemIconView imageSrc={imageSrc} />
      {children}
    </li>
  );
}
