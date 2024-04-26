/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from './img/dl.beatsnoop 1.png';
import Footer from 'components/footer';

import { Button, Form, Input, message } from 'antd';
import { Types, Api } from 'modules/auth';
import { AxiosError } from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { Navbar } from 'components';

const Email: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: Types.IEntity.Login) => {
    //  console.log(values);

    try {
      if (values) {
        const { data } = await Api.Email(values);
        localStorage.setItem('email', values.email);
        // message.success('Email send code succussfuly')
        navigate(data ? '/auth/forget' : '');
      } else {
        message.error('Email is required');
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        message.error(`Error😓`, err.response?.data?.message);
      }
    }
  };

  return (
    <div className="w-full">
      <Navbar />
      <div className="header pt-24 flex">
        <div className=" h-[700px] w-[800px]">
          <img className="h-[700px] w-[800px]" src={img} />
        </div>

        <Form onFinish={onFinish} className="Create flex flex-col items-center gap-8 md:w-1/2 md:gap-16">
          <div className="account flex flex-col">
            <div className="pt-[180px] font-[inter] text-4xl font-semibold leading-loose tracking-wider text-black"> Send Email</div>
            <div className="font-[poppins] text-base font-normal leading-normal text-black">Enter your details below</div>
          </div>
          <div>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]} className="w-full md:w-3/4">
              <Input required type="text" className="w-80 rounded border-b border-gray-500 bg-transparent py-3 text-xl" placeholder="Email" />
            </Form.Item>
          </div>
          <div className="buttons mt-[-40px] flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Button htmlType="submit" className="h-12 w-full bg-red-500 text-xl text-white md:h-[45px] md:w-[130px]">
              Send Email
            </Button>
          </div>

          {/* <div onClick={() => navigate('/auth/email')} className="hover:bg-[#327fe4] cursor-pointer font-[poppins]  text-[20px]  text-[red]">Forget Password?</div> */}
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Email;
