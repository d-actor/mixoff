import React, { Component } from 'react';
import {
  Container,
  Header,
  Form,
  Button,
  Segment,
  Label,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { setFlash } from '../actions/flash';

class Register extends Component {
  state = { email: '', name: '', spotifyName: '', password: '', passwordConfirmation: '' };

  handleSubmit = event => {
    event.preventDefault();
    const { email, name, spotifyName, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser(email, name, spotifyName, password, passwordConfirmation, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = event => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { email, name, spotifyName, password, passwordConfirmation } = this.state;

    return (
      <Segment inverted basic>
        <Header as='h1' textAlign='center'>Register</Header>
        <Container text>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Label color="black" htmlFor='email'>Email</Label>
              <input
                id='email'
                placeholder='Email'
                required
                value={email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Label color="black" htmlFor='name'>Name</Label>
              <input
                id='name'
                placeholder='Name'
                required
                value={name}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Label color="black" htmlFor='spotify_name'>Spotify Username</Label>
              <input
                id='spotifyName'
                placeholder='Spotify Username'
                required
                value={spotifyName}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Label color="black" htmlFor='password'>Password</Label>
              <input
                id='password'
                placeholder='Password'
                type='password'
                required
                value={password}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Label color='black' htmlFor='passwordConfirmation'>Password Confirmation</Label>
              <input
                id='passwordConfirmation'
                placeholder='Password Confirmation'
                type='password'
                required
                value={passwordConfirmation}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Segment basic textAlign='center'>
              <Button type='submit'>Submit</Button>
            </Segment>
          </Form>
        </Container>
      </Segment>
    );
  }
}

export default connect()(Register);
