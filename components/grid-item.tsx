import NextLink from "next/link"
import Image, { StaticImageData } from "next/image"
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { Global } from "@emotion/react"

interface IGridItem {
  children: React.ReactNode
  href: string
  title: string
  thumbnail: StaticImageData
}

export const GridItem = ({ children, href, title, thumbnail }: IGridItem) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

interface IWorkGridItem {
  children: React.ReactNode
  id: string
  title: string
  thumbnail: StaticImageData
  path?: string
}

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  path = 'works'
}: IWorkGridItem) => (
  <Box w="100%" align="center">
    <NextLink href={`/${path}/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
            border-radius: 20px;
        }
    `}
  ></Global>
)
