import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

const setMixoffs = (mixoffs) => {
  return { type: 'SET_MIXOFFS', mixoffs: mixoffs }
}

const sendMixoff = (mixoff) => {
  return { type: 'ADD_MIXOFF', mixoff: mixoff }
}

export const fetchMixoffs = () => {
  return dispatch => {
    axios.get('/api/mixoffs')
      .then( res => {
        dispatch(setHeaders(res.headers));
        dispatch(setMixoffs(res.data));
      })
      .catch( err => {
        dispatch(setHeaders(err.headers))
        dispatch(setFlash('Failed to load mixoffs', 'red'));
        console.log(err)
      })
  }
}

export const addMixoff = (name, theme, recurring, trackLimit) => {
  return dispatch => {
    axios.post('/api/mixoffs', { title: name, description: theme, recurring, track_limit: trackLimit })
      .then( res => {
        dispatch(setHeaders(res.headers));
        dispatch(sendMixoff(res.data));
        //TODO push to Mixoff page for created mixoff
      })
      .catch( err => {
        dispatch(setHeaders(err.headers));
        dispatch(setFlash('Failed to add mixoff', 'red'));
        console.log(err)
      });
  }
}

