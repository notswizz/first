// pages/_app.js
import "@/styles/globals.css";
import '@farcaster/auth-kit/styles.css';
import { AuthKitProvider } from '@farcaster/auth-kit';

const config = {
  rpcUrl: 'https://mainnet.optimism.io',
  domain: 'localhost', // Your app's domain
  siweUri: 'http://localhost:3000', // Local auth endpoint
};

function MyApp({ Component, pageProps }) {
  return (
    <AuthKitProvider config={config}>
      <Component {...pageProps} />
    </AuthKitProvider>
  );
}

export default MyApp;
