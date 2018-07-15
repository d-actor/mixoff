import React from 'react';
import {
  Header,
  Segment,
  Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlaylists } from '../actions/playlists';

class Playlists extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPlaylists());
  }

  showPlaylists = () => {
    const { playlists } = this.props;
    return playlists.map( playlist => {
      return(
        <Segment basic>
          <Header as='h1'inverted>{ playlist.name }</Header>
          <Link to={`/playlist/${playlist.id}`}>
            View Playlist
          </Link>
        </Segment>
      )
    })
  }

  render() {
    return (
      <Segment inverted>
        <Container>
          { this.showPlaylists() }
        </Container>
      </Segment>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    playlists: state.playlists,
  }
}

export default connect(mapStateToProps)(Playlists);

