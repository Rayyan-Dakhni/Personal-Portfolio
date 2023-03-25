import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";

const Navbar = ({ pages, removePage, setActivePage }) => {
  return (
    <nav className='w-full bg-secondary text-sm flex'>
      {pages.length === 0 ? (
        <button className='w-auto flex p-2.5 text-gray-100 border border-[#282B3C] opacity-0'>
          <span className='mt-0.5 mr-1'>
            <AiOutlineHome />
          </span>{" "}
          Home{" "}
          <span className='mt-1 ml-3'>
            <AiOutlineClose />
          </span>
        </button>
      ) : (
        <></>
      )}

      {pages.map((pg) => {
        return (
          <button
            onClick={(e) => {
              setActivePage(pg);
            }}
            key={pg.title.replace(" ", "")}
            className='w-auto flex p-2.5 capitalize font-light text-gray-100 border border-[#282B3C]'
          >
            <span className='mt-0.5 mr-1'>
              {pg.icon ? pg.icon : <AiOutlineHome />}
            </span>
            {pg.title}
            <span
              onClick={(e) => {
                removePage(pg);
              }}
              className='mt-1 ml-5'
            >
              <AiOutlineClose />
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
