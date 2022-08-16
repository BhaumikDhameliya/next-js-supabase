import '../styles/styles.scss';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import {RecoilRoot} from "recoil";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (<RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>)
}