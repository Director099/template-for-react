import {Helmet} from "react-helmet-async";
import {helmetTypes} from "@/shared/types";

export const NotFound = ({helmetTitle}: helmetTypes) =>
  <>
    <Helmet>
      <title>{helmetTitle}</title>
    </Helmet>
    <h1>404. Page not found</h1>
  </>
;
