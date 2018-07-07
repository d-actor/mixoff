import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import playlists from './playlists';

const rootReducer = combineReducers({
  user,
  playlists,
  flash
});

export default rootReducer;

