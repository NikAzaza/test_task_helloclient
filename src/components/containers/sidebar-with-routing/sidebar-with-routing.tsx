import {useState} from "react";
import {Sidebar, type SidebarSelectedItemData} from "../../../modules/sidebar";
import {Outlet, useLocation, useNavigate} from "react-router";
import {APP_ROUTES} from "./constant/routes/routes.constant.ts";
import {transformRoutesToSidebarItems} from "./utils/sidebar-routes-transformer.util.ts";

export function SidebarWithRouting() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMinifiedView, setIsMinifiedView] = useState(false);

  const pageClasses = isMobileView ? 'flex-col-reverse' : 'flex-row';

  const routesData = transformRoutesToSidebarItems(APP_ROUTES);
  const initialUrlSelectedRoute = routesData.routesMap[location.pathname];

  function handleItemPress(selectedItemData: SidebarSelectedItemData) {
    if (!Number.isInteger(selectedItemData.index)) {
      return;
    }

    const pressedItem = routesData.items[selectedItemData.index || 0];
    let childPath: string | undefined = undefined;

    if (pressedItem.children && Number.isInteger(selectedItemData.childIndex)) {
      childPath = pressedItem.children[selectedItemData.childIndex || 0].key;
    }

    navigate(childPath ?? pressedItem.key)
  }

  return (
    <div className={`flex ${pageClasses} w-full h-full`}>
      <Sidebar
        items={routesData.items}
        initiallySelectedItem={initialUrlSelectedRoute ?? routesData.initialSelection}
        titleLabel={isMinifiedView ? '' : 'header'}
        desktopClosedWidth={40}
        onStateChange={(isOpened) => setIsMinifiedView(!isOpened)}
        onViewPortChange={(_, isMobileView) => setIsMobileView(isMobileView)}
        onItemPressedCallback={handleItemPress}
      />
      <div className='flex-col ml-4'>
        <Outlet />
      </div>
    </div>
  );
}