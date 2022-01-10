import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (search) => `${CONFIG.BASE_URL}search?q=${search}`,
};

export default API_ENDPOINT;
