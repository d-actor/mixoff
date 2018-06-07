import React, { Component } from 'react';
import {
  Header,
  Segment,
  Form,
  Label,
  Button,
  Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <Segment basic>
        <Container text>
          <Header as='h1' inverted textAlign='center'>Login</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Label color='black' htmlFor='email'>Email</Label>
              <input
                required
                id='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Label color='black' htmlFor='password'>Password</Label>
              <input
                required
                id='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Segment textAlign='center' basic>
              <Button primary type='submit'>Submit</Button>
            </Segment>
          </Form>
        </Container>
      </Segment>
    );
  }
}

export default connect()(Login);
