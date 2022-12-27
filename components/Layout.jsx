import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import GoogleSearch from './GoogleSearch';

const Layout = ({ children }) => (
  <div className="layout">
    <Head>
      <title>CompSearch</title>
    </Head>
    <header>
      <Navbar />
      <GoogleSearch />
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>

);

export default Layout;
