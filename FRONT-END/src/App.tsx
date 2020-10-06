/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        {/* <Routes /> */}
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
