import { Box, Image } from "@chakra-ui/react"

interface ITechItem {
  src: string
  tech: string
}
const TechItem = ({ src, tech }: ITechItem) => (
  <Box display="flex" pb={2} alignSelf="start" justifyContent="strech">
    <Image
      maxWidth="30px"
      display="inline-block"
      borderRadius="full"
      pr={2}
      src={src}
      alt="prueba"
    />
    {tech}
  </Box>
)

export default TechItem
