import { useRef, useState } from "react";

const Terminal = (props) => {
  const nameInput = useRef();
  const introInput = useRef();

  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");

  const HandleTerminalInput = (e) => {
    e.target.style.width = (e.target.value.length + 1) * 8.7 + "px";
  };

  const onNameFormSubmit = (e) => {
    e.preventDefault();

    e.target.getElementsByTagName("span")[0].classList.add("hidden");

    const nextLine = document.getElementById("def-intro");
    nextLine.parentElement.classList.remove("hidden");
  };

  return (
    <div className='absolute w-full h-48 bg-primary border border-[#282B3C] left-0 bottom-0 text-gray-200'>
      <div className='grid grid-cols-2 px-3'>
        <div className='text-left'>
          <button className='uppercase w-auto text-gray-50 text-xs border-b border-indigo-500 p-2'>
            Terminal
          </button>
        </div>

        <div className='text-right text-xs p-2'>
          Rayyan Dakhni - Software Engineer
        </div>
      </div>

      <div className='text-sm font-mono px-3 text-gray-300 mt-2'>
        <form onSubmit={onNameFormSubmit}>
          <label
            htmlFor='name-input'
            className='w-full relative cursor-pointer group'
          >
            Hi, What's your name?
            <input
              id='name-input'
              ref={nameInput}
              type='text'
              className='w-[10px] ml-0.5 caret-transparent bg-inherit terminal-input cursor-pointe outline-none'
              onChange={(e) => {
                HandleTerminalInput(e);
                setName(e.target.value);
              }}
            />
            <span className='absolute right-0 bottom-0 w-2 h-full bg-gray-50'></span>
          </label>
        </form>

        <form onSubmit={() => {}}>
          <label
            htmlFor='def-intro'
            className='w-full relative cursor-pointer group transition-all hidden'
          >
            <span className='capitalize'>{name}</span>, would you like to
            continue with the default introduction?
            <input
              id='def-intro'
              ref={introInput}
              type='text'
              className='w-[10px] ml-0.5 caret-transparent bg-inherit terminal-input cursor-pointe outline-none'
              onChange={(e) => {
                HandleTerminalInput(e);
                setIntro(e.target.value);
              }}
            />
            <span className='absolute right-0 bottom-0 w-2 h-full bg-gray-50 caret-custom visible'></span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Terminal;
