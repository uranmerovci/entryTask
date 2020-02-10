import entriesService from '../services/entriesService';

export const fetchEntries = () => async (dispatch) => {
  const fetchedEntries = await entriesService.getEntries();
  dispatch({
    type: 'STORE_ALL_ENTRIES',
    payload: fetchedEntries,
  });
};

export const saveNewEntry = (params) => async (dispatch) => {
  const response = await entriesService.saveNewEntry(params);
  dispatch({
    type: 'SAVE_NEW_ENTRY',
    payload: response,
  });
};
