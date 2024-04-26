import { Footer, Navbar } from 'components';
import React from 'react';

const Error: React.FC = () => {
  return (
    <div className="w-full">
      <div>
        <div className="ml-[90px]  flex gap-2 pt-[60px] font-[Poppins] text-[24px]">
          <a className="font-Regular font-[Poppins] text-[#cacad4] no-underline hover:text-current" href="/home">
            Home
          </a>
          <div>/</div>
          <a className="font-Regular ml-2 font-[Poppins] text-[#cacad4] text-current no-underline" href="./error">
            404 Error
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-[120px] font-[500]">
        <h1 className="font-[Inter] text-[120px]">404 Not Found</h1>
        <p className="pt-[20px] font-[poppins] text-[20px]">Your visited page not found. You may go home page.</p>
      </div>
      <div className=" flex items-center justify-center  pt-[84px]">
        <a href="/home" className=" flex h-[60px] w-[264px]  items-center  justify-center rounded-[4px] bg-[#DB4444] font-[poppins]  text-[#f7faf7]">
          Back to home page
        </a>
      </div>
      <br />
      <br />
      <div className=" pt-[156px]"> </div>
    </div>
  );
};

export default Error;
