import axios from 'axios';

const url = process.env.REACT_APP_BASE_URL;

const Api = axios.create({
  baseURL: url,
});

export default Api;