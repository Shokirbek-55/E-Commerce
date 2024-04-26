import * as React from 'react';
import { HiOutlineComputerDesktop, HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { PiHeadphones, PiCameraLight } from 'react-icons/pi';
import { BsSmartwatch } from 'react-icons/bs';
import { TbDeviceGamepad } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import Category from 'pages/category/category';

const categories = [
  {
    icon: <HiOutlineDevicePhoneMobile />,
    name: 'Phones'
  },
  {
    icon: <HiOutlineComputerDesktop />,
    name: 'Computers'
  },
  {
    icon: <BsSmartwatch />,
    name: 'Smartwatches'
  },
  {
    icon: <PiCameraLight />,
    name: 'Camera'
  },
  {
    icon: <PiHeadphones />,
    name: 'Headphones'
  },
  {
    icon: <TbDeviceGamepad />,
    name: 'Gaming'
  }
];

const Browse: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="font-[poppins]">
      <div className="flex items-center gap-2 pb-5">
        <div className="h-10 w-5 rounded-md bg-red-500"></div>
        <div className="text-md font-bold  text-red-500">Categories</div>
      </div>
      <div className="font-[poppins] text-4xl font-semibold">Browse By Category</div>
      <div className="flex flex-wrap justify-between  py-16">
        {categories.map((category, idx) => (
          <div
            onClick={() => navigate(`/home-page/${category.name}`)}
            key={idx}
            className="grid h-[145px] w-[170px] place-items-center gap-5 rounded-md border-2  border-solid transition duration-200 hover:bg-red-500 hover:text-white "
          >
            <div className="text-7xl">{category.icon}</div>
            <div className="capitalize">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
