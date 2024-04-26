import React, { useEffect, useState } from 'react';
import {  Form, Input, Button } from 'antd';
import { IEntity } from 'modules/home/types';
import { Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Checkbox } from 'antd';
import { GetProductBasket } from 'modules/basket/api';

import type { CheckboxProps } from 'antd';
import i1 from './img/image 30.png';
import i2 from './img/image 31.png';
import i3 from './img/image 32.png';
import i4 from './img/image 33.png';
import { config } from 'config';
const Checkout: React.FC = () => {
  const [form] = useForm();
  const [subtotal, setsubtotal] = useState([]);
  const [basketProd, setBasketProd] = useState<IEntity.Basket[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setTimeout(() => {


      setIsModalOpen(true);
    }, 1500);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: { data: IEntity.Basket[] } = await GetProductBasket();
        setBasketProd(data);
        console.log('basket= ', data);

        let sum: any = 0;

        data.map(itm => {
          sum += parseFloat(itm.sum);
        });
        console.log(sum);

        setsubtotal(sum);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChange1: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const addPurchase = async (formData: any) => {
    console.log(formData);
    showModal();
  };

  return (
    <div>
      <br />
      <br />
      <div className="ml-[135px] mr-[135px] font-[Poppins]">
        <div className="flex items-center justify-between gap-2">
          <div className=" flex gap-2 pt-[34px] text-[24px]">
            <a className="font-Regular font-[poppins]  text-[#cacad4] no-underline hover:text-current" href="/home">
              Home
            </a>
            <div className="pt-[5px]">/</div>
            <a className="font-Regular font-[poppins] text-[#cacad4] text-current no-underline" href="CheckOut">
              CheckOut
            </a>
          </div>
        </div>

        <h1>Billing Details</h1>
        <div className="flex h-auto h-full  flex-wrap justify-between gap-5 p-4">
          <div className="flex w-[400px] flex-col gap-2">
            <Form form={form} onFinish={addPurchase} className="flex flex-col gap-2">
              <label className="label">First Name*</label>
              <Form.Item className="m-0 flex flex-col gap-2" name="firstName" rules={[{ required: true, message: 'Please input your first name!' }]}>
                <Input className="input" size="large" placeholder="First Name*" />
              </Form.Item>
              <label className="label">Company Name *</label>
              <Form.Item className="m-0 flex flex-col gap-2" name="companyName" rules={[{ required: true, message: 'Please input your company name!' }]}>
                <Input className="input" size="large" placeholder="Company Name" />
              </Form.Item>
              <label className="label">Street Address*</label>
              <Form.Item className="m-0 flex flex-col gap-2" name="streetAddress" rules={[{ required: true, message: 'Please input your street address!' }]}>
                <Input className="input" size="large" placeholder="Street Address" />
              </Form.Item>
              <label className="label">Apartment, floor, etc. (optional)</label>
              <Form.Item className="m-0 flex flex-col gap-2" name="apartment" rules={[{ required: true, message: 'Please input your town or Apartment!' }]}>
                <Input className="input" size="large" placeholder="Apar tment" />
              </Form.Item>
              <label className="label">Town/City*</label>
              <Form.Item className="m-0 flex flex-col gap-2" name="townCity" rules={[{ required: true, message: 'Please input your town or city!' }]}>
                <Input className="input" size="large" placeholder="Town/City" />
              </Form.Item>
              <label className="label">Phone Number*</label>
              <Form.Item className="m-0 flex flex-col gap-2" name="phoneNumber" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                <Input className="input" size="large" placeholder="Phone Number" />
              </Form.Item>
              <label className="label">Email Address*</label>
              <Form.Item className="m-0 flex flex-col gap-2" name="emailAddress" rules={[{ required: true, message: 'Please input your email address!' }]}>
                <Input className="input" size="large" placeholder="Email Address" />
              </Form.Item>
              <div className="flex items-center gap-2">
                <Checkbox onChange={onChange}></Checkbox>
                <p className="save">Save this information for faster check-out next time</p>
              </div>
              <div>
                <Button size="large" type="primary" danger htmlType="submit">
                Place Order
                </Button>
              </div>
            </Form>
          </div>
          <br />
          <br />
          <div className="mr-[140px] ">
            <div className=" flex h-[500px] w-[400px] flex-col gap-1">
              {/* data lar */}
              <div className=" box-border flex w-full flex-col items-center  gap-2 pl-[15px] pr-[15px]">
                {basketProd ? (
                  basketProd.map((itm, index) => (
                    <div key={index} className="product-item flex w-full items-center  justify-between">
                      <img src={config.base + itm.product.images[0].images} alt="" className="w-[60px]" />
                      <p className="text-[15px]">{itm.product.name}</p>
                      <p> ${itm.sum}</p>
                    </div>
                  ))
                ) : (
                  <p>You have not got anything in cart</p>
                )}
                <div className="he-[80] w-full">
                  {' '}
                  <div className="flex w-full items-center justify-between p-0">
                    <p className="data m-2 p-0 "> Subtotal :</p>

                    <p className="data m-2 p-0">$ {subtotal}</p>
                  </div>
                  <hr />
                  <div className="flex w-full items-center justify-between p-2">
                    <p className="data m-0 p-0"> Shipping :</p>

                    <p className="data m-2 p-0">Free</p>
                  </div>
                  <hr />
                  <div className="flex w-full items-center justify-between p-0">
                    <p className="data m-2 p-0 "> Total :</p>

                    <p className="data m-2 p-0">$ {subtotal}</p>
                  </div>
                </div>
              </div>

              <div className=" ml-[12px] mt-[20px] flex w-[327px] items-center justify-between">
                <div className="relative flex w-[80px] shrink-0 flex-nowrap items-start gap-[16px]">
                <Checkbox onChange={onChange1}></Checkbox>

                  <span className="relative z-[3] h-[24px] shrink-0 basis-auto whitespace-nowrap text-left font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#000]">
                    Bank
                  </span>
                </div>
                <div className="relative z-[4] flex w-[192px] shrink-0 flex-nowrap items-start gap-[8px]">
                  <div className="relative z-[5] h-[28px] w-[42px] shrink-0 overflow-hidden">
                    <img src={i1} alt="Image 1" />
                  </div>
                  <div className="relative z-[7] h-[28px] w-[42px] shrink-0 overflow-hidden">
                    <img src={i2} alt="Image 2" />
                  </div>
                  <div className="relative z-[9] h-[28px] w-[42px] shrink-0 overflow-hidden">
                    <img src={i3} alt="Image 3" />
                  </div>
                  <div className="relative z-[11] h-[28px] w-[42px] shrink-0 overflow-hidden">
                    <img src={i4} alt="Image 4" />
                  </div>
                </div>
              </div>
              <div className="ml-[12px] flex w-[80px] shrink-0 flex-nowrap items-start gap-[15px]">
              <Checkbox onChange={onChange}></Checkbox>
                <span className="relative z-[3] h-[24px] shrink-0 basis-auto whitespace-nowrap text-left font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#000]">
                  Cash on delivery
                </span>
              </div>
              {/* cupon */}

              <div className="ml-[12px] mr-[12px] flex  items-center justify-between">
                <span className="w-[250px]">
                  <Input className="input1 " placeholder="Coupon Code" />
                </span>
                <Button type="primary" danger>
                  Apply Coupon
                </Button>
              </div>

              <span className="ml-[12px] mt-[25px]">
                {/* <Button type="primary" onClick={showModal} danger>
                  Place Order
                </Button> */}
              </span>
            </div>
          </div>
        </div>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>We will contact you to confirm the payment</p>
        </Modal>
      </div>
      <br />
      <br />
      {/* <Footer /> */}
    </div>
  );
};

export default Checkout;
