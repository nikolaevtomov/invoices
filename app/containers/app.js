import React from "react";
import { Link } from 'react-router';
import Navigation from  'root/components/navigation';

export const AppContainer = ({ children }) => {
  return (
    <div className={'container'}>
      <Navigation />
      {children}
    </div>
  );
};

export default AppContainer;
