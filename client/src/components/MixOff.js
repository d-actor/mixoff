import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Segment,
  Container,
  Grid,
} from 'semantic-ui-react';
import axios from 'axios';
import { setHeaders } from '../actions/headers';

class MixOff extends React.Component {
  state = { mixoff: {} }

  componentDidMount() {
    const { match, dispatch } = this.props
    axios.get(`/api/mixoffs/${match.params.id}`)
      .then( res => {
        dispatch(setHeaders(res.headers));
        this.setState({ mixoff: res.data });
      })
      .catch( err => {
        dispatch(setHeaders(err.headers));
        console.log(err);
      })
  }

  render() {
    const { mixoff } = this.state;
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
            </Grid.Column>
            <Grid.Column width={12}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default connect()(MixOff);

