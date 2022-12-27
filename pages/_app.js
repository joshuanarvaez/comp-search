/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from '../components/Layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  const { prop1, prop2, prop3 } = pageProps;
  return (
    <Provider store={store}>
      <Layout>
        <Component prop1={prop1} prop2={prop2} prop3={prop3} />
      </Layout>
    </Provider>

  );
};

export default App;
