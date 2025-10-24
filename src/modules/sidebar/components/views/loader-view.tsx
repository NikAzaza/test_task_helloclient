import type {PropsWithChildren} from "react";

export function LoaderView({ children }: PropsWithChildren<{ }>) {
  return (
    <div className='flex w-full place-content-center'>
      { children }
    </div>
  );
}