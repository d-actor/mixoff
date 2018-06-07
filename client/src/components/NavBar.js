import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Link to='/playlists'>
            <Menu.Item style={{color: 'white'}} name='Playlists' />
          </Link>
          <Menu.Item
            name='Logout'
            style={{color: 'white'}}
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right' style={{color: 'white'}}>
        <Link to='/register'>
          <Menu.Item style={{color: 'white'}} name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' style={{color: 'white'}} />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home'style={{color: 'white'}} />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
