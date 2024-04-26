import axios from 'axios';
import { config } from 'config';

const http = axios.create({ baseURL: config.baseUrl });

export const GetProductBasket = () => {
  return http.get('/product-baskets/', {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
};

export const ProductBasketAdd = (productId: number) => {
  return http.post(
    '/product-baskets/add/',
    { product: productId },
    {
      headers: {
        Authorization: `Bearer ${config.accessToken}`
      }
    }
  );
};
export const ProductBasketDelete = (productId: number) => {
  return http.delete(`/product-baskets/delete/${productId}`, {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
};
export const ProductBasketMinus = (basketID: number) => {
  return http.post(
    `/product-baskets/minus/`,
    { id: basketID },
    {
      headers: {
        Authorization: `Bearer ${config.accessToken}`
      }
    }
  );
};
export const ProductBasketPlus = (basketID: number) => {
  return http.post(
    `/product-baskets/plus/`,
    { id: basketID },
    {
      headers: {
        Authorization: `Bearer ${config.accessToken}`
      }
    }
  );
};