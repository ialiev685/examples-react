import axios from 'axios';

export const FetchWithQuery = searchQuery => {
  return axios
    .get(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    .then(response => response.data.hits);
};
