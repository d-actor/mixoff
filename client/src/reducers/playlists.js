const playlists = (state = [], action) => {
  switch(action.type) {
    case 'SET_PLAYLISTS':
      return action.playlists
    default:
      return state;
  }
}

export default playlists;
