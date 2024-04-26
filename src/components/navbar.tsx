import { Badge } from 'antd';
import { Api } from 'modules/basket';
import { IEntity } from 'modules/home/types';
import React, { useEffect, useState } from 'react';
import { SlBasket } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { Api as WishApi } from 'modules/wishlist';
import { AuthContext } from 'modules/auth/context';

import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  const [basketCount, setBasketCount] = useState<number>();
  const [likeCount, setLikeCount] = useState<number>();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { user } = React.useContext(AuthContext);
  const isAuthenticated = !user;
  console.log(!!user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: { data: IEntity.Product[] } = await Api.GetProductBasket();
        const list = await WishApi.GetWishlistList();
        setLikeCount(list.data.length);

        setBasketCount(data.length);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [basketCount, likeCount]);

  const logoutuser = () => {
    localStorage.clear();
    navigate('/home-page/home');
  };

  return (
    <div className="fixed z-20 flex w-screen bg-white flex-col  font-[poppins]">
      <div className="mx-auto flex h-[48px] w-full items-center justify-center bg-black">
        <div className="ml-56 flex items-center justify-center gap-[231px]">
          <h2 className='font-["Poppins"] text-sm font-normal text-neutral-50'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
            <span className='font-["Poppins] text-sm font-semibold text-neutral-50 underline '>ShopNow</span>
          </h2>
          <h2 className='flex items-center gap-[5px] font-["Poppins"] text-sm font-normal leading-tight text-neutral-50'></h2>
        </div>
      </div>
      <header className="flex cursor-pointer items-center justify-between bg-white px-[135px] pb-[16px] pt-[40px]">
        <div onClick={() => navigate('/home-page')} className="text-2xl font-bold ">
          Exclusive
        </div>

        <div className="flex items-center gap-10 text-[18px]">
          <div onClick={() => navigate('/home-page')} className='cursor-pointer  font-["Poppins"]  '>
            Home
          </div>
          <div onClick={() => navigate('/home-page/contact')} className='cursor-pointer  font-["Poppins"]  '>
            Contact
          </div>
          <div onClick={() => navigate('/home-page/about')} className='cursor-pointer  font-["Poppins"]  '>
            About
          </div>

          {token ? (
            <div onClick={logoutuser}>Log out</div>
          ) : (
            <div onClick={() => navigate('/auth/login')} className='cursor-pointer  font-["Poppins"]  '>
              Sign Up
            </div>
          )}
        </div>


        
        <div className="flex items-center gap-5">
          <div className="flex h-9 w-60 items-center justify-center gap-9 rounded bg-neutral-100 py-1.5 pl-5 pr-3">
            <input
              type="text"
              className=" border-none bg-transparent font-['Poppins'] text-xs font-normal leading-none text-black opacity-50 focus:border-none"
              placeholder="What are you looking for?"
            />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Component 2">
                <path
                  id="Vector"
                  d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
          <div className="flex items-center justify-center gap-4 pl-6">
            <Badge count={likeCount}>
              <svg onClick={() => navigate('/home-page/wishlist')} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Wishlist">
                  <path
                    id="Vector"
                    d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </Badge>
            <Badge count={basketCount}>
              <SlBasket onClick={() => navigate('/home-page/cart')} size={30} />
            </Badge>
            {token && <AiOutlineUser onClick={() => navigate('/home-page/account')} size={30} />}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
