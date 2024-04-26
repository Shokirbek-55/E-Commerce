// import React from 'react';
// import './main.css';
// import { Button, Form, Input, message } from 'antd';
// import { Types, Api } from 'modules/account';
// import { AxiosError } from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Account: React.FC = () => {
//   const navigate = useNavigate();

//   const onFinish = async (values: Types.IEntity.Update) => {
//     try {
//       const { data } = await Api.UpdatePut(values);
//       message.success(`Successfully updated ${data.name}`);
//       console.log(message);
//     } catch (err) {
//       console.log(err);
//       if (err instanceof AxiosError) {
//         message.error(`Error`, err.response?.data?.message);
//       }
//     }
//   };

//   const Update = async (values: Types.IEntity.change) => {
//     try {
//       const { data } = await Api.changePut(values);
//       message.success(`Successfully change ${data.name}`);
//       console.log(message);
//     } catch (err) {
//       if (err instanceof AxiosError) {
//         message.error(err.response?.data?.message);
//       }
//     }
//   };

//   return (
//     <div className=""></div>
    // <div className="mb-[156px] flex flex-col gap-3">
    //   <div className="pl-[135px] pr-[135px]">
    //     {/* naw pej */}
    //     <div className=" flex items-center  justify-between gap-3">
    //       <span className=" flex items-center gap-3">
    //         <a href="/home" className="home">
    //           Home
    //         </a>
    //         <h3 className="home">/</h3>
    //         <h3 className="my">My Account</h3>
    //       </span>

    //       <span className="flex items-center gap-3">
    //         <h3 className="my">Welcome!</h3>
    //         <h3 className="kok"> Md Rimel</h3>
    //       </span>
    //     </div>
    //     {/* form */}
    //     <div className=" flex items-start  justify-between">
    //       <div className="mt-[100px]">
    //         <span>
    //           <h3 className="font-[poppins]">Manage My Account</h3>
    //           <p id="cursor" className="kok1">
    //             My Profile
    //           </p>
    //           <p id="cursor" className="add hover:text-[#ff1a1a]">
    //             Address Book
    //           </p>
    //           <p id="cursor" className="add hover:text-[#db4444]">
    //             My Payment Options
    //           </p>
    //         </span>
    //         <span>
    //           <h3 className="font-[poppins]">My Orders</h3>

    //           <p id="cursor" className="add hover:text-[#db4444]">
    //             My Returns
    //           </p>
    //           <p id="cursor" className="add hover:text-[#db4444]">
    //             My Cancellations
    //           </p>
    //         </span>
    //         <span>
    //           <h3 className="font-[poppins]">My WishList</h3>
    //         </span>
    //       </div>
    //       <div>
    //         <div className="div mt-[80px] h-[630] w-[670px] p-4 pr-[135px]">
    //           <Form onFinish={onFinish} className="flex w-full flex-col gap-3 pl-[80px] pr-[80px]">
    //             <h1 className="profil">Edit Your Profile</h1>
    //             <div className="flex items-center gap-3">
    //               <span className="flex flex-col  gap-3">
    //                 <h4 className="text">First Name</h4>
    //                 <Form.Item<Types.IEntity.Update> className="m-0" name="first_name" rules={[{ required: true, message: 'Please input your first name!' }]}>
    //                   <Input type="text" placeholder="First Name" className="Input h-[50px] w-[300px]" />
    //                 </Form.Item>
    //               </span>
    //               <span className="flex flex-col  gap-3">
    //                 <h4 className="text">Last Name</h4>
    //                 <Form.Item<Types.IEntity.Update> name="last_name" className="m-0" rules={[{ required: true, message: 'Please input your last name!' }]}>
    //                   <Input type="text" placeholder="Last Name" className="Input h-[50px] w-[300px]" />
    //                 </Form.Item>
    //               </span>
    //             </div>
    //             <div className="flex items-center gap-3">
    //               <span className="flex flex-col  gap-3">
    //                 <h4 className="text">Email</h4>
    //                 <Form.Item<Types.IEntity.Update> className="m-0" name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
    //                   <Input type="text" placeholder="Email" className="Input h-[50px] w-[300px]" />
    //                 </Form.Item>
    //               </span>
    //               <span className="flex flex-col  gap-3">
    //                 <h4 className="text">Address</h4>
    //                 <Form.Item<Types.IEntity.Update> name="adderrs" rules={[{ required: true, message: 'Please input your Address!' }]} className="m-0">
    //                   <Input type="text" placeholder="Address" className="Input h-[50px] w-[300px]" />
    //                 </Form.Item>
    //               </span>
    //             </div>
    //             <Form onFinish={Update} className="mt-[30px] flex h-[200px] items-center gap-3">
    //               <span className="flex flex-col  gap-3">
    //                 <h4 className="text">Password Changes</h4>
    //                 <Form.Item<Types.IEntity.change> name="old_password" rules={[{ required: true, message: 'Please input your Current Password!' }]}>
    //                   <Input type="text" placeholder="Current Password" className="Input h-[50px] w-[610px]" />
    //                 </Form.Item>

    //                 <Form.Item<Types.IEntity.change> name="password" rules={[{ required: true, message: 'Please input your New Password!' }]}>
    //                   <Input type="text" placeholder="New Password" className="Input h-[50px] w-[610px]" />
    //                 </Form.Item>

    //                 <Form.Item<Types.IEntity.change> name="password2" rules={[{ required: true, message: 'Please input your Confirm New Password!' }]}>
    //                   <Input type="text" placeholder="Confirm New Password" className="Input h-[50px] w-[610px]" />
    //                 </Form.Item>
    //               </span>
    //             </Form>
    //             <br />
    //             <div className="mr-[60px] flex  justify-end gap-[13px]">
    //               <Button>Cancel</Button>
    //               <Button type="primary" danger htmlType="submit">
    //                 Save Changes
    //               </Button>
    //             </div>
    //           </Form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };
// export default Account;
