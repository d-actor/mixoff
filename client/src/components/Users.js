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
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';

class Users extends React.Component {
  state = { users: [] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/users')
      .then( res => {
        this.setState({ users: res.data })
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        console.log(err)
        dispatch(setHeaders(err.headers));
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
        // TODO add flash messages
      )
    })
  }

  searchUsers = () => {
    // TODO
  }

  friendUser = (id) => {
    const { dispatch } = this.props;
    axios.post('/api/follows/create', { user_id: id })
      .then(res => {
        this.setState({
          users: users.filter( u => u.id !== id )
        });
        dispatch(setFlash("+", "green")
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        console.log(err)
        dispatch(setFlash("Error", "red")
        dispatch(setHeaders(err.headers));
      })
  }

  render() {
    return(
      <Container text>
        <Header as='h1' textAlign='center' style={{color: 'white'}}>Users</Header>
        {this.displayUsers()}
      </Container>
    )
  }
}

export default connect()(Users);

