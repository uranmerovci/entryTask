const initialState = [];

const entriesReducer = (state = initialState, action) => {
  // console.log(action.type)
  switch (action.type) {
    case 'STORE_ALL_ENTRIES':
      return state.concat(action.payload);
    case 'SAVE_NEW_ENTRY':
      return state.concat(action.payload).sort((a, b) => ((a.startedAt > b.startedAt) ? 1 : -1));
    default:
      return state;
  }
};

export default entriesReducer;
