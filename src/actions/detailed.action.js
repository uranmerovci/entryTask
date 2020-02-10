import entriesService from '../services/entriesService';

export const modifyCounter = (count) => ({
  type: 'COUNTER',
  payload: count,
});

export const modifyStatus = (status) => ({
  type: 'STATUS',
  payload: status,
});

export const detailedEntry = (id) => async (dispatch) => {
  const entry = await entriesService.getEntry(id);
  dispatch({
    type: 'DETAILED_ENTRY',
    payload: entry,
  });
};

export const removeDetailedEntry = () => ({
  type: 'REMOVE_DETAILED_ENTRY',
});
