//import '../styles/globals.css'
import "../styles/index.scss";
//import { AppProps } from 'next/app'
import { GlobalStyle } from "../styles/globalStyles";
import axios from "axios";

import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'
import 'antd/dist/antd.css'
//import 'swiper/swiper.scss'

axios.defaults.baseURL = "http://196.6.186.100:8085/";
axios.defaults.timeout = 60000;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
