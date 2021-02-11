/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import Head from 'next/head';
import '../css/global.scss';

function LiDa({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default LiDa;
