import axios from 'axios';

export const REACT_URL = axios.create({
  baseURL: 'http://192.168.0.112:2000',
});
