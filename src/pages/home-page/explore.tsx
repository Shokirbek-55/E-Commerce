import * as React from 'react';
import { Button } from 'antd';
import Card from './components/card';
import { IEntity } from 'modules/home/types';

interface ExploreProps {
  productItems: IEntity.Product[];
}

const Explore: React.FC<ExploreProps> = ({ productItems }) => {
  return (
    <div className="mt-[60px] font-[poppins]">
      <div className="ml-5 flex items-center gap-2 pb-5">
        <div className="h-10 w-5 rounded-md bg-red-500"></div>
        <div className="text-md font-bold text-red-500 ">Our Products</div>
      </div>
      <div className="ml-5 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 text-4xl font-semibold md:mb-0">Explore Our Products</div>
      </div>
      <div className="flex cursor-pointer flex-wrap  gap-[3px] font-[poppins] ">
        {productItems.map((prod: IEntity.Product) => (
          <Card id={prod.id} images={prod.images} price={prod.price} stars={prod.stars} name={prod.name} quantity={prod.quantity} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
