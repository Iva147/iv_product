import {RouteProps} from 'react-router-dom';
import {HomeAsync} from 'pages/Home';
import {AboutAsync} from 'pages/About';

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about"
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePaths.home,
    element: <HomeAsync />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutAsync />
  }
}