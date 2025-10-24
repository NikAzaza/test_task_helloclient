import {useEffect, useRef, useState} from "react";

export function useScreenWidth() {
  const widthRef = useRef<number>(window.innerWidth);
  const [_, setTrigger] = useState<number>(0);

  const saveScreenSize = () => {
    widthRef.current =  window.innerWidth;
    setTrigger(widthRef.current);
  }

  useEffect(() => {
    window.addEventListener('resize', saveScreenSize);

    return () => {
      window.removeEventListener('resize', saveScreenSize);
    }
  }, []);

  return widthRef.current;
}