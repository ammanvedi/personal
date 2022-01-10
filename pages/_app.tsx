import type {AppProps} from 'next/app';
import {ThemeProvider} from "styled-components";
import {MDXProvider} from '@mdx-js/react';
import * as Typog from '../component/typography';
import {Layout, PostLayout} from "../component/layout";
import {theme} from "../component/style/theme";
import GlobalStyles from '../styles/globals'

const components = {
    h1: Typog.H1,
    h2: Typog.H2,
    h3: Typog.H3,
    p: Typog.Body,
    wrapper: PostLayout
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <MDXProvider components={components}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </MDXProvider>
  )
}

export default MyApp
