import { newsroomRoutes } from './news.routes';
import { pageRoutes } from './page.routes';
import Home from '../pages/home/Home';
import MainLayout from '../layout/MainLayout';

export const appRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      ...pageRoutes,
      ...newsroomRoutes,
    ],
  },
];
