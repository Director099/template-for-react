import {Outlet, ScrollRestoration} from 'react-router-dom';
import {Header, Footer} from "@/widgets";

export const Layout = () => {
  return (
    <div className='page__inner'>
      <ScrollRestoration />
      <Header/>
      <main className="page__content">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};
