import '../styles/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';

import { useRouter } from 'next/router';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
    <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
