const initialState = {
  counter: 0,
  status: 'offline',
};

const detailedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER':
      return { ...state, counter: state.counter + action.payload };
    case 'STATUS':
      return { ...state, status: action.payload };
    case 'DETAILED_ENTRY':
      return { ...state, entry: action.payload };
    case 'REMOVE_DETAILED_ENTRY':
      return { ...state, entry: undefined };
    default:
      return state;
  }
};

export default detailedReducer;
