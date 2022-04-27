import React from "react"
import { NextRouter } from "next/router"
import Head from "next/head"
import { Box, ColorModeScript, Container } from "@chakra-ui/react"
import NoSsr from "../no-ssr"
import NavBar from "../navbar"
import VoxelTotoro from "../voxel-totoro"
interface ILayout {
  children: React.ReactNode
  router: NextRouter
}
function Main({ children, router }: ILayout) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Alex portafolio </title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelTotoro />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
