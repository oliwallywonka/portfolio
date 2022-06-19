import React, { FC } from "react"
import type { AppProps } from "next/app"

import { css, Global } from "@emotion/react"
import { ChakraProvider } from "@chakra-ui/provider"
import { useColorMode } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"

import Layout from "../components/layouts/main"
import Fonts from "../components/fonts"
import theme from "../lib/theme"
import { prismDarkTheme, prismLightTheme } from "../lib/prism"

const GlogalStyle: FC<any> = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme}
        `}
      />
    </>
  )
}
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlogalStyle/>
      <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
    </ChakraProvider>
  )
}

export default MyApp
