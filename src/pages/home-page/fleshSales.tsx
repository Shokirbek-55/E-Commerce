import { IEntity } from 'modules/home/types';
import FlashCard from './components/fleshCard';

import Timer from './components/timer';
import { Button } from 'antd';

interface FlashDealsProps {
  productItems: IEntity.Product[];
}

const FleshSales: React.FC<FlashDealsProps> = ({ productItems }) => {
  return (
    <div className="cursor-pointer py-10 font-[Poppins] ">
      <div className="flex items-center gap-2 pb-5">
        <div className="h-10 w-5 rounded-md bg-red-500"></div>
        <div className="text-md font-[poppins] text-[17px] font-bold  text-red-500">Today's</div>
      </div>
      <div className="">
        <div className="flex items-end gap-10">
          <div className="font-[inter] text-4xl text-[36px] font-semibold">Flash Sales</div>
          <Timer time="april 30, 2024 00:00:00" />
        </div>
      </div>
      <div className="ml-[-60px] font-[poppins]">
        <FlashCard productItems={productItems} />
      </div>
      <div className="gap flex flex-col items-center">
        {/* <Button danger size="large" type="primary">
          View All Products
        </Button> */}
        <br />
        <a href="https://www.figma.com/file/ILcHGkGtPBoIlTwKws9O1Z/Food-Figma?type=design&node-id=0-1&mode=design" className="text-black hover:text-blue-400">
          https://www.figma.com/file/ILcHGkGtPBoIlTwKws9O1Z/Food-Figma?type=design&node-id=0-1&mode=design
        </a>
      </div>
      <hr className="mt-10" />
    </div>
  );
};

export default FleshSales;
