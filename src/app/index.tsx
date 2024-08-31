import {RouterProvider} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {Fonts, Normalize, Page} from "@/shared/utils/global-style";
import {routes} from "./app-router";

export const App = () =>
  <HelmetProvider>
    <Normalize/>
    <Fonts/>
    <Page/>

    <RouterProvider router={routes} />
  </HelmetProvider>
;
