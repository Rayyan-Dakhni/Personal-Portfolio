const Terminal = (props) => {
  return (
    <div className='absolute w-full h-40 bg-primary border border-[#282B3C] left-0 bottom-0 text-gray-200'>
      <div className='grid grid-cols-2 px-3'>
        <div className='text-left'>
          <button className='uppercase w-auto text-gray-50 text-xs border-b border-indigo-500 p-2'>
            Contact Information
          </button>
        </div>

        <div className='text-right text-xs p-2'>
          Rayyan Dakhni - Software Engineer
        </div>
      </div>

      <div className='text-sm font-mono px-3 text-gray-300 mt-2'>
        <p>
          Email:{" "}
          <a
            href='mailto:rayyand62@gmail.com'
            className='text-blue-400 underline'
          >
            rayyand62@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a
            href='mailto:rayyand62@gmail.com'
            className='text-blue-400 underline'
          >
            +92-3312221445
          </a>
        </p>
        <p>
          Linkedin:{" "}
          <a
            href='https://linkedin.com/in/rayyan-dakhni'
            className='text-blue-400 underline'
            target='_blank'
          >
            https://linkedin.com/in/rayyan-dakhni
          </a>
        </p>
        <p>
          Github:{" "}
          <a
            href='https://github.com/Rayyan-Dakhni'
            className='text-blue-400 underline'
            target='_blank'
          >
            https://github.com/Rayyan-Dakhni
          </a>
        </p>
      </div>
    </div>
  );
};

export default Terminal;
