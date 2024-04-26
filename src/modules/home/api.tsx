import axios from 'axios';
import { config } from 'config';

const http = axios.create({ baseURL: config.baseUrl });

export const GetBannerData = () => http.get('/banner');

export const GetFleshSales = () => {
  return http.get('/product/flash-sales/', {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
};
export const GetCategory = () => {
  return http.get('/category/', {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
};
export const GetExplore = () => {
  return http.get('/product/our/', {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
};
export const GetBestSelling = () => {
  return http.get('/product/best-selling/', {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
};
export const GetDetailProd = (name: string) => {
  return http.get(`/product/detail/?name=${name}`, {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
};
export const GetCategoryProduct = (slug: string) => {
  return http.get(`/product/category/?category_slug=${slug}`, {
    headers: {
      Authorization: `Bearer ${config.accessToken}`
    }
  });
};
