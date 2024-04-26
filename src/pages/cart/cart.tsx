import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IEntity } from 'modules/home/types';
import { config } from 'config';
import { InputNumber, Button, message } from 'antd';
import { GetProductBasket, ProductBasketDelete, ProductBasketMinus, ProductBasketPlus } from 'modules/basket/api';

import { RiDeleteBin5Line } from 'react-icons/ri';

const Cart: React.FC = () => {
  const [basketProd, setBasketProd] = useState<IEntity.Basket[]>([]);
  const [subtotal, setsubtotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: { data: IEntity.Basket[] } = await GetProductBasket();
        const basket = await GetProductBasket();

        setBasketProd(data);

        // console.log('basket= ', basket);

        const totalSum: number = data.reduce((accumulator, currentValue) => {
          const sumAsNumber: number = parseFloat(currentValue.sum);
          return accumulator + sumAsNumber;
        }, 0);
        setsubtotal(totalSum);
        // console.log('basket= ', data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [basketProd]);

  const handleChange = async (value: number | null, prod: IEntity.Basket) => {
    if (value !== null) {
      console.log('Previous Quantity:', prod.quantity);
      console.log('New Quantity:', value);

      if (value < prod.quantity) {
        const data = await ProductBasketMinus(prod.id);
      } else if (value > prod.quantity) {
        const data = await ProductBasketPlus(prod.id);
      }
      prod.quantity = value;
    }
  };
  const del = async (id: number) => {
    const data = await ProductBasketDelete(id);
    message.success(` Product deleted `);
    // console.log('data= ', data);
  };

  return (
    <div className="px-4 py-16 md:px-[135px]">
      <div className="flex items-center gap-2 py-10 font-[Poppins] text-[24px]">
        <div onClick={() => navigate('/home-page')} className="font-Regular font-[Poppins] text-[#cacad4] no-underline hover:text-current">
          Home
        </div>
        <div>/</div>
        <div className="font-Regular ml-2 font-[Poppins] text-[#cacad4] text-current no-underline">Cart</div>
      </div>
      <div className="flex flex-col justify-between rounded-lg p-4 font-[Poppins] text-[18px] shadow-lg md:flex-row md:p-10">
        <p className="font-[Poppins] text-[18px] md:w-[25%]">Product</p>
        <p className="font-[Poppins] text-[18px] md:w-[20%]">Price</p>
        <p className="font-[Poppins] text-[18px] md:w-[20%]">Quantity</p>
        <p className="font-[Poppins] text-[18px] md:w-[20%]">Subtotal</p>
        <p className="font-[Poppins] text-[18px] md:w-[15%]">Delete</p>
      </div>

      {basketProd.length > 0 &&
        basketProd.map(prod => {
          // console.log('prod= ', prod);

          return (
            <div key={prod.id} className="my-5 flex flex-col justify-between rounded-lg p-4 font-[Poppins] text-[18px] shadow-lg md:flex-row md:p-10">
              <div className="flex items-center gap-[20px]">
                {prod.product.images && prod.product.images.length > 0 && (
                  <img className="h-16 w-16 object-contain" src={config.base + prod.product.images[0].images} alt={prod.product.name} />
                )}
                <div className="">{prod.product.name}</div>
              </div>
              <p className="font-[Poppins] text-[18px]">${prod.product.price}</p>
              <InputNumber
                className="pl-[10 px] mt-[12px] h-[40px] w-[60px] pt-[5px]"
                min={1}
                max={100}
                defaultValue={prod.quantity}
                onChange={value => handleChange(value, prod)}
              />
              <p className="font-[Poppins] text-[18px]">${prod.product.price * prod.quantity}</p>
              <div onClick={() => del(prod.id)} className=" grid h-10 w-10 place-items-center rounded-lg shadow-lg ">
                <RiDeleteBin5Line />
              </div>
            </div>
          );
        })}

      <div className="flex items-center pt-[30px] font-[Poppins]">
        <button
          onClick={() => navigate('/home-page/home')}
          className="mb-[30px] h-[56px] w-[200px]  rounded-[4px] border-[1.4px]  border-[#696868] bg-transparent text-[16px] font-[600] hover:border-none hover:bg-red-500 hover:text-white "
        >
          Return To Shop
        </button>
      </div>
      <div className="flex flex-col gap-3 rounded-lg border-[1.8px] border-[#000000] p-5 md:p-10 md:pl-[56rem]">
        <h1 className="font-[Poppins] text-[20px] font-[500]">Cart Total</h1>
        <div className="flex items-center justify-between font-[Poppins] text-[18px] font-[400]">
          <p className="">Subtotal:</p>
          <p className="">${subtotal}</p>
        </div>
        <div className="h-[2px] w-full bg-[#9b9999]"></div>
        <div className="flex items-center justify-between font-[Poppins] text-[18px] font-[400]">
          <p className="">Shipping:</p>
          <p className="">Free</p>
        </div>
        <p className="h-[2px] w-full bg-[#9b9999]"></p>
        <div className="flex items-center justify-between font-[Poppins] text-[18px] font-[400]">
          <p className="">Total:</p>
          <p className="">${subtotal}</p>
        </div>
        <Button
          onClick={() => navigate('/home-page/checkOut')}
          className="block h-[66px] rounded-[4px] bg-[#DB4444] font-[Poppins] text-[16px] font-semibold text-[white]"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
