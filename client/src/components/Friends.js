import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Container,
  Card,
  Segment,
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

  render() {
    return(
      <Container>
        <Card.Group>
        </Card.Group>
      </Container>
    )
  }
}

export default connect()(Friends);

