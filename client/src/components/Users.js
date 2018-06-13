import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Container,
  Table,
  Grid,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Users extends React.Component {
  state = { users: [] }

  componentDidMount() {
    // TODO bring in users
  }

  searchUsers = () => {
    // TODO search users
  }

  friendUser = (id) => {
    axios.post('/api/follows/create', { user_id: id })
      .then(res => {
        //TODO flash messages
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center' style={{color: 'white'}}>Users</Header>
      </Segment>
    )
  }
}

export default connect()(Users);
