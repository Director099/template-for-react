import {createBrowserRouter} from 'react-router-dom';
import {Path} from "@/shared/config";
import {Main, NotFound} from "@/pages";
import {Layout} from "./layout";

export const routes = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        element: <Main helmetTitle="Главная страница"/>,
        path: Path.Main,
      },
      {
        element: <NotFound helmetTitle="Сраница не найдена"/>,
        path: Path.NotFound
      },
    ]
  },
]);
