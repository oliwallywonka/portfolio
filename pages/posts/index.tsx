import { Container, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import Head from "next/head"
import { WorkGridItem } from "../../components/grid-item"
import Section from "../../components/section"
import { getAllFilesMetaData } from "../../lib/mdx"
import armadillo from "../../public/assets/armadillo.png"

interface IPosts {
  posts: IFrontMatter[]
}
export interface IFrontMatter {
  title: string;
  slug: string;
  description?: string;
  tags?: string[];
  thumbnail?: string;
}
const Blog = ({ posts }: IPosts) => {
  return (
    <>
      <Head>
        <title>Blog - Alex Chura</title>
      </Head>
      <Container>
        <Stack
          as="main"
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="800px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="800px"
            px={4}
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size={"2xl"}>
              Blog
            </Heading>
            <Heading as="h3" fontSize={20} mb={4}>
              Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              {posts.map(post => (
                <Section key={post.slug}>
                  <WorkGridItem
                    id={post.slug}
                    title={post.title}
                    thumbnail={armadillo}
                    path='posts'
                  >
                    {post.description}
                  </WorkGridItem>
                </Section>
              ))}
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllFilesMetaData()
  return {
    props: { posts },
  }
}
