/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img from './img/dl.beatsnoop 1.png';

import Footer from 'components/footer';

import { Button, Form, Input, message } from 'antd';
import { Types, Api } from 'modules/auth';
import { AxiosError } from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { session } from 'servicesSession';
import { Navbar } from 'components';
// interface LoginProps {}

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: Types.IEntity.Login) => {
    try {
      const { data } = await Api.Login(values);

      message.success(`Successfully Login. `);
      const token = data.access;
      localStorage.setItem('token', token);
      session.add(token);
      navigate('/home-page/home');
      console.log('yes user');
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        message.error(`Error😓`, err.response?.data?.message);
      }
    }
  };

  return (
    <div className="w-full">
      <Navbar />
      <div className="header pt-24 flex">
        <div className=" h-[700px]  w-[800px]">
          <img className="h-[700px] w-[800px]" src={img} />
        </div>

        <Form onFinish={onFinish} className="Create flex flex-col items-center gap-8 md:w-1/2 md:gap-16">
          <div className="account flex flex-col">
            <div className="pt-[90px] font-[inter] text-4xl font-semibold leading-loose tracking-wider text-black">Log in to Exclusive</div>
            <div className="font-[poppins] text-base font-normal leading-normal text-black">Enter your details below</div>
          </div>
          <div>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]} className="w-full md:w-3/4">
              <Input required type="text" className="w-80 rounded border-b border-gray-500 bg-transparent py-3 text-xl" placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} className="w-full md:w-3/4">
              <Input.Password required type="password" className="w-80 rounded border-b border-gray-500 bg-transparent py-3 text-xl" placeholder="Password" />
            </Form.Item>
          </div>
          <div className="buttons mt-[-40px] flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Button htmlType="submit" className="h-12 w-full bg-red-500 text-xl text-white md:h-[45px] md:w-[130px]">
              Log In
            </Button>
            <Link className="text-xl" to="/auth/register">
              Go to Register
            </Link>
          </div>

          <div onClick={() => navigate('/auth/email')} className="hover:text-[#327fe4] cursor-pointer font-[poppins] mt-[-26px]  text-[22px]  text-[red]">Forget Password?</div>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
