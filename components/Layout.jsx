import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import GoogleSearch from './GoogleSearch';
import ChatGPT from './ChatGPT';

const Layout = ({ children }) => 
   (
    <>
    <Head>
        <title>CompSearch</title>
    </Head>
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <GoogleSearch />
            <ChatGPT />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    </> 
  )


export default Layout;