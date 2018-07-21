import React from 'react';
// import { connect } from 'react-redux';
import {
  Header,
  Segment,
  Container,
} from 'semantic-ui-react';
import axios from 'axios';
import setHeaders from '../actions/headers';

class MixOff extends React.Component {
  state = { mixoff: {} }

  componentDidMount() {
    const { match, dispatch } = this.props
    axios.get(`/api/mixoffs/${match.params.id}`)
      .then( res => {
        dispatch(setHeaders(res.headers));
        this.setState({ mixoff: res.data });
        debugger
      })
      .catch( err => {
        dispatch(setHeaders(err.headers));
        console.log(err);
        debugger
      })
  }

  render() {
    const { mixoff } = this.state;
    return(
      <Segment inverted>
        <Container>
          <br />
          <Header as='h1' inverted textAlign='center'>{mixoff.title}</Header>
        </Container>
      </Segment>
    )
  }
}

export default MixOff;

