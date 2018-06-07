import axios from 'axios';

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
        dispatch(setPlaylists(res.data))
      })
      .catch( err => {
        console.log(err)
      });
  }
}

export const fetchTracks = (id) => {
  return dispatch => {
    axios.get(`/api/spotify/tracks/${id}`)
      .then( res => {
        dispatch(setTracks(res.data))
      })
      .catch( err => {
        console.log(err)
      });
  }
}
