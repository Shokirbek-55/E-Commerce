import React, { useEffect, useState } from 'react';

import { Api } from 'modules/wishlist';
import { Wishlist as wish } from 'modules/wishlist/type';
import Card from 'pages/home-page/components/card';

const Wishlist: React.FC = () => {
  const [wishList, setWishList] = useState<wish[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: { data: wish[] } = await Api.GetWishlistList();
        console.log(data[0].wishlist_pro);

        setWishList(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="font-[Poppins] flex flex-col items-center justify-between p-8 lg:flex-row lg:gap-[45px] lg:p-16">
        <div className="font-500 mb-4 text-2xl pl-[68px] lg:mb-0">Wishlist ({wishList.length})</div>
        {/* <button className="font-600 mb-4 h-12 w-full rounded-[4px] border-[1.4px] border-[#696868] text-base lg:mb-0 lg:h-[50px] lg:w-[210px] lg:text-lg">
          Move All To Bag
        </button> */}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-[50px] font-[poppins] cursor-pointer mb-[67px]">
        {wishList.map(productItem => (
          <div key={productItem.id}>
            <Card {...productItem.wishlist_pro} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
