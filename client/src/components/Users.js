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

  friendUser = () => {
    //TODO friend user
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
