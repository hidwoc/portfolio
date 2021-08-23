import React from 'react';
import Footer from '../components/Footer/Footer';
import "./Layout.css"

const Layout = (props) => {
  return (
    <div id="layout-div">
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;