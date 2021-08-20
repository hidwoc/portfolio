import React from 'react';
import Footer from '../components/Footer/Footer';

const Layout = (props) => {
  return (
    <div>
      LAYOUT
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;