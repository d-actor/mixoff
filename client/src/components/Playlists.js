import React, { Component } from 'react';
import {
  Header,
  Segment,
  Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../actions/playlists';
import { Link } from 'react-router-dom';

class Playlists extends Component {
//  state = { playlists: [] }

  componentDidMount() {
    this.props.dispatch(fetchPlaylists());
//  const {dispatch} = this.props;
//    axios.get('/api/spotify/playlists')
//      .then( res => {
//        dispatch(setHeaders(res.headers));
//        this.setState({ playlists: res.data });
//      })
//      .catch( res => {
//        console.log(res);
//      })
  }

  showPlaylists = () => {
    const { playlists } = this.props;
    return playlists.map( playlist => {
      return(
        <Segment basic>
          <Header as='h1'inverted>{playlist.name}</Header>
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
          {this.showPlaylists()}
        </Container>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
  }
}

export default connect(mapStateToProps)(Playlists);
