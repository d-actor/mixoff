import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import playlists from './playlists';
import mixoffs from './mixoffs';

const rootReducer = combineReducers({
  playlists,
  mixoffs,
  user,
  flash,
});

export default rootReducer;

