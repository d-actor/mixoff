import React from 'react';
import { connect } from 'react-redux';
import {
  Segment,
  Container,
  Header,
} from 'semantic-ui-react';

class Profile extends React.Component {
  state = { user: '' }

  componentDidMount() {
    // TODO bring in current user and set in state
  }

  render() {
    return(
      <Container>
        <Header as='h1' textAlign='center'>Profile</Header>
      </Container>
    )
  }
}

export default Profile;

