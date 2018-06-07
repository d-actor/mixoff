import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Container,
  Image,
  Table,
  Grid,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Playlist extends React.Component {
  state = { tracks: [] }

  componentDidMount() {
    const { playlist } = this.props;
    axios.get(`/api/spotify/tracks/${playlist.id}`)
      .then( res => {
        this.setState({ tracks: res.data });
      })
      .catch( err => {
        console.log(err);
        console.log(playlist.id)
      });
  }

  displayTracks = () => {
    const { tracks } = this.state;
    return tracks.map(track => {
      return(
        <Segment basic>
          <li>{track.artists[0].name} - {track.name}</li>
        </Segment>
      )
    })
  }

  render() {
    const { playlist } = this.props;

    return(
      <Container>
        <Link to='/profile'>Back to Profile</Link>
        <Header inverted as='h3' textAlign='center'>{playlist.name}</Header>
        <Grid columns={2}>
          <Grid.Column width={4}>
            <Image size='medium' src={playlist.images[0].url} />
          </Grid.Column>
          <Grid.Column width={12}>
            <Table definition inverted>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Tracklist</Table.Cell>
                  <Table.Cell>
                    <ol>
                      {this.displayTracks()}
                    </ol>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { playlist: state.playlists.find( p => p.id === props.match.params.id) }
}

export default connect(mapStateToProps)(Playlist);
