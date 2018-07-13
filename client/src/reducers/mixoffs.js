const mixoffs = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MIXOFF':
      return [action.mixoff, ...state]
    default:
      return state;
  }
}

export default mixoffs;

