export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

export const setStartDate = (params) => ({
  type: 'SET_START_DATE',
  payload: params,
});

export const setEndDate = (params) => ({
  type: 'SET_END_DATE',
  payload: params,
});
