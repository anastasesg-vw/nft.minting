import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Web3ContextProvider } from '../src/context';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-left"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
        />
      </>
    </Web3ContextProvider>
  );
}

export default MyApp;
