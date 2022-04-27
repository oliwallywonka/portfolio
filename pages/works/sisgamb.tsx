import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
  return (
    <Layout>
      <Container>
        <Title>
          SISGAMB <Badge>2021</Badge>
        </Title>
        <P> A document management system for municipality of Batallas</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.sisgamb.com">
              https://www.sisgamb.com
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>STACK</Meta>
            <span>NodeJS, Angular, MySQL</span>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <P> A document management system for municipality of Batallas</P>
            <WorkImage src="/assets/armadillo.png" alt="sisgamb" />
          </ListItem>
        </List>

        <P> A document management system for municipality of Batallas</P>
        <WorkImage src="/assets/armadillo.png" alt="sisgamb" />
        <WorkImage src="/assets/armadillo.png" alt="sisgamb" />
      </Container>
    </Layout>
  )
}

export default Work
