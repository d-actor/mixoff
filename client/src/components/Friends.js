import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Container,
  Card,
  Segment,
  Button,
} from 'semantic-ui-react';
import axios from 'axios';
import { setHeaders } from '../actions/headers';

class Friends extends React.Component {
  state = { friends: [] }

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/friends')
      .then( res => {
        this.setState({ friends: res.data });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        console.log(err)
        dispatch(setHeaders(err.headers));
      })
  }

  unfriend = (id) => {
    debugger
    const { dispatch } = this.props;
    const { friends } = this.state;
    axios.delete('/api/follows/destroy', { user_id: id })
      .then( res => {
        this.setState({
          friends: friends.filter(f => f.id !== id)
        });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        console.log(err);
        dispatch(setHeaders(err.headers));
      })
  }

  displayFriends = () => {
    return this.state.friends.map( friend => {
      return(
        <Card>
          <Card.Content>
            <Card.Header>{ friend.name }</Card.Header>
            <Card.Description>{ friend.spotify_name }</Card.Description>
          </Card.Content>
          <Card.Content textAlign="center" extra>
            <Button secondary onClick={() => this.unfriend(friend.id)}>Unfriend</Button>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    return(
      <Container text>
        <Card.Group stackable itemsPerRow={3}>
          { this.displayFriends() }
        </Card.Group>
      </Container>
    )
  }
}

export default connect()(Friends);

