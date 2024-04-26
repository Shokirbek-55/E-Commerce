import { Button } from 'antd';
import { IEntity } from 'modules/home/types';
import Card from './components/card';

interface BestSellingProps {
  productItems: IEntity.Product[];
}

const BestSelling: React.FC<BestSellingProps> = ({ productItems }) => {
  return (
    <div className="font-[poppins]">
      <div className="flex items-center gap-2 pb-5">
        <div className="h-10 w-5 rounded-md bg-red-500"></div>
        <div className="text-md font-bold  text-red-500">This Month</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-4xl font-semibold">Best Selling Products</div>
      </div>
      <div className="flex cursor-pointer flex-wrap  font-[Poppins]">
        {productItems &&
          productItems.map((prod: IEntity.Product, idx: number) => (
            <Card id={prod.id} images={prod.images} price={prod.price} stars={prod.stars} name={prod.name} quantity={prod.quantity} key={prod.id} />
          ))}
      </div>
    </div>
  );
};

export default BestSelling;
