import React, { useEffect, useState } from 'react';
import { Carousel, Layout, Menu } from 'antd';

import { FaApple } from 'react-icons/fa';
import { LiaArrowRightSolid } from 'react-icons/lia';

import { Api } from 'modules/home'; 
import { IEntity } from 'modules/home/types';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const Header: React.FC = () => {
  const [banners, setBanners] = useState<IEntity.Banner[]>([]);
  const [items, setItems] = useState<IEntity.Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: bannersData }: { data: IEntity.Banner[] } = await Api.GetBannerData();
        const { data: categories }: { data: IEntity.Category[] } = await Api.GetCategory();

        setBanners(bannersData);
        setItems(categories);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col py-10 lg:flex-row lg:justify-between">
      <Sider className="leading-6 lg:w-1/4">
        <Menu className="font-[poppins] text-[17px] font-[500] lg:w-64" mode="inline">
          {items.map((category, index) => (
            <Menu.Item
              className="capitalize"
              onClick={() => {
                console.log(category.slug);
                navigate(`/home-page/${category.slug}`);
              }}
              key={index}
            >
              {category.slug}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <div className="mt-10 lg:ms-10 lg:mt-0 lg:w-3/4">
        <Carousel autoplaySpeed={1500} autoplay>
          {banners.map((banner, index) => (
            <div key={index} className="h-[400px] bg-black lg:w-full">
              <div className="flex  items-center justify-center py-5 text-white lg:flex-row lg:px-16">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="pt-2 text-5xl font-semibold leading-[60px]">{banner.text}</div>
                  {/* <div className="flex items-center gap-4 pt-5">
                    <div>
                      <div className="text-lg">Shop now</div>
                      <hr className="border-white" />
                    </div>
                    <LiaArrowRightSolid className="text-3xl" />
                  </div> */}
                </div>
                <img className="h-auto lg:w-1/2" src={banner.image} alt="iphone" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
