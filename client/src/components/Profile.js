import React, { Component } from 'react';
import {
  Header,
  Segment,
  Container,
} from 'semantic-ui-react';
import axios from 'axios';

class Profile extends Component {
  state = { playlists: [] }

  componentDidMount() {
    axios.get('/api/spotify/playlists')
      .then( res => {
        console.log(res);
      })
      .catch( res => {
        console.log(res);
      })
  }

  render() {
    const { playlists } = this.state;
    return (
      <Segment inverted>
        <Container>
          {
            playlists.map( playlist => {
            <p>playlist</p>
          })
        }
        </Container>
      </Segment>
    )
  }
}

export default Profile;
