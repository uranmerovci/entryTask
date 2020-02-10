import axios from 'axios';

const baseUrl = 'http://localhost:3030/entries';

const config = {
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjMzNzYzNzc4LWU3NWEtNDFhNS04YjM1LTNiZjE1NWExOGFjMiIsImlhdCI6MTU4MTA4MzQ2OSwiZXhwIjoxNTgxMDg3MDY5fQ.L79WlKbdiMvS_n8GzhpZAB3OTgE13MWgXa_WkCCHKn8',
  },
};
// getting all entries from db
const getEntries = async () => {
  const response = await axios.get(baseUrl, config);
  // console.log(response)
  response.data.sort((a, b) => ((a.startedAt > b.startedAt) ? 1 : -1));
  return response.data;
};

// getting a single entry
const getEntry = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`, config);
  return response.data;
};

// saving a new entry
const saveNewEntry = async (params) => {
  const response = await axios.post(baseUrl, params, config);
  return response.data;
};

export default {
  getEntries,
  getEntry,
  saveNewEntry,
};
