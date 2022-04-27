import {
  Container,
  Box,
  Text,
  Heading,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react"
import { WorkGridItem } from "../../components/grid-item"
import Section from "../../components/section"
import armadillo from '../../public/assets/armadillo.png'
const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section >
              <WorkGridItem id='sisgamb' title='inkdrop' thumbnail={armadillo}>
                  A markDown note-taking app
              </WorkGridItem>
          </Section>

          <Section >
              <WorkGridItem id='inkdrop' title='inkdrop' thumbnail={armadillo}>
                  A markDown note-taking app
              </WorkGridItem>
          </Section>
      </SimpleGrid>

      <Heading as="h3" fontSize={20} mb={4}>
        University Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section >
              <WorkGridItem id='inkdrop' title='inkdrop' thumbnail={armadillo}>
                  A markDown note-taking app
              </WorkGridItem>
          </Section>

          <Section >
              <WorkGridItem id='inkdrop' title='inkdrop' thumbnail={armadillo}>
                  A markDown note-taking app
              </WorkGridItem>
          </Section>
      </SimpleGrid>
    </Container>
  )
}
export default Works
