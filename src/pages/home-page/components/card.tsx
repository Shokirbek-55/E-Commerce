import React, { FC, useState, useEffect } from 'react';
import { Rate, message } from 'antd';
import { config } from 'config';
import { ProductBasketAdd } from 'modules/basket/api';
import { IEntity } from 'modules/home/types';
import { Api } from 'modules/wishlist';
import { Wishlist } from 'modules/wishlist/type';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../modules/auth/context';
import { LuEye } from 'react-icons/lu';

const Card: FC<IEntity.Product> = ({ ...product }) => {
  const [isHover, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: { data: Wishlist[] } = await Api.GetWishlistList();
        const withTrue = data.some(prod => prod.wishlist_pro.id === product.id);
        setIsLiked(withTrue);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [product.id]);

  const addWish = async (productId: number) => {
    try {
      const data = await Api.AddWish(productId);
      setIsLiked(true);
      console.log('addwish = ', data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteWish = async (productId: number) => {
    try {
      const data = await Api.DeleteWish(productId);
      setIsLiked(false);
      console.log('deletedata = ', data);
    } catch (err) {
      console.log(err);
    }
  };

  const calculatePercentage = (): number => {
    return ((product.discount?.dis_percentage ?? 0) * product.price) / 100;
  };

  const addToCart = async (productId: number) => {
    if (localStorage.getItem('redirectedToLogin')) {
      console.log('hello world');
      try {
        await ProductBasketAdd(productId);
        message.success(`${product.name} Product added to basket`);
      } catch (error) {
        // console.error('Error adding product to basket:', error);
        // message.error('Failed to add product to basket');
      }
    } else if (!user && !localStorage.getItem('redirectedToLogin')) {
      navigate('/auth/login');
      localStorage.setItem('redirectedToLogin', 'true');
      console.log('Redirecting to login page');
    }
  };

  // const addToCart = async (productId: number) => {
  //   if (user) {
  //     try {
  //       await ProductBasketAdd(productId);
  //       message.success(`${product.name} Product added to basket`);
  //     } catch (error) {
  //       console.error('Error adding product to basket:', error);
  //       message.error('Failed to add product to basket');
  //     }
  //   } else {
  //     navigate('/auth/login');
  //     console.log('Redirecting to login page');
  //   }
  // };

  return (
    <div
      onClick={() => navigate(`/home-page/productdetailspage/${product.name}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div className="py-5 sm:w-[300px]">
        <div className="m-5 rounded-lg shadow">
          <div className="relative grid place-items-center bg-white p-2">
            {product.discount && (
              <button className="absolute left-2 top-2 rounded-lg border-none bg-red-500 p-3 text-white">-{product.discount.dis_percentage}%</button>
            )}
            {product.images && product.images.length > 0 && (
              <img className="h-48 w-48 object-contain" src={config.base + product.images[0].images} alt={product.name} />
            )}
            <div className="absolute right-2 top-2 flex flex-col gap-3">
              <div
                onClick={e => {
                  e.stopPropagation();
                  isLiked ? deleteWish(product.id) : addWish(product.id);
                }}
                className="grid h-[30px] w-[30px] place-items-center rounded-full bg-white shadow-md"
              >
                <svg
                  className={isLiked ? 'fill-red-500 ' : 'fill-transparent'}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="grid h-[30px] w-[30px] place-items-center rounded-full bg-white shadow-md">
                <LuEye />
              </div>
            </div>
            {isHover && (
              <div
                onClick={e => {
                  e.stopPropagation();
                  addToCart(product.id);
                }}
                className="absolute bottom-0 w-full bg-black py-2 text-center text-white"
              >
                Add to Cart
              </div>
            )}
          </div>
          <div className="bg-gray-100 p-2">
            <h4 className="m-1 font-[poppins] text-[18px] font-[550] ">{product.name}</h4>
            <div className="flex items-center justify-between">
              {product.discount ? (
                <div className="flex">
                  <h4 className="m-1 text-red-500">${calculatePercentage()}</h4>
                  <div className="m-1 text-gray-500 line-through">${product.price}</div>
                </div>
              ) : (
                <h4 className="m-1 text-red-500">${product.price}</h4>
              )}
            </div>
            <div className="flex items-center gap-5">
              <Rate disabled defaultValue={product.stars?.stars} />
              <div className="font-semibold text-gray-500"> ({product.quantity})</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
