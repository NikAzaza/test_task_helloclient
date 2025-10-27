import type {SidebarSubItem} from "../../../models/sidebar-item.model.ts";
import type {MouseEventHandler} from "react";

type DefaultPopoverProps = {
  items: SidebarSubItem[];
  top: string;
  left: string;
  isSubItemSelectedFn: (index: number) => boolean;
  onSubItemPress: (index: number) => void;
  onLeaveCallback: MouseEventHandler<HTMLDivElement>;
  onEnterCallback: MouseEventHandler<HTMLDivElement>;
}

export function DefaultPopover({
  items,
  top,
  left,
  onLeaveCallback,
  onEnterCallback,
  onSubItemPress,
  isSubItemSelectedFn,
}: DefaultPopoverProps) {
  return (
    <>
      <div
        className='fixed flex flex-col rounded-lg w-60 z-10 overflow-hidden'
        style={{ top, left }}
        onMouseLeave={onLeaveCallback}
        onMouseEnter={onEnterCallback}
      >
        <ul className='max-h-40 overflow-auto'>
          {
            items.map((item, index) => (
              <li
                className={'cursor-pointer ' + (isSubItemSelectedFn(index) ? 'bg-blue-500' : 'bg-blue-200')}
                key={item.key}
                onClick={() => onSubItemPress(index)}
              >
                <p>
                  {item.label}
                </p>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
};