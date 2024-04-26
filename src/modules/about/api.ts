import axios from 'axios';
import { config } from 'config';

const http = axios.create({ baseURL: config.baseUrl });

export const GetWorkers = () =>
  http.get('/about/workers', {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
