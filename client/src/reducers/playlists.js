const playlists = (state = [], action) => {
  switch(action.type) {
    case 'SET_PLAYLISTS':
      return action.playlists
    case 'SET_TRACKS':
      return action.tracks
    case 'ADD_PLAYLIST':
      return action.playlist
    default:
      return state;
  }
}

export default playlists;

