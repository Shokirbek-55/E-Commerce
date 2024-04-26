import React, { useEffect, useState } from 'react';
import { Account, Email, Login} from '../pages';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { Home, Wishlist, Cart } from '../pages';
import Protected from './protected';
import ProductDetailsPage from 'pages/ProductDetailspage/productDetailsPage';
import {  Register , Forget } from 'pages/auth';
import Main from 'layouts/main';
import Error from 'pages/error/error';
import About from 'pages/about/about';
import Contact from 'pages/contact/contact';
import Checkout from 'pages/cart/checkOut/checkOut';

import { AuthContext } from 'modules/auth/context';
import Category from 'pages/category/category';
import { IEntity } from 'modules/home/types';
import { Api } from 'modules/home';

const Routes: React.FC = () => {
  const [items, setItems] = useState<IEntity.Category[]>([]);

  const { user } = React.useContext(AuthContext);
  const isAuthenticated = !user;
  // console.log(!!user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: categories }: { data: IEntity.Category[] } = await Api.GetCategory();

        setItems(categories);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Switch>
      <Route path="home-page" element={<Protected Layout={Main} allow={isAuthenticated} to="/auth/login" />}>

        {items.map(category => (
          <Route key={category.category_name} path={category.category_name} element={<Category category={category.category_name} />} />
        ))}

        {/*  */}
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="error" element={<Error />} />
        <Route path="productdetailspage" element={<ProductDetailsPage />} />
        <Route path="account" element={<Account />} />
        <Route path="productdetailspage/:name" element={<ProductDetailsPage />} />
        <Route index path="*" element={<Navigate to="/home-page/home" />} />
      </Route>

      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="email" element={<Email />} />
        <Route path="forget" element={<Forget />} />

      </Route>
      <Route index path="*" element={<Navigate to={isAuthenticated ? '/home-page/home' : '/auth/login'} />} />
    </Switch>
  );
};
export default Routes;
