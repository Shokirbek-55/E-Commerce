import axios from 'axios';
import { config } from 'config';

const http = axios.create({ baseURL: config.baseUrl });

export const GetWishlistList = () =>
  http.get('/wishlist', {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });

export const AddWish = (productId: number) => {
  return http.post(
    '/wishlist/create/',
    { wishlist_pro: productId },
    {
      headers: {
        Authorization: `Bearer ${config.accessToken}`
      }
    }
  );
};
export const DeleteWish = (productId: number) => {
  return http.delete(`/wishlist/delete/${productId}`, {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
};
