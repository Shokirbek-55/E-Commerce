import axios from 'axios';
import { config } from 'config';

const http = axios.create({ baseURL: config.baseUrl });

export const UpdatePut = (data: any)  =>
  http.put('/account/updata_profile/',data ,{
   headers:{
    Authorization: `Bearer ${config.accessToken}`
   }

  })


export const changePut = (data: any) =>
  http.put('/account/change_password/', data, {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
