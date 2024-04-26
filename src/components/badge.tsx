import { TbHeadset } from 'react-icons/tb';
import { LuCar } from 'react-icons/lu';
import { LuBadgeCheck } from 'react-icons/lu';

export const Badge: React.FC = () => {
  return (
    <div className=" flex gap-[1rem] flex-wrap font-[poppins] justify-between py-28">
      <div className="flex flex-col items-center">
        <div className="grid h-[90px] w-[90px] place-items-center rounded-full bg-gray-300">
          <div className="grid h-[65px] w-[65px] place-items-center rounded-full bg-black ">
            <LuCar className="text-4xl text-white" />
          </div>
        </div>
        <h2>FREE AND FAST DELIVERY</h2>
        <h4>Free delivery for all orders over $140</h4>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid h-[90px] w-[90px] place-items-center rounded-full bg-gray-300">
          <div className="grid h-[65px] w-[65px] place-items-center rounded-full bg-black ">
            <TbHeadset className="text-4xl text-white" />
          </div>
        </div>
        <h2>24/7 CUSTOMER SERVICE</h2>
        <h4>Free delivery for all orders over $140</h4>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid h-[90px] w-[90px] place-items-center rounded-full bg-gray-300">
          <div className="grid h-[65px] w-[65px] place-items-center rounded-full bg-black ">
            <LuBadgeCheck className="text-4xl text-white" />
          </div>
        </div>
        <h2>MONEY BACK GUARANTEE</h2>
        <h4>Free delivery for all orders over $140</h4>
      </div>
    </div>
  );
};
