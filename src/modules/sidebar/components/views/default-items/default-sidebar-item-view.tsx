import { DefaultSidebarItemIconView } from "./default-sidebar-item-icon-view.tsx";
import type {MouseEventHandler, PropsWithChildren, ReactNode} from "react";

type DefaultSidebarItemViewProps = {
  title: string;
  imageSrc: string;
  textComponent?: ReactNode;
  containerClasses?: string;
  mouseEnterCallback: MouseEventHandler<HTMLLIElement>;
  mouseLeaveCallback: MouseEventHandler<HTMLLIElement>;
};

export function DefaultSidebarItemView({
  title,
  imageSrc,
  containerClasses,
  textComponent,
  children,
  mouseEnterCallback,
  mouseLeaveCallback,
}: PropsWithChildren<DefaultSidebarItemViewProps>) {
  return (
    <li
      title={title}
      className={'flex flex-col rounded-2xl ' + (containerClasses || '')}
      onMouseEnter={mouseEnterCallback}
      onMouseLeave={mouseLeaveCallback}
    >
      <div className='flex flex-row'>
        <DefaultSidebarItemIconView imageSrc={imageSrc} />
        {textComponent}
      </div>
      {children}
    </li>
  );
}
