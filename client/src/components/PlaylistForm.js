import React from 'react';
import {
  Button,
  //Header,
  Input,
} from 'semantic-ui-react';
// import axios from 'axios';

class PlaylistForm extends React.Component {
  state = { adding: false }

  handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
  }

  toggle =  () => {
    this.setState({ adding: !this.state.adding });
  }

  render() {
    const { adding } = this.state;
    if(adding)
      return(
        <div>
          <Input type='text' defaultValue='Test' onChange={this.handleChange} />
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

export default PlaylistForm;

