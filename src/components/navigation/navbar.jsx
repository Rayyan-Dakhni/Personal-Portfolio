import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className='w-full bg-secondary text-sm flex'>
      <button className='w-auto flex p-2.5 text-gray-100 border border-[#282B3C]'>
        <span className='mt-0.5 mr-1'>
          <AiOutlineHome />
        </span>{" "}
        Home{" "}
        <span className='mt-1 ml-3'>
          <AiOutlineClose />
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
