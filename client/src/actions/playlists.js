import axios from 'axios';
import { setFlash } from './flash';

const setPlaylists = (playlists) => {
  return { type: 'SET_PLAYLISTS', playlists: playlists }
}

export const fetchPlaylists = () => {
  return dispatch => {
    axios.get('/api/spotify/playlists')
      .then(res  => {
        dispatch(setPlaylists(res.data))
      })
      .catch( err => {
        console.log(err)
      });
  }
}
