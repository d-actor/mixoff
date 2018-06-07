import React, { Component } from 'react';
import {
  Header,
  Segment,
  Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../actions/headers';
import { Link } from 'react-router-dom';

class Profile extends Component {
  state = { playlists: [] }

  componentDidMount() {
  const {dispatch} = this.props;
    axios.get('/api/spotify/playlists')
      .then( res => {
        dispatch(setHeaders(res.headers));
        this.setState({ playlists: res.data });
      })
      .catch( res => {
        console.log(res);
      })
  }
  showPlaylists = () => {
    const { playlists } = this.state;
    return playlists.map( playlist => {
      return(
        <Header as='h1'inverted>{playlist.name}</Header>
        <Link to={`/playlist/${playlist.id}`}>
          View Playlist
        </Link>
      )
    })
  }

  render() {
    return (
      <Segment inverted>
        <Container>
          {this.showPlaylists()}
        </Container>
      </Segment>
    )
  }
}

export default connect()(Profile);
