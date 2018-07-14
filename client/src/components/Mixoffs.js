import React from 'react';
import {
  Header,
  Segment,
  Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMixoffs } from '../actions/mixoffs';

class Mixoffs extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchMixoffs());
  }

  showMixoffs = () => {
    const { mixoffs } = this.props;
    return mixoffs.map( mixoff => {
      return (
        <Segment basic>
          <Header as='h1' inverted>{ mixoff.title }</Header>
          <Link to={`/mixoff/${mixoff.id}`}>
            View Mixoff
          </Link>
        </Segment>
      )
    })
  }

  render() {
    return (
      <Segment inverted>
        <Container>
          { this.showMixoffs() }
        </Container>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mixoffs: state.mixoffs,
  }
}

export default connect(mapStateToProps)(Mixoffs);

