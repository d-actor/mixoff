import axios from 'axios';
import { setHeaders } from './headers';

const setPlaylists = (playlists) => {
  return { type: 'SET_PLAYLISTS', playlists: playlists }
}

const setTracks = (tracks) => {
  return { type: 'SET_TRACKS', tracks: tracks }
}

export const fetchPlaylists = () => {
  return dispatch => {
    axios.get('/api/spotify/playlists')
      .then(res  => {
        dispatch(setHeaders(res.headers))
        dispatch(setPlaylists(res.data))
      })
      .catch( err => {
        console.log(err)
        dispatch(setHeaders(err.headers))
      });
  }
}

export const fetchTracks = (id) => {
  return dispatch => {
    axios.get(`/api/spotify/tracks/${id}`)
      .then( res => {
        dispatch(setTracks(res.data))
        dispatch(setHeaders(res.headers))
      })
      .catch( err => {
        console.log(err)
        dispatch(setHeaders(err.headers))
      });
  }
}

export const addPlaylist = (name, playlistId, url, history, id) => {
  return dispatch => {
    axios.post(`/api/playlist/${id}/create`, { name, id: playlistId, url, mixoff_id: id })
      .then( res => {
        dispatch(setHeaders(res.headers))
      })
      .catch( err => {
        console.log(err)
        dispatch(setHeaders(err.headers));
      });
  }
}

