import { Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { SentMessage } from 'modules/contact/api';
import { IEntity } from 'modules/contact/type';
import React from 'react';

const Contact: React.FC = () => {
  const [form] = useForm();

  const onFinish = async (value: IEntity.Contact) => {
    try {
      const data = await SentMessage(value);
      message.success(`sent message`);
      form.resetFields(); // Formni tozalash

      // console.log(data);
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-4 font-[poppins] py-8 sm:px-8 sm:py-12 lg:px-[135px] lg:py-24">
      <div className=" flex gap-2 pt-[34px] font-[Poppins] text-[24px]">
        <a className="font-Regular font-[Poppins] text-[#cacad4] no-underline hover:text-current" href="/home">
          Home
        </a>
        <div>/</div>
        <a className="font-Regular ml-2 font-[Poppins] text-[#cacad4] text-current no-underline" href="./contact">
          Contact
        </a>
      </div>
      <div className="flex flex-col  justify-between gap-4 pt-4 sm:flex-row sm:gap-10 sm:pt-[60px]">
        <div className="rounded-lg bg-white p-4 shadow-2xl sm:p-[30px]">
          <a className="flex items-center gap-2 text-black no-underline" target="_blank" rel="noreferrer" href="tel:+998932269225">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="20" fill="#DB4444" />
              <path
                d="M18.5542 14.24L15.1712 10.335C14.7812 9.88503 14.0662 9.88703 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0195 22.6566 23.0354C22.5567 23.0513 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8503 17.0052 17.619C16.9573 17.5298 16.9399 17.4273 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-base font-semibold sm:text-lg">Call Us</h2>
          </a>
          <div className="pt-2">
            <p className="text-sm font-normal sm:text-base">We are available 24/7, 7 days a week.</p>
            <p className="pt-2 text-sm font-normal sm:text-base">Phone: +8801611112222</p>
          </div>
          <hr className="my-4" />
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:arslonbekalimbaev@gmail.com"
            className="flex items-center gap-2 pt-4 text-black no-underline sm:pt-[32px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="20" fill="#DB4444" />
              <path d="M10 13L20 20L30 13M10 27H30V13H10V27Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="text-base font-semibold sm:text-lg">Write To Us</h2>
          </a>
          <div>
            <p className="pt-2 text-sm font-normal sm:text-base">Fill out our form and we will contact you within 24 hours.</p>
            <p className="pt-2 text-sm font-normal sm:text-base">Emails: customer@exclusive.com</p>
          </div>
        </div>
        <div className="w-full rounded-lg p-4 shadow-2xl sm:w-[785px] sm:p-[20px]">
          <Form form={form} onFinish={onFinish}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Form.Item
                className=""
                rules={[
                  {
                    required: true,
                    message: 'Enter your name',
                    min: 3,
                    whitespace: true
                  }
                ]}
                hasFeedback
                name="first_name"
              >
                <Input
                  className="h-12 w-full rounded-md border-none bg-gray-200 pl-4 outline-none sm:h-[50px] sm:w-[235px] sm:rounded-[4px] sm:bg-[#F5F5F5] sm:pl-[20px]"
                  placeholder="Enter username"
                />
              </Form.Item>
              <Form.Item
                className=""
                rules={[
                  {
                    required: true,
                    message: 'Enter your email',
                    whitespace: true,
                    type: 'email'
                  }
                ]}
                hasFeedback
                name="email"
              >
                <Input
                  className="h-12 w-full rounded-md border-none bg-gray-200 pl-4 outline-none sm:h-[50px] sm:w-[235px] sm:rounded-[4px] sm:bg-[#F5F5F5] sm:pl-[20px]"
                  placeholder="Enter email"
                />
              </Form.Item>
              <Form.Item
                className=""
                rules={[
                  {
                    required: true,
                    message: 'please enter your valid phone number',
                    whitespace: true,
                    pattern: /^(?:\+998)?(?:\d{9})$/
                  }
                ]}
                name="phone"
              >
                <Input
                  className="h-12 w-full rounded-md border-none bg-gray-200 pl-4 outline-none sm:h-[50px] sm:w-[235px] sm:rounded-[4px] sm:bg-[#F5F5F5] sm:pl-[20px]"
                  placeholder="Enter phone number"
                />
              </Form.Item>
            </div>
            <div className="mt-4  h-[220px] rounded-lg bg-gray-200 p-4 sm:mt-[20px] sm:bg-[#F5F5F5] sm:p-[20px]">
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Enter your message',
                    min: 15,
                    whitespace: true
                  }
                ]}
                hasFeedback
                name="message"
              >
                <Input.TextArea className="border-none bg-transparent outline-none" placeholder="Enter message" />
              </Form.Item>
            </div>
            <Form.Item>
              <Button
                className="font-poppins h-12 w-full rounded-md border-none bg-[#DB4444] text-center text-white sm:h-[56px] sm:w-[215px] sm:rounded-[4px]"
                block
                type="primary"
                htmlType="submit"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
