import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Container,
  Table,
  Grid,
  Segment,
  Button,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setFlash } from '../actions/flash'

class Users extends React.Component {
  state = { users: [] }

  componentDidMount() {
    axios.get('/api/users')
      .then( res => {
        this.setState({ users: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  displayUsers = () => {
    return this.state.users.map( user => {
      return(
        <Segment basic>
          <Header as='h5' style={{color: 'white'}}>{user.name}</Header>
          <Button onClick={() => this.friendUser(user.id)}>
            <Icon name='add user' />
          </Button>
        </Segment>
      )
    })
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
      <Container>
        <Header as='h1' textAlign='center' style={{color: 'white'}}>Users</Header>
        {this.displayUsers()}
      </Container>
    )
  }
}

export default connect()(Users);
