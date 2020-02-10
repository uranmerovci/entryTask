const initialState = {
  startedAt: undefined,
  endedAt: undefined,
  sortBy: 'date',
};

const filteringReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startedAt: action.payload };
    case 'SET_END_DATE':
      return { ...state, endedAt: action.payload };
    default:
      return state;
  }
};

export default filteringReducer;
