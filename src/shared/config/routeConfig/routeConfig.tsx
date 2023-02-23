import { type RouteProps } from 'react-router-dom';
import { HomeAsync } from 'pages/Home';
import { AboutAsync } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePaths.home,
    element: <HomeAsync />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutAsync />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />
  }
}