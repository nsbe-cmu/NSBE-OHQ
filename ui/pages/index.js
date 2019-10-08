// pages/index.js

import Layout from '../components/Layout';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Segment 
    inverted
    textAlign='center'
    style={{ minHeight: 500 }}
    vertical
    color="green"
    >
    <Container text>
      <Header
        as='h1'
        content='NSBE OHQ'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '2em',
        }}
      />
      <Header
        as='h2'
        content='Help whenever you need it.'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <Button primary size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Container>
  </Segment>
)

export default function Index() {
  return (
    <Layout page='home'>
      <HomepageHeading/>
      <p>This is the home page</p>
    </Layout>
  );
}