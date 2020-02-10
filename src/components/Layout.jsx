/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Layout = (props) => (
  <main className="main container">
    { props.children }
  </main>
);

export default Layout;
