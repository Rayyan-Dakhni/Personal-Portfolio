import { AiOutlineRight } from "react-icons/ai";

const Accordion = (props) => {
  return (
    <>
      <button
        onClick={(e) => {
          const accordion = document.getElementById(props.id);

          if (accordion.classList.contains("max-h-0")) {
            accordion.classList.remove("max-h-0");
            accordion.classList.add("max-h-full");
            e.target.firstChild.classList.add("rotate-90");
          } else {
            accordion.classList.remove("max-h-full");
            accordion.classList.add("max-h-0");
            e.target.firstChild.classList.remove("rotate-90");
          }
        }}
        className='w-full flex p-1 uppercase text-xs font-semibold bg-primary text-left text-gray-100 transition-all hover:bg-gray-800'
      >
        <span
          className={`mt-0.5 mr-1 ${
            props.icon ? "" : "transition-all"
          } transform`}
        >
          <AiOutlineRight />
        </span>

        {props.icon ?? <span>{props.icon}</span>}

        {props.title}
      </button>

      <div
        id={props.id}
        className='w-full px-3 accordion duration-300 overflow-hidden max-h-0'
      >
        {props.children}
      </div>
    </>
  );
};

export default Accordion;
