import { Button } from 'antd';
import * as React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from './card';
import { IEntity } from 'modules/home/types';

interface FlashCardProps {
  productItems: IEntity.Product[];
}

const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <Button className="absolute bottom-[50%] right-0">
        <FaArrowRight />
      </Button>
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <Button className="light-0 absolute bottom-[50%] z-10">
        <FaArrowLeft />
      </Button>
    </div>
  );
};
const FlashCard: React.FC<FlashCardProps> = ({ productItems }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };

  return (
    <div className="relative">
      <Slider {...settings} className="slider-container m-10  w-full ">
        {productItems.map((productItem: IEntity.Product) => (
          <Card {...productItem} key={productItem.id} />
        ))}
      </Slider>
    </div>
  );
};

export default FlashCard;
