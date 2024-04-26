import { Button, Input, message } from 'antd';

import './main.css';
import { useEffect, useState } from 'react';
import { IEntity } from 'modules/account/types';
import { UpdatePut, changePut } from 'modules/account/api';
import { useNavigate } from 'react-router-dom';

const Account: React.FC = () => {
  const [password, setPassword] = useState<IEntity.change>();
  const [user, setUser] = useState<IEntity.Update>();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      console.log(password);
      try {
        // const res = await UpdatePut(user)
        const ress = await changePut(password);
        // console.log("user",res);
        setTimeout(() => {
          navigate('/home-page/home');

        }, 1500);
        console.log("pasvord",ress);

        message.success('This is a success message');

      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [password]);

  const saveUser = async () => {
    const passwordInputs = document.querySelectorAll('.Input1') as NodeListOf<HTMLInputElement>;
    const userdata = document.querySelectorAll('.Input') as NodeListOf<HTMLInputElement>;
    const userdatalar = Array.from(userdata).map(input => input.value);
    const passwordValues = Array.from(passwordInputs).map(input => input.value);

    if (!userdatalar[0]) {
      // console.error('User data is required.');
      return;
    }

    if (!passwordValues[0]) {
      // console.error('Password data is required.');
      return;
    }

    // Update user data
    const updatedUser = {
      first_name: userdatalar[0],
      last_name: userdatalar[1],
      email: userdatalar[2],
      address: userdatalar[3]
    };
    setUser(updatedUser);

    // Update password data
    const updatedPassword = {
      old_password: passwordValues[0],
      password: passwordValues[1],
      password2: passwordValues[2]
    };
    setPassword(updatedPassword);

    try {

      const res = await changePut(updatedPassword);
      console.log(res);
      message.success('Password updated successfully');
    } catch (error) {
      console.error('Error updating password:', error);
      message.error('Failed to update password');
    }
  };


  return (
    <div className="flex flex-col gap-3 font-[Poppins]">
      <br />
      <br />
      <div className="pl-[135px] pr-[135px]">
        {/* naw pej */}
        <div className=" flex items-center  justify-between gap-3">
          <span className=" flex items-center gap-3">
            <h3 className="home">Home</h3>
            <h3 className="home">/</h3>
            <h3 className="my">My Account</h3>
          </span>

          <span className="flex items-center gap-3">
            <h3 className="my">Welcome!</h3>
            <h3 className="kok"> Md Rimel</h3>
          </span>
        </div>
        {/* form */}
        <div className=" flex items-start  justify-between">
          <div className="mt-[100px]">
            <span>
              <h3 className="">Manage My Account</h3>
              <p id="cursor" className="kok1">
                My Profile
              </p>
              <p id="cursor" className="add">
                Address Book
              </p>
              <p id="cursor" className="add">
                My Payment Options
              </p>
            </span>
            <span>
              <h3 className="">My Orders</h3>

              <p id="cursor" className="add">
                My Returns
              </p>
              <p id="cursor" className="add">
                My Cancellations
              </p>
            </span>
            <span>
              <h3 className="">My WishList</h3>
            </span>
          </div>
          <div>
            <div className="div mt-[80px] h-[630] w-[670px] p-4 pr-[135px]">
              <form className="flex w-full flex-col gap-3 pl-[80px] pr-[80px]">
                <h1 className="profil">Edit Your Profile</h1>
                <div className="flex items-center gap-3">
                  <span className="flex flex-col  gap-3">
                    <h4 className="text">First Name</h4>
                    <Input type="text" placeholder="First Name" className="Input h-[50px] w-[300px]" />
                  </span>
                  <span className="flex flex-col  gap-3">
                    <h4 className="text">Last Name</h4>
                    <Input type="text" placeholder="Last Name" className="Input h-[50px] w-[300px]" />
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex flex-col  gap-3">
                    <h4 className="text">Email</h4>
                    <Input type="email" placeholder="Email" className="Input h-[50px] w-[300px]" />
                  </span>
                  <span className="flex flex-col  gap-3">
                    <h4 className="text">Address</h4>
                    <Input type="Address" placeholder="Address" className="Input h-[50px] w-[300px]" />
                  </span>
                </div>

                <div className="mt-[30px] flex h-[200px] items-center gap-3">
                  <span className="flex flex-col gap-3">
                    <h4 className="text">Password Changes</h4>
                    <Input type="password" placeholder="Current Password" className="Input1 h-[50px] w-[610px]" />
                    <Input type="password" placeholder="New Password" className="Input1 h-[50px] w-[610px]" />
                    {/* <Input.Password placeholder="input password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} /> */}
                    <Input type="password" placeholder="Confirm New Password" className="Input1 h-[50px] w-[610px]" />
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Button>Cancel</Button>
                  <Button type="primary" onClick={saveUser} danger>
                    Save Changes
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Account;
