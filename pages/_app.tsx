import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/provider"
import Layout from "../components/layouts/main"
import Fonts from "../components/fonts"
import theme from "../lib/theme"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
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
