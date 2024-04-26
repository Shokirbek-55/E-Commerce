import { Api } from 'modules/home';
import { IEntity } from 'modules/home/types';
import Card from 'pages/home-page/components/card';
import { useEffect, useState } from 'react';

const Category = ({ category }: { category: string }) => {
  const [productItems, setproductItems] = useState<IEntity.Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: { data: IEntity.Product[] } = await Api.GetCategoryProduct(category);
        setproductItems(data);

        console.log('data= ', data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="py-16 text-center font-[Inter] text-5xl font-[600] capitalize">{category}</div>
      <div className="flex flex-wrap px-[135px]">
        {productItems.length > 0 ? (
          productItems.map((prod: IEntity.Product, idx: number) => (
            <div key={prod.id} className="">
              <Card id={prod.id} images={prod.images} price={prod.price} stars={prod.stars} name={prod.name} quantity={prod.quantity} key={prod.id} />
            </div>
          ))
        ) : (
          <div className="pl-[31rem]">
            <div className="mb-[100px]   text-center font-[Poppins] text-[22px] font-[500]">There are not {category} here</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
