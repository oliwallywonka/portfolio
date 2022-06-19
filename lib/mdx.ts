import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { serialize } from "next-mdx-remote/serialize"
import mdxPrism from "mdx-prism"
import a from "remark-autolink-headings"
import b from "remark-slug"
import c from "remark-code-titles"

const root = process.cwd()

export const getFiles = () => fs.readdirSync(path.join(root, "data/blog"))

export const getFileBySlug = async (slug: string) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "data/blog", `${slug}.mdx`),
    "utf8",
  )
  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [a,b,c],
      rehypePlugins: [mdxPrism],
    },
  })

  return {
    source,
    frontMatter: {
      ...data,
      slug,
    },
  }
}

export const getAllFilesMetaData = () => {
  const files = getFiles()
  return files.reduce((allPosts: any, postSlug: any) => {
    const mdxSource = fs.readFileSync(path.join(root, "data/blog", postSlug))
    const { data } = matter(mdxSource)
    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts]
  }, [])
}
