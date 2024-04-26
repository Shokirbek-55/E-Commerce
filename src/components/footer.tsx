import GooglePlay from '../assets/icons/GooglePlay.svg';
import AppStore from '../assets/icons/AppStore.svg';
import IconSend from '../assets/icons/icon-send.svg';
import cIcon from '../assets/icons/c-icon.svg';
import QRcode from '../assets/icons/Qr Code.svg';

import { RiFacebookLine, RiTwitterLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';

const footerMap1 = ['Support', '111 Bijoy sarani, Dhaka, ', '  DH 1515, Bangladesh.', 'exclusive@gmail.com', '+88015-88888-9999'];
const footerMap2 = ['Quick Link', 'Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'];
const Footer: React.FC = () => {
  return (
    <div className="flex flex-col  items-center  justify-center gap-10 bg-black px-24 py-16 font-[poppins] text-white">
      <div className="flex w-full  items-start justify-between ">
        <div className="flex flex-col  gap-6 ">
          <div className="pb-5 text-2xl   font-medium ">Exclusive</div>
          <div className='font-["Poppins"] text-xl font-medium '>Subscribe</div>
          <p className='font-["Poppins"] text-base font-normal  '>Get 10% off your first order</p>
          <div className="flex  items-center gap-8  border  px-3">
            <input className=" w-[130px] border-none bg-transparent font-['Poppins'] text-base    opacity-40 outline-none" placeholder="Enter your email" />

            <button className="cursor-pointer border-none bg-transparent ">
              <img src={IconSend} alt="" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {footerMap1.map((elem, idx) => (
            <div key={elem} className={idx === 0 ? 'pb-5 text-2xl font-medium' : 'text-lg'}>
              {elem}
            </div>
          ))}
        </div>
        <div className="mb-6 flex list-none flex-col gap-5">
          <div className="pb-5 text-2xl font-medium">Account</div>
          <div className="text-lg font-medium">
            <a className="text-white no-underline" href="/account">
              My Account
            </a>
          </div>
          <div className="text-lg font-medium">
            <a className="text-white no-underline" href="/signup">
              Login / Register
            </a>
          </div>
          <div className="text-lg font-medium">
            <a className="text-white no-underline" href="/cart">
              Cart
            </a>
          </div>
          <div className="text-lg font-medium">
            <a className="text-white no-underline" href="/wishlist">
              Wishlist
            </a>
          </div>
          <div className="text-lg font-medium">
            <a className="text-white no-underline" href="/home-page/about">
              Shop
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {footerMap2.map((elem, idx) => (
            <div key={elem} className={idx === 0 ? 'pb-5 text-2xl font-medium' : 'text-lg'}>
              <a className="text-white no-underline" href="/home-page/contact">
                {elem}
              </a>
            </div>
          ))}
        </div>
        <div className="flex  flex-col  gap-7 ">
          <div className=" text-2xl font-medium   ">Download App</div>
          <div className="flex flex-col gap-2">
            <h2 className="font-['Poppins'] text-xs font-medium   opacity-70">Save $3 with App New User Only</h2>
            <div className="flex  items-center  justify-center gap-1 ">
              <img className="h-[76px] w-[76px] border-2 border-solid border-white" src={QRcode} alt="scaner" />
              <div className="flex flex-col gap-1">
                <img alt="GooglePlay" src={GooglePlay} />
                <img alt="AppStore" src={AppStore} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 text-2xl">
            <RiFacebookLine />
            <RiTwitterLine />
            <RiInstagramLine />
            <RiLinkedinLine />
          </div>
        </div>
      </div>
      <div className="mt-[60px] flex gap-1 ">
        <img src={cIcon} alt="" />

        <span>Copyright Rimel 2024. All right reserved</span>
      </div>
    </div>
  );
};

export default Footer;
