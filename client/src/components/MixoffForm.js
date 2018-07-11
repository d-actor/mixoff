import React from 'react';
import {
  Container,
  Header,
  Form,
  Button,
  Segment,
  Label,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

class MixoffForm extends React.Component {

  handleSubmit = () => {
    //TODO
  }

  render() {
    return(
      <Segment basic inverted>
        <Header textAlign='center' inverted as='h1'>New Mixoff</Header>
        <Container textAlign="left">
          <Form onSubmit={this.handleSubmit}>
          </Form>
        </Container>
      </Segment>
    )
  }
}

export default MixoffForm;

