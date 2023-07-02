import { cartImg, basketImg, logoDark } from "../assets/index";

const Navbar = () => {
  return (
    <div className="w-full h-[98px] bg-white border-b-[1px] border-gray-200 font-titleFont">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between">
        <div>
          <img className="w-28" src={logoDark} alt="logoDark" />
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base font-bold hover:text-indigo-400 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base font-bold hover:text-indigo-400 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base font-bold hover:text-indigo-400 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base font-bold hover:text-indigo-400 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <img className="w-8" src={cartImg} alt="cartImg" />
            <span className="absolute w-6 top-2 left-1 text-sm flex items-center justify-center font-semibold">
              0
            </span>
          </div>
          <img className="w-8 h-8" src={basketImg} alt="basketImg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;