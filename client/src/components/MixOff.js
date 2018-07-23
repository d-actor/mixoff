import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Segment,
  Container,
  Grid,
  Button,
} from 'semantic-ui-react';
import axios from 'axios';
import { setHeaders } from '../actions/headers';

class MixOff extends React.Component {
  state = { mixoff: {}, members: [] }

  componentDidMount() {
    const { match, dispatch } = this.props;
    axios.get(`/api/mixoffs/${match.params.id}`)
      .then( res => {
        dispatch(setHeaders(res.headers));
        this.setState({ mixoff: res.data });
      })
      .catch( err => {
        dispatch(setHeaders(err.headers));
        console.log(err);
      })

    axios.get('/api/mixoff/members', { mixoff_id: match.params.id })
      .then( res => {
        dispatch(setHeaders(res.headers));
        this.setState({ members: res.data })
      })
      .catch( err => {
        dispatch(setHeaders(err.headers));
        console.log(err);
      })
  }

  joinMixoff = (id) => {
    const { dispatch } = this.props;
    axios.post('/api/follows/mixoff', { mixoff_id: id })
      .then( res => {
        dispatch(setHeaders(res.headers));
        // TODO add current_user to members state
      })
      .catch( err => {
        dispatch(setHeaders(err.headers));
        console.log(err);
      })
  }

  render() {
    const { mixoff, members } = this.state;
    return(
      <Segment inverted>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={4}>
              <br />
              <Header as='h1' inverted textAlign='left'>{mixoff.title}</Header>
              <p>
                { mixoff.description }
              </p>
              <p>
                {
                  mixoff.recurring ?
                    "Recurring"
                  :
                    "Non Recurring"
                }
              </p>
              <p>
                Track Limit: { mixoff.track_limit }
              </p>
              <br />
              <Button secondary onClick={() => this.joinMixoff()}>Join</Button>
            </Grid.Column>
            <Grid.Column width={12}>
              {
                members.map( member => {
                  return(
                    <div>{member.name}</div>
                  )
                })
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default connect()(MixOff);

