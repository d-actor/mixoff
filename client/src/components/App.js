import React from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Footer from './Footer';
import Playlists from './Playlists';
import Playlist from './Playlist';
import Users from './Users';
import MixOff from './MixOff';
import MixoffForm from './MixoffForm';
import Mixoffs from './Mixoffs';
import Friends from './Friends';
import Profile from './Profile';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <Segment basic style={styles.background}>
        <div style={styles.wrapper}>
          <NavBar />
          <Flash />
          <FetchUser>
            <Switch>
              <Route exact path='/' component={Home} />
              <AuthRoute exact path='/login' component={Login} />
              <AuthRoute exact path='/register' component={Register} />
              <ProtectedRoute exact path='/playlists' component={Playlists} />
              <ProtectedRoute exact path='/playlist/:id' component={Playlist} />
              <ProtectedRoute exact path='/users' component={Users} />
              <ProtectedRoute exact path='/mixoffs' component={Mixoffs} />
              <ProtectedRoute exact path='/mixoff/:id' component={MixOff} />
              <ProtectedRoute exact path='/new_mixoff' component={MixoffForm} />
              <ProtectedRoute exact path='/friends' component={Friends} />
              <ProtectedRoute eact path='/profile' component={Profile} />
              <Route component={NoMatch} />
            </Switch>
          </FetchUser>
        </div>
        <Footer />
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
  wrapper: {
    minHeight: '100vh',
    marginBottom: '-150px',
    paddingBottom: '150px',
  }
}

export default App;

