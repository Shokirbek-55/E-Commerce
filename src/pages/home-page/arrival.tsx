import * as React from 'react';
import ps4 from './images/ps.png';
import woman from './images/woman.png';
import three from './images/three.png';
import gucci from './images/gucci.png';
import { Badge } from 'components/badge';

const Arrival: React.FC = () => {
  return (
    <div className=" pt-10 font-[Poppins]">
      <div className="ml-5 flex items-center gap-2 pb-5">
        <div className="h-10 w-5 rounded-md bg-red-500"></div>
        <div className="text-md font-bold text-red-500 ">Featured</div>
      </div>
      <div className="ml-5 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 text-4xl font-semibold md:mb-0">New Arrival</div>
      </div>
      <div className="mt-[60px] flex  flex-wrap justify-center gap-5">
        <div className="relative h-[614px] w-[605px] rounded-[4px] bg-black">
          <img className="ml-8  mt-[103px]" src={ps4} alt="" />
          <h1 className="absolute left-[32px] top-[432px] font-normal text-white">PlayStation 5</h1>
          <h3 className="absolute left-[32px] top-[482px] font-extralight text-white">
            Black and White version of the PS5 <br /> coming out on sale.
          </h3>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="relative h-[299px] w-[620px] rounded-[4px] bg-[#0D0D0D]">
            <img className="ml-[185px] mt-[14px]" src={woman} alt="" />
            <h1 className="absolute left-6 top-[124px] font-normal text-white ">Women’s Collections</h1>
            <h3 className="absolute left-6 top-[176px] font-extralight text-white">
              Featured woman collections that <br /> give you another vibe.
            </h3>
          </div>
          <div className="relative flex items-center gap-5">
            <div className=" h-[295px] w-[300px] rounded-[4px] bg-stone-800">
              <img className="absolute left-[55px] top-[44px]" src={three} alt="" />
              <h1 className="absolute left-6 top-[160px] font-normal text-white">Speakers</h1>
              <h3 className="absolute left-6 top-[207px] font-extralight text-white ">Amazon wireless speakers</h3>
            </div>
            <div className="relative h-[295px] w-[300px] rounded-[4px] bg-stone-800">
              <img className="absolute left-[55px] top-[44px]" src={gucci} alt="" />
              <h1 className="absolute left-6 top-[160px] font-normal text-white">Perfume</h1>
              <h3 className="absolute left-6 top-[207px] font-extralight text-white ">GUCCI INTENSE OUD EDP</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <Badge /> */}
    </div>
  );
};

export default Arrival;
