import React, { Component } from 'react';
import {
  Header,
  Segment,
  Container,
} from 'semantic-ui-react';

class MixOff extends Component {

  render() {
    return(
      <Segment inverted>
        <Container>
          <br />
          <Header as='h1' inverted textAlign='center'>MixOff</Header>
        </Container>
      </Segment>
    )
  }
}

export default MixOff;

