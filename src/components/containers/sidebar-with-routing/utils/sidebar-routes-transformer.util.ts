import type {SidebarItem, SidebarSelectedItemData, SidebarSubItem} from "../../../../modules/sidebar";
import type {RouteObject} from "react-router";
import {RoutePaths} from "../enums/route-paths.enum.ts";
import {ROUTE_LABELS} from "../constant/routes/route-labels.constant.ts";
import {ROUTE_ICONS} from "../constant/routes/route-icons.constant.ts";

export function transformRoutesToSidebarItems(routes: RouteObject[]): {
  items: SidebarItem[],
  initialSelection: SidebarSelectedItemData,
  routesMap: Record<string, SidebarSelectedItemData>,
} {
  const sidebarItems: SidebarItem[] = [];
  const initiallySelectedItems: SidebarSelectedItemData = {index: null, childIndex: null};
  const pathToIndexMap: Record<string, SidebarSelectedItemData> = {};

  routes.forEach((rootRoute, index) => {
    const children: SidebarSubItem[] | undefined = rootRoute.children
    ? rootRoute.children.map(childRoute=> transformChildRoute(rootRoute.path || '', childRoute))
    : undefined;

    const route: SidebarItem = {
      key: rootRoute.path || '',
      label: ROUTE_LABELS[(rootRoute.path || RoutePaths.HOME) as RoutePaths],
      iconData: ROUTE_ICONS[(rootRoute.path || RoutePaths.HOME) as RoutePaths],
      children
    };

    if (!!rootRoute.index) {
      initiallySelectedItems.index = index;
    }

    pathToIndexMap[`/${rootRoute.path}`] = {index, childIndex: null};

    if (children) {
      children.forEach((childRoute, childIndex) => {
        pathToIndexMap[`/${childRoute.key}`] = {index, childIndex};
      })
    }

    sidebarItems.push(route);
  });

  return {initialSelection: initiallySelectedItems, items: sidebarItems, routesMap: pathToIndexMap};
}

function transformChildRoute(parentRouteKey: string, childRoute: RouteObject): SidebarSubItem {
  return {
    key: `${parentRouteKey}/${childRoute.path}`,
    label: !!childRoute.path ? ROUTE_LABELS[(childRoute.path|| RoutePaths.HOME) as RoutePaths] : '',
  };
}
