import {useEffect, useRef, useState} from "react";

export function useScreenWidth(
  mobileBreakpoint: number,
  callback: (width: number, isMobileView: boolean) => void,
) {
  const widthRef = useRef<number>(window.innerWidth);
  const [_, setTrigger] = useState<number>(0);

  callback(window.innerWidth, window.innerWidth < mobileBreakpoint);

  const saveScreenSize = () => {
    const width = window.innerWidth;

    widthRef.current = width;
    setTrigger(width);
    callback(width, width < mobileBreakpoint);
  }

  useEffect(() => {
    window.addEventListener('resize', saveScreenSize);

    return () => {
      window.removeEventListener('resize', saveScreenSize);
    }
  }, []);

  return widthRef.current;
}