import axios from 'axios';
import { config } from 'config';
import { IEntity } from './type';

const http = axios.create({ baseURL: config.baseUrl });

export const SentMessage = (message: IEntity.Contact) => {
  return http.post('/contact/', message, {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
};
