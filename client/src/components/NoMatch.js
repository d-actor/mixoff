import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends React.Component {
  render() {
    return (
      <Header inverted as='h1' textAlign='center'>
        Page Not Found
        <hr />
        <Link to='/'> Home</Link>
      </Header>
    );
  }
}

export default NoMatch;

