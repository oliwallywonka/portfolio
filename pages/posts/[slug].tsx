import { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { IFrontMatter } from "."
import { getFileBySlug, getFiles } from "../../lib/mdx"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import MDXComponents from "../../components/MDXComponents"

interface IPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  frontMatter: {
    slug: string
  }
}
const Post = ({ source, frontMatter }: IPost) => {
  return <MDXRemote {...source} components={MDXComponents}/>
}

export default Post

interface IParams extends ParsedUrlQuery {
  source: string
  slug: string
}
export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as IParams
  const { source, frontMatter } = await getFileBySlug(slug)
  return {
    props: { source, frontMatter },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles()
  const paths = posts.map(post => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
