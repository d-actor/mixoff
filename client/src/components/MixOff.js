import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Segment,
  Container,
} from 'semantic-ui-react';

class MixOff extends React.Component {

  componentDidMount() {
    console.log(this.props.mixoff);
  }

  render() {
    const { mixoff } = this.props;
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

const mapStateToProps = (state, props) => {
  return { mixoff: state.mixoffs.find( m => m.id === props.match.params.id) }
}

export default connect(mapStateToProps)(MixOff);

