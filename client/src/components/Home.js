import React from 'react';
import {
  Header,
  Segment,
  Container,
  Grid,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
      <Segment inverted>
        <Container>
          <br />
          <Header as='h1' inverted textAlign='center'>Spotify Mixoff</Header>
          <Header as='h2' inverted textAlign='center'>A helper app to facilitate monthly playlist/mixoff groups</Header>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Link to="/new_mixoff">
                  <Button primary>New Mixoff</Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Home;

