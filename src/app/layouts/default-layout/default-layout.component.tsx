import React, { FC, Fragment, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.component';
import Header from '../header/header.component';

interface DefaultLayoutProps {
  isHeader?: boolean;
  children?: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ isHeader = true, children }) => {
  return (
    <Fragment>
      {isHeader && <Header />}
      <main>
        <Outlet />
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
