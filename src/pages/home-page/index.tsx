import { default as Header } from './header';
import { default as Arrival } from './arrival';
import { default as FleshSales } from './fleshSales';
import { default as Browse } from './browseBy';
import { default as BestSelling } from './bestSelling';
import { default as Explore } from './explore';
import { useEffect, useState } from 'react';
import { Api } from 'modules/home';
import { IEntity } from 'modules/home/types';
import { Badge } from 'components/badge';

const Home: React.FC = () => {
  const [productItems, setproductItems] = useState<IEntity.Product[]>([]);
  const [bestSelling, setbestSelling] = useState<IEntity.Product[]>([]);
  const [explore, setexplore] = useState<IEntity.Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: { data: IEntity.Product[] } = await Api.GetFleshSales();
        const bestSelling: { data: IEntity.Product[] } = await Api.GetBestSelling();
        const explore: { data: IEntity.Product[] } = await Api.GetExplore();
        setproductItems(data);

        setbestSelling(bestSelling.data);
        setexplore(explore.data);
        // console.log('data= ', data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-[135px]">
      <Header />
      <FleshSales productItems={productItems} />
      <Browse />
      <BestSelling productItems={bestSelling} />
      <Arrival />
      {/* <Music /> */}
      <Explore productItems={explore} />
      <Badge/>
    </div>
  );
};

export default Home;
