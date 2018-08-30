import React from 'react';
import {
  Button,
//  Input,
  Dropdown,
  Header,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../actions/playlists';

class PlaylistForm extends React.Component {
  state = { adding: false, playlists: [], selected: {} }

  componentDidMount() {
    this.props.dispatch(fetchPlaylists());
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  toggle =  () => {
    this.setState({ adding: !this.state.adding });
  }

  playlistOptions = () => {
    return this.props.playlists.map( playlist => {
      const { name: text } = playlist;
      return { text }
    });
  }

  selectPlaylist = (e, {value}) => {
    e.persist();
    console.log(e.target.textContent);
  }

  render() {
    const { adding } = this.state;
    if(adding)
      return(
        <div>
          <Header inverted>Playlist</Header>
          <Dropdown
            placeholder='Select a Playlist'
            fluid
            selection
            options={this.playlistOptions()}
            onChange={this.selectPlaylist}
          />
          <Button onClick={this.toggle}>
            Cancel
          </Button>
        </div>
      );
    else
      return(
        <div>
          <Button inverted onClick={() => this.toggle()}>
            Add A Mix
          </Button>
        </div>
      );
  }
}

const mapStateToProps = (state, props) => {
  return {
    playlists: state.playlists,
  }
}

export default connect(mapStateToProps)(PlaylistForm);

