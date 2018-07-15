const mixoffs = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MIXOFF':
      return [action.mixoff, ...state]
    case 'MIXOFFS':
      debugger
      return action.mixoffs
    default:
      return state;
  }
}

export default mixoffs;

