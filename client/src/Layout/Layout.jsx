import React from 'react';
import Footer from '../components/Footer/Footer';
import "./Layout.css"

const Layout = (props) => {
  return (
    <div>
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;