// pages/_app.tsx
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import '@fontsource/bebas-neue/400.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}