import React from 'react';
import img from './img/dl.beatsnoop 1.png';

import Footer from 'components/footer';

import { Button, Form, Input, message } from 'antd';
import { Types, Api } from 'modules/auth';
import { AxiosError } from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from 'components';


// interface SignupProps {}

const Register: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: Types.IEntity.Register) => {
    try {
      const { data } = await Api.Register(values);
      message.success(`Successfully registered. Hi ${data.firstName}`);
      navigate('/auth/login');
      console.log(message);
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        message.error(err.response?.data?.message);
      }
    }
  };

  return (
    <>
    <div className='w-full'>
      <Navbar />
      <div className="header pt-24 flex ">
        <div className=" h-[700px] w-[800px]">
          <img className="h-[700px] w-[800px]" src={img} />
        </div>

          <div className=" flex flex-col ">
            <div className="account ml-[150px] mt-[70px] flex flex-col">
              <div className="font-['Inter'] text-[36px] font-[550]  leading-loose tracking-wider text-black">Create an account</div>
              <div className="ml-[20px] pt-[66px] font-['Poppins'] text-base font-normal leading-normal text-black">Enter your details below</div>
            </div>

            <Form onFinish={onFinish} className="Create mt-[28px] flex flex-col items-center ">
              <div className=" ml-[140px] flex w-[300px] flex-col gap-6">
                <Form.Item<Types.IEntity.Register> className="m-0" name="first_name" rules={[{ required: true, message: 'Please input your first name!' }]}>
                  <Input required className=" rounded-none border-x-0 border-t-0 border-gray-500 bg-transparent  py-3 text-xl" placeholder="Name" />
                </Form.Item>

                <Form.Item<Types.IEntity.Register> className="m-0" name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                  <Input required className=" rounded-none border-x-0 border-t-0 border-gray-500 bg-transparent py-3 text-xl" placeholder="Email" />
                </Form.Item>

                <Form.Item<Types.IEntity.Register>
                  className="m-0"
                  name="password"
                  dependencies={['password']}
                  rules={[{ whitespace: true, min: 6, required: true, message: 'Please input your password' }]}
                >
                  <Input.Password required className=" rounded-none border-x-0 border-t-0 border-gray-500 bg-transparent  py-3 text-xl" placeholder="Password" />
                </Form.Item>
                <label className="pointer-events-none absolute left-5 top-3 flex text-base text-gray-500"></label>
                <div className="block w-full">
                  <span className="absolute bottom-0 left-0 block h-0.5 bg-blue-500 transition-all duration-200 ease-in"></span>
                </div>
              </div>
              <br />

              <Button className="ml-[140px] h-[50px] w-[300px] bg-red-500 text-[18px] text-white " htmlType="submit">
                Create Account
              </Button>
              <div className=" ml-[-30px] flex items-center justify-center">
                <p className="ml-[170px] font-[poppins] text-[18px] "> Already have account?</p>
                <Link to="/auth/login" className=" ml-[5px] mt-[-4px] flex items-center gap-2">
                  <p className=" cursor-pointer text-[18px]"> Log in</p>
                </Link>
              </div>
            </Form>
          </div>
        </div>
        <Footer />
        <div />
      </div>
    </>
  );
};
export default Register;
