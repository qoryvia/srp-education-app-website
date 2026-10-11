import Newsroom from "../pages/newsroom/Newsroom";
import NewsroomDetail from "../pages/newsroom/pages/NewsroomDetail";

export const newsroomRoutes = [
  {
    path: "newsroom",
    element: <Newsroom />,
  },
  {
    path: "newsroom/:slug",
    element: <NewsroomDetail />,
  },
];
