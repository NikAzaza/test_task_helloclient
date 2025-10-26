import { DefaultSidebarItemIconView } from "./default-sidebar-item-icon-view.tsx";
import type {PropsWithChildren, ReactNode} from "react";

type DefaultSidebarItemViewProps = {
  imageSrc: string;
  textComponent?: ReactNode;
  containerClasses?: string;
};

export function DefaultSidebarItemView({
  imageSrc,
  containerClasses,
  textComponent,
  children,
}: PropsWithChildren<DefaultSidebarItemViewProps>) {
  return (
    <li className={'flex flex-col ' + (containerClasses || '')}>
      <div className='flex flex-row'>
        <DefaultSidebarItemIconView imageSrc={imageSrc} />
        {textComponent}
      </div>
      {children}
    </li>
  );
}
