import {useState} from "react";

type MinifiedItemsPopoverConfig = {
  isTriggeredByItem: boolean;
  isTriggeredByPopover: boolean;
  top: number;
  left: number;
  itemIndex: number;
};

export function useMinifiedItemsPopover() {
  const [config, setConfig] = useState<MinifiedItemsPopoverConfig>({
    top: 0,
    left: 0,
    itemIndex: 0,
    isTriggeredByItem: false,
    isTriggeredByPopover: false,
  });

  return {
    popoverConfig: config,
    // isPopoverVisible,
    changePopoverTriggerState: (isVisible: boolean) => setConfig((old) => ({...old, isTriggeredByPopover: isVisible})),
    updatePopoverConfig: (conf: MinifiedItemsPopoverConfig) => setConfig(conf),
  }
}
