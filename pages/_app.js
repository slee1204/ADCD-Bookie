import Navbar from '@/comp/Navbar'
import '@/styles/globals.css'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: auto;
  }
`;

export default function App({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <Navbar />
    <Component {...pageProps} />
  </>
}
