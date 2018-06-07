import React from 'react';
import connect from 'react-redux';
import {
  Header,
  Container,
  Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Playlist = ({ playlist = {} }) => (
  <Container>
    <Link to='/profile'>Back to Profile</Link>
    <Header inverted as='h3' textAlign='center'>{playlist.name}</Header>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { playlist: state.playlists.find( p => p.id === props.match.params.id) }
}

export default connect(mapStateToProps)(Playlist);
