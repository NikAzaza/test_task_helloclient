import {createBrowserRouter, type RouteObject} from "react-router";
import {HomePage} from "../../components/pages/home/home-page.tsx";
import {ActionsPage} from "../../components/pages/actions/actions-page.tsx";
import {Action1Page} from "../../components/pages/action1/action1-page.tsx";
import {Action2Page} from "../../components/pages/action2/action2-page.tsx";
import {Action3Page} from "../../components/pages/action3/action3-page.tsx";
import {AboutUsPage} from "../../components/pages/about-us/about-us-page.tsx";
import {RoutePaths} from "../../enums/route-paths.enum.ts";
import {RootPage} from "../../components/pages/root/root-page.tsx";

export const APP_ROUTES: RouteObject[] = [
  {
    path: RoutePaths.HOME,
    index: true,
    Component: HomePage
  },
  {
    path: RoutePaths.ACTIONS,
    Component: ActionsPage,
    children: [
      { path: RoutePaths.ACTION_1, Component: Action1Page },
      { path: RoutePaths.ACTION_2, Component: Action2Page },
      { path: RoutePaths.ACTION_3, Component: Action3Page },
    ],
  },
  {
    path: RoutePaths.ABOUT_US,
    Component: AboutUsPage
  },
]

export const ROUTER = createBrowserRouter(APP_ROUTES);
export const ROUTER_2 = createBrowserRouter([{path: '/', Component: RootPage, children: APP_ROUTES}]);