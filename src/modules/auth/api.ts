import axios from 'axios';
import { config } from 'config';

const http = axios.create({ baseURL: config.baseUrl });
export const Register = (data: any) => http.post('/account/register/', data);

export const Login = (data: any) => {
  return http.post('/account/login/', data);
};

export const Email = (data: any) => {
  return http.post('/account/send_gmail_code/', data);
};

export const Forget = (data: any) => {
  return http.put('/account/forget_change_password/', data);
};
