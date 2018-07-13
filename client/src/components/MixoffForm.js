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
import axios from 'axios';
import { addMixoff } from '../actions/mixoff';

class MixoffForm extends React.Component {
  state = { name: '', trackLimit: '', theme: '', recurring: true }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, trackLimit, theme, recurring } = this.state;
    const { dispatch } = this.props;
    let mixoff = { name, trackLimit, theme, recurring }
    dispatch(addMixoff(mixoff));
    this.setState({ name: '', trackLimit: '', theme: '', recurring: true })
  }

  handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { name, trackLimit, recurring, theme } = this.state;

    return(
      <Segment basic inverted>
        <Header textAlign='center' inverted as='h1'>New Mixoff</Header>
        <Container text textAlign="left">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Field>
                <Label color="black" htmlFor='name'>Mixoff Name</Label>
                <input
                  id="name"
                  placeholder="Mixoff Name"
                  required
                  value={name}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Label color="black" htmlFor="theme">Theme</Label>
                <input
                  id="theme"
                  placeholder="Theme"
                  value={trackLimit}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Label color="black" htmlFor="trackLimit">Track Limit</Label>
                <input
                  id="trackLimit"
                  placeholder="Track Limit"
                  value={theme}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Label color="black" htmlFor="recurring">Recurring</Label>
                <input
                  id="recurring"
                  type="checkbox"
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Button type="submit">Create</Button>
            </Form.Group>
          </Form>
        </Container>
      </Segment>
    )
  }
}

export default connect()(MixoffForm);

