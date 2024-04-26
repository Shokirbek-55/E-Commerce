import { Spin } from 'antd';
import { AxiosError } from 'axios';
import { Footer, Navbar } from 'components';
import { Api } from 'modules/home';
import { IEntity } from 'modules/home/types';
import React, { useEffect, useState } from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  const [data, setdata] = useState<boolean>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: { data: IEntity.Product[] } = await Api.GetFleshSales();
        // console.log('data= ', data);
        setdata(true);
      } catch (err) {
        console.log(err);
        if (err instanceof AxiosError) {
          console.log('err= ', err.message);
          if (err.message === 'Network Error') setdata(false);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* {data ? (
        <div className="">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      ) : (
        <div className="grid h-full place-items-center text-center">Error Network</div>
      )} */}
      <Navbar />
      <div className="pt-40">{children}</div>
      <Footer />
    </>
  );
};

export default Main;
