import '../styles/globals.css'
import type {AppProps} from 'next/app';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {MDXProvider} from '@mdx-js/react';
import * as Typog from '../component/typography';
import {Layout} from "../component/layout";
import {getMq, theme} from "../component/style/theme";
import '../styles/code-theme.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    
    @media(min-width: ${getMq('t')}) {
      font-size: 112.5%;
    }

    @media(min-width: ${getMq('d')}) {
      font-size: 131.3%;
    }
  }
  
  body {
    fontFamily: "'Helvetica Neue', 'Helvetica', sans-serif";
  }
  
  .img {
    border-radius: 8px;
  }
`

const components = {
    h1: Typog.H1,
    h2: Typog.H2,
    h3: Typog.H3,
    p: Typog.Body,
    wrapper: Layout
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <MDXProvider components={components}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </MDXProvider>
  )
}

export default MyApp
