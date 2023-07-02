import { logoLight, paymentLogo } from "../assets";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { CgTrack } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* logoIcon  */}
        <div className="flex flex-col gap-4">
          <img className="w-[96px]" src={logoLight} alt="logoLight" />
          <img className="w-[96px]" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <FaFacebookF className="hover:text-white duration-300" />
            <FaInstagram className="hover:text-white duration-300" />
            <FaTwitter className="hover:text-white duration-300" />
          </div>
        </div>
        {/* locateUs  */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="flex flex-col text-base gap-2">
            <p>Hyderabad-India</p>
            <p>Call Us: 9885123457</p>
            <p>Email: eshop@business.com</p>
          </div>
        </div>
        {/* Profile  */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="flex flex-col text-base gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <CgTrack />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BiSupport />
              </span>
              help & support
            </p>
          </div>
        </div>
        {/* Subscribe  */}
        <div className="flex flex-col justify-center items-center">
          <input
            className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
            placeholder="Email"
            type="text"
          />
          <div className="py-2">
            <button className="text-sm border text-white px-4 py-2 hover:bg-indigo-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
