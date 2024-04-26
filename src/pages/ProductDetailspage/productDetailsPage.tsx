import { FC, useContext, useEffect, useState } from 'react';

import BestSelling from 'pages/home-page/bestSelling';
import { IEntity } from 'modules/home/types';
import { Api } from 'modules/home';

import { Api as apiWish } from 'modules/wishlist';
import { Api as apiBasket } from 'modules/basket';

import { useNavigate } from 'react-router-dom';
import { Rate } from 'antd';

import { useParams } from 'react-router-dom';
import { config } from 'config';

import { AuthContext } from '../../modules/auth/context';

import { FaPlus, FaMinus } from 'react-icons/fa6';
import { IoIosHeartEmpty } from 'react-icons/io';
import { Wishlist } from 'modules/wishlist/type';

const ProductDetailsPage: FC = () => {
  const { user } = useContext(AuthContext);
  const [bestSelling, setbestSelling] = useState<IEntity.Product[]>([]);
  const [prodBasket, setprodBasket] = useState<IEntity.Product>();
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setquantity] = useState(0);

  const [prod, setprod] = useState<IEntity.Product>();
  const navigate = useNavigate();

  const { name } = useParams();

  const addWish = async (productId: number) => {
    try {
      const data = await apiWish.AddWish(productId);
      setIsLiked(true);

      console.log('addwish = ', data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteWish = async (productId: number) => {
    try {
      const data = await apiWish.DeleteWish(productId);

      setIsLiked(false);
      console.log('liked= ', isLiked);

      console.log('deletedata = ', data);
    } catch (err) {
      console.log(err);
    }
  };
  const plus = async (productId: number) => {
    try {
      if (!prodBasket) {
        if (localStorage.getItem('redirectedToLogin')) {
          console.log('hello world');
          try {
            await apiBasket.ProductBasketAdd(productId);
          } catch (error) {
            // console.error('Error adding product to basket:', error);
            // message.error('Failed to add product to basket');
          }
        } else if (!user && !localStorage.getItem('redirectedToLogin')) {
          navigate('/auth/login');
          localStorage.setItem('redirectedToLogin', 'true');
          console.log('Redirecting to login page');
        }
      } else {
        const data = await apiBasket.ProductBasketPlus(productId);
        console.log(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const minus = async (productId: number) => {
    try {
      await apiBasket.ProductBasketMinus(productId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bestSelling: { data: IEntity.Product[] } = await Api.GetBestSelling();
        const data = await Api.GetDetailProd(name!);
        console.log('prod= ', data.data.data[0]);
        setprod(data.data.data[0]);

        const mal: { data: Wishlist[] } = await apiWish.GetWishlistList();
        const withTrue = mal.data.filter(prod => prod.wishlist_pro.id === data.data.data[0].id);
        // console.log("prod.wishlist_pro.id:", mal.data.map(prod => prod.wishlist_pro.id));
        // console.log("data.data.data[0].id:", data.data.data[0].id);
        // console.log(withTrue);

        if (withTrue.length !== 0) {
          setIsLiked(true);
        }
        console.log(isLiked);
        // console.log(withTrue);

        setbestSelling(bestSelling.data);

        const basket = await apiBasket.GetProductBasket();
        console.log('basketdata', basket.data);
        const prodbasket: IEntity.Basket[] = basket.data.filter((prod: IEntity.Basket) => prod.product.id === data.data.data[0].id);

        console.log('prodbasket= ', prodbasket);
        console.log('data.data.data[0].id= ', data.data.data[0].id);

        if (prodbasket) setprodBasket(prodbasket[0].product);
        console.log('prodbasket', prodbasket);
        setquantity(prodbasket[0].quantity ? prodbasket[0].quantity : 0);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="box-border w-full p-[135px] pt-10">
      <div>
        <div className="flex gap-2 text-[24px]">
          <div onClick={() => navigate('/home-page')} className="font-Regular cursor-pointer font-[Poppins] text-[#cacad4] hover:text-black">
            Home
          </div>
          <div>/</div>
          <div className="font-Regular cursor-pointer font-[Poppins] text-[#cacad4] hover:text-black">Gaming</div>
          <div>/</div>
          <div className="font-Regular ml-2 cursor-pointer font-[Poppins] text-[#cacad4] text-current">Havic HV G-92 Gamepad</div>
        </div>
      </div>
      {prod ? (
        <form className="flex">
          <div className="flex gap-20 p-16 ps-0">
            <div className="flex flex-col gap-[18px]">
              {prod.images.slice(1, 4).map((image, index) => (
                <img key={index} className="h-[138px] w-[170px]" src={config.base + image.images} alt={prod.name} />
              ))}
            </div>
            <div>
              <img className="h-auto w-[350px]" src={config.base + prod.images[0].images} alt={prod.name} />
            </div>
          </div>
          <div className="ml-32 flex flex-col gap-[16px] pt-[85px]">
            <h1 className="font-[inter] text-[24px] font-[600]">{prod.name}</h1>
            <Rate disabled defaultValue={prod.stars?.stars} />
            <p className="font-[inter] text-[24px] font-[500]">${prod.price}</p>
            <p className="font-[poppins] text-[15px] font-[400]">{prod.description}</p>
            <div className="flex items-center gap-[14px]">
              <div className="flex flex-row  items-center justify-between gap-5">
                <button
                  className="h-14 w-14 rounded-s-lg border-[1.3px] border-[#696868] bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white"
                  onClick={e => {
                    e.preventDefault();
                    plus(prod.id);
                    setquantity(prev => (prev += 1));
                  }}
                >
                  <FaPlus className="" />
                </button>
                <p className="border-x-4 border-indigo-500 px-3   font-[poppins] text-xl ">{quantity}</p>
                <button
                  onClick={e => {
                    e.preventDefault();
                    minus(prod.id);
                    if (quantity > 0) setquantity(prev => (prev -= 1));
                  }}
                  className="h-14 w-14 rounded-e-lg border-[1.3px] border-[#696868] bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white"
                >
                  <FaMinus className="" />
                </button>
              </div>
              <button
                onClick={() => navigate('/home-page/cart')}
                className="h-14 w-48 cursor-pointer rounded-[4px] border-[1.4px] border-none border-[#696868] bg-red-500 font-[poppins] text-[16px] text-[white]"
              >
                Buy Now
              </button>
              <p
                onClick={e => {
                  e.stopPropagation();
                  isLiked ? deleteWish(prod.id) : addWish(prod.id);
                }}
                className={`flex h-[44px] w-[44px] items-center justify-center rounded-[4px] border-[1.3px] border-[#696868] font-[poppins] font-[500] ${isLiked ? 'bg-red-500 text-white' : 'bg-transparent'}`}
              >
                <IoIosHeartEmpty className={isLiked ? 'h-10 w-10 bg-red-500' : 'h-10 w-10 bg-transparent'} />
              </p>
            </div>
            <div className="h-[210px] w-[403px] rounded-[4px] border-[1.5px] border-[#646262]">
              <form className="flex p-[18px] pt-[32px]">
                <svg className="mt-[6px]" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clip-path="url(#clip0_0_2078)">{/* SVG Paths */}</g>
                  <defs>
                    <clipPath id="clip0_0_2078">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="pl-[6px]">
                  <p className="font-[poppins] text-[18px] font-[600]">Free Delivery</p>
                  <p className="pt-[5px] font-[poppins] text-[14px]">Enter your postal code for Delivery Availability</p>
                </div>
              </form>
              <p className="h-[1.4px] w-[400px] border-[1.4px] border-[gray]"></p>
            </div>
          </div>
        </form>
      ) : (
        <div className="">Product not found</div>
      )}
      <div className="">
        <BestSelling productItems={bestSelling} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
