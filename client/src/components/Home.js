import React, { Component } from 'react';
import {
  Header,
  Segment,
  Container,
  Grid,
} from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    axios.get('/api/spotify/playlists')
      .then( res => {
        console.log(res.data);
      })
      .catch( res => {
        console.log(res);
      })
  }

  render() {
    return (
      <Segment>
        <Container>
          <Header as='h1' style={styles.main} textAlign='center'>Spotify Mixoff</Header>
          <Header as='h2' style={styles.main} textAlign='center'>A helper app to facilitate monthly playlist/mixoff groups</Header>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column
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

const styles = {
  main: {
    color: '#FFF',
  }
}

export default Home;
