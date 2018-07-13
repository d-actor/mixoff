import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const addMixoff = (mixoff, history) => {
  return (dispatch) => {
    axios.post('/api/mixoffs', { mixoff: { name, theme, recurring, track_limit: trackLimit } })
      .then( res => {
        dispatch(setHeaders(res.headers));
        dispatch({ type: 'ADD_MIXOFF', mixoff: res.data });
      })
      .catch( err => {
        dispatch(setHeaders(err.headers));
        dispatch(setFlash('Failed to add mixoff', 'red'));
        console.log(err)
      });
  }
}

