// pages/_app.js
import "@/styles/globals.css";
import '@farcaster/auth-kit/styles.css';




function MyApp({ Component, pageProps }) {
  return (
  
      <Component {...pageProps} />
   
  );
}

export default MyApp;
