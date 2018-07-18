const mixoffs = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MIXOFF':
      return [action.mixoff, ...state]
    case 'SET_MIXOFFS':
      return action.mixoffs
    default:
      return state;
  }
}

export default mixoffs;

