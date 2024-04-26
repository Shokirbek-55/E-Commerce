import right from './img/right.svg';
import services from './img/Services.svg';
import services1 from './img/Services1.svg';
import services2 from './img/Services2.svg';
import services3 from './img/Services3.svg';

import { TbHeadset } from 'react-icons/tb';
import { LuCar } from 'react-icons/lu';
import { LuBadgeCheck } from 'react-icons/lu';

import img1 from './img/image 46.png';
import img2 from './img/image 47.png';
import img3 from './img/image 51.png';

import insta from './img/icon-instagram.svg';
import linkedin from './img/Icon-Linkedin.svg';
import tw from './img/Group.svg';
import one from './img/1.svg';
import two from './img/2.svg';
import twre from './img/3.svg';
import { Badge } from 'components/badge';
// import { Footer, Navbar } from 'components';

const About: React.FC = () => {
  return (
    <>
      <main className=" mb-[60px] mt-[40px]  flex flex-col gap-[20px]">
        <section>
          <div className="ml-[145px] flex gap-2 pt-[34px] text-[24px]">
            <a className="font-Regular font-[poppins]  text-[#cacad4] no-underline hover:text-current" href="/home">
              Home
            </a>
            <div className="pt-[5px]">/</div>
            <a className="font-Regular ml-2 font-[poppins] text-[#cacad4] text-current no-underline" href="./apps">
              About
            </a>
          </div>
          <div className="flex items-center justify-between ">
            <div id="left" className="ml-[132px]">
              <h1 className="m-0 mb-7 font-[Inter] text-[54px] font-semibold leading-[64px]">Our Story</h1>
              <h3 className="mb-5 w-[520px] font-[Poppins] text-[18px] font-[400] leading-6">
                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of
                tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.{' '}
              </h3>
              <h3 className="w-[520px] font-[Poppins] text-[18px] font-[400] leading-6 ">
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from
                consumer.
              </h3>
            </div>
            <div id="right">
              <img className="w-[600px] " src={right} alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="ml-[90px] mt-[90px] flex gap-[6rem]">
            <div className="border-[#000000D4)] flex h-[230px] w-[270px] flex-col items-center rounded border hover:bg-[#DB4444] hover:text-white ">
              <img className="mt-[15px] " src={services} alt="" />
              <span className="mt-5 font-[Inter] text-[32px] font-semibold leading-8 tracking-[4%] ">10.5k</span>
              <h2 className="mt-2 font-[Poppins] text-[16px] font-[400] leading-4">Sailers active our site</h2>
            </div>

            <div className=" border-[#000000D4)] flex h-[230px] w-[270px] flex-col items-center rounded border hover:bg-[#DB4444] hover:text-white">
              <img className="mt-[15px] hover:fill-black" src={services1} alt="" />
              <span className="mt-5 font-[Inter] text-[32px] font-semibold leading-8">33k</span>
              <h2 className="mt-2 font-[Poppins] text-[16px] font-[400] leading-4">Mopnthly Produduct Sale</h2>
            </div>

            <div className=" border-[#000000D4)] flex h-[230px] w-[270px] flex-col items-center rounded border hover:bg-[#DB4444] hover:text-white">
              <img className="mt-[15px]" src={services2} alt="" />
              <span className="mt-5 font-[Inter] text-[32px] font-semibold leading-8">45.5k</span>
              <h2 className="mt-2 font-[Poppins] text-[16px] font-[400px] leading-4">Customer active in our site</h2>
            </div>

            <div className=" border-[#000000D4)] flex h-[230px] w-[270px] flex-col items-center rounded border hover:bg-[#DB4444] hover:text-white">
              <img className="mt-[15px]" src={services3} alt="" />
              <span className="mt-5 font-[Inter] text-[32px] font-semibold leading-8">25k</span>
              <h2 className="mt-2 font-[Poppins] text-[16px] font-[400] leading-4">Anual gross sale in our site</h2>
            </div>
          </div>
        </section>

        <section>
          <div className="ml-[132px] mt-[90px] flex gap-[4rem]">
            <div className=" flex  w-[370px] flex-col items-center ">
              <div className="grid w-[100%] place-items-center bg-[#F5F5F5]">
                <img className="mt-[20px] " src={img1} alt="" />
              </div>
              <div className="flex w-[100%] flex-col">
                <span className="mt-5 flex-none font-[Inter]  text-[32px] font-[500px] leading-8  ">Tom Cruise</span>
                <h2 className="my-1 font-[Poppins] text-[16px] font-[400] leading-4">Founder & Chairman</h2>
                <div className="mt-3 flex gap-2">
                  <a target="_blank" href="https://twitter.com/home">
                    <img src={tw} alt="" />
                  </a>
                  <a target="_blank" href="https://www.instagram.com/">
                    <img src={insta} alt="" />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/feed/">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className=" flex  w-[370px] flex-col items-center ">
              <div className="grid w-[100%] place-items-center bg-[#F5F5F5]">
                <img className="mt-[20px] " src={img3} alt="" />
              </div>
              <div className="flex w-[100%] flex-col">
                <span className="mt-3 flex-none font-[Inter] text-[32px] font-[500px] leading-8  ">Emma Watson</span>
                <h2 className="my-1 font-[Poppins] text-[16px] font-[400] leading-4">Managing Director</h2>
                <div className="mt-3 flex gap-2">
                  <a href="https://twitter.com/home">
                    <img src={tw} alt="" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <img src={insta} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/feed/">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className=" flex  w-[370px] flex-col items-center ">
              <div className="grid w-[100%] place-items-center bg-[#F5F5F5]">
                <img className="mt-[20px] " src={img2} alt="" />
              </div>
              <div className="flex w-[100%] flex-col">
                <span className="mt-5 flex-none font-[Inter] text-[32px] font-[500px] leading-8  ">Will Smith</span>
                <h2 className="my-1 font-[Poppins] text-[16px] font-[400] leading-4">Product Designer</h2>
                <div className="mt-3 flex gap-2">
                  <a href="https://twitter.com/home">
                    <img src={tw} alt="" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <img src={insta} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/feed/">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex items-center justify-center font-[poppins] ">
          <div className=" flex flex-wrap justify-between gap-[11rem] py-28 font-[poppins]">
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
        </div>
      </main>
    </>
  );
};

export default About;
