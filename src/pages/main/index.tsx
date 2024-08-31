import {Helmet} from "react-helmet-async";
import { Link } from 'react-router-dom';
import {helmetTypes} from "@/shared/types";
import {Btn} from "@/shared/ui";

export const Main = ({helmetTitle}: helmetTypes) =>
  <>
    <Helmet>
      <title>{helmetTitle}</title>
    </Helmet>
    <Btn
      type='button'
      onClick={() => alert('Кнопка нажата!')}
    >
      test
    </Btn>
  </>
