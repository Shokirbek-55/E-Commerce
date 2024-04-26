/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import img from './img/dl.beatsnoop 1.png';

import Footer from 'components/footer';

import { Button, Form, Input, message } from 'antd';
import { Types, Api } from 'modules/auth';
import { useNavigate } from 'react-router-dom';

import { Navbar } from 'components';

const Forget: React.FC = () => {
  const navigate = useNavigate();
  const [passwordCheck, setpasswordCheck] = useState('');

  const onFinish = async (values: Types.IEntity.Login) => {
    console.log(values);

    console.log(values.password, values.password1);
    try {
      if (values.password === values.password1 && values) {
        const { data } = await Api.Forget({
          email: localStorage.getItem('email'),
          password: values.password,
          code: values.activation_code
        });
        message.success('Change password Successfully');
        if (data) {
          navigate('/auth/login');
        }
      } else {
        message.error('Password not match or activation code is incorrect');
      }
    } catch {}
  };

  return (
    <div className="w-full">
      <Navbar />
      <div className="header p-24 flex">
        <div className=" h-[700px] w-[800px]">
          <img className="h-[700px] w-[800px]" src={img} />
        </div>

        <Form onFinish={onFinish} className="Create flex flex-col items-center gap-8 md:w-1/2 md:gap-16">
          <div className="account flex flex-col">
            <div className="pt-[90px] font-[inter] text-4xl font-semibold leading-loose tracking-wider text-black"> Change Password</div>
            <div className="font-[poppins] text-base font-normal leading-normal text-black">Enter your details below</div>
          </div>
          <div>
            <Form.Item name="activation_code" rules={[{ required: true, message: 'Please input your Email!' }]} className="w-full md:w-3/4">
              <Input.Password
                required
                type="number"
                className="w-80 rounded border-b border-gray-500 bg-transparent py-3 text-xl"
                placeholder="Activation Code"
              />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]} className="w-full md:w-3/4">
              <Input.Password
                onChange={e => setpasswordCheck(e.target.value)}
                type="password"
                className="w-80 rounded border-b border-gray-500 bg-transparent py-3 text-xl"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item name="password1" className="w-full md:w-3/4">
              <Input.Password required type="password" className="w-80 rounded border-b border-gray-500 bg-transparent py-3 text-xl" placeholder="Password1" />
            </Form.Item>
          </div>
          <div className="buttons mt-[-30px] flex flex-col  gap-4 md:flex-row md:gap-8">
            <Button htmlType="submit" className="mt-[-30px] h-12 bg-red-500 text-xl text-white md:h-[45px] md:w-[320px] ">
              Change password
            </Button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Forget;
