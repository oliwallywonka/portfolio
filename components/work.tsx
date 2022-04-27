import NextLink from "next/link"
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

interface IChildren {
  children: React.ReactNode
}
interface IImage {
  src: string
  alt: string
}
export const Title = ({ children }: IChildren) => (

  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }: IImage) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }: IChildren) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
