import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {loader && <PreLoader />}
      <Head>
        <title>Shiv Niwas PG</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          // href="assets/images/favicon.png"
          href="https://png.pngtree.com/png-vector/20220207/ourmid/pngtree-shiv-hindi-calligraphy-brush-illustration-png-image_4377942.png"
          type="image/x-icon"
        />
        <link rel="icon" href="https://lh5.googleusercontent.com/p/AF1QipOodfsaUzJn_6fOnrfXtX7phjw9dSFci8laNclY" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
