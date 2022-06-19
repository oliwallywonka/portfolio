import type { NextPage } from "next"
import NextLink from "next/link"

import { Box, Container, Heading, Link } from "@chakra-ui/layout"
import { Button, Image, useColorModeValue } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import TechItem from "../components/tech-item"
const Home: NextPage = () => {
  const imgSource = '/assets/armadillo.png';
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m a full-stack developer based in Bolivia!
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-tittle">
              Alex Chura
            </Heading>
            <p> Freelancer ( Developer / Gamer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="200px"
              display="inline-block"
              borderRadius="full"
              src={imgSource}
              alt="prueba"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            {" "}
            My Name is Alex and {" "}
          </Paragraph>
          {/*<NextLink href='/works/inkdrop'>
          <Link>Inkdrop</Link>
          </NextLink>*/}
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {" "}
                My Portfolio{" "}
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2013</BioYear>
            Graduated from Adventista Franz Tamayo School
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Studing last year Engineer of Systems in Franz Tamayo University
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Works as a freelance
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Skills and Tools
          </Heading>
          <TechItem src="/assets/webicons/angular.svg" tech="Angular" />
          <TechItem src="/assets/webicons/nestjs-icon.svg" tech="NestJS" />
          <TechItem src="/assets/webicons/mysql.svg" tech="MySQL" />
          <TechItem src="/assets/webicons/react-icon.svg" tech="NextJS" />
          <TechItem src="/assets/webicons/github-icon.svg" tech="Github" />
          <TechItem src="/assets/webicons/docker-tile.svg" tech="Docker" />
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Languages
          </Heading>
          <Paragraph>
            English (Basic), Español (Nativo)
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>
            I love to listen music, play videogames at the midnight, see movies
            and series.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
