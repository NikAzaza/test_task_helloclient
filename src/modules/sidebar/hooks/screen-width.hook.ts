import {useEffect, useRef, useState} from "react";
import type {SidebarConfig} from "../models/sidebar-config.model.ts";

export function useScreenWidth(config: SidebarConfig) {
  const widthRef = useRef<number>(window.innerWidth);

  const [_, setTrigger] = useState<number>(0);

  const saveScreenSize = () => {
    const width = window.innerWidth;

    widthRef.current = width;
    setTrigger(width);
    config.onViewPortChange(width, width <  config.mobileBreakpoint);
  }

  useEffect(() => {
    config.onViewPortChange(window.innerWidth, window.innerWidth < config.mobileBreakpoint);

    window.addEventListener('resize', saveScreenSize);

    return () => {
      window.removeEventListener('resize', saveScreenSize);
    }
  }, []);

  return widthRef.current;
}