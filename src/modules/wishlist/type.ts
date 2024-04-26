import { IEntity } from 'modules/home/types';

export interface Wishlist {
  id: number;
  wishlist_pro: IEntity.Product;
  wishlist_user: number; // userId
}
