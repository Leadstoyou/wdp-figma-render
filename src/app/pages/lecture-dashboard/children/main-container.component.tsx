import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const MainContainer = ({ children }: Props) => {
  return (
    <div className="instructor-main-container">
      <div className="instructor-responsive-container">{children}</div>
    </div>
  );
};

export default MainContainer;
