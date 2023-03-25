const IconButton = (props) => {
  return (
    <a href={props.link} target='_blank' rel='noreferrer'>
      <button
        className={`relative group w-full p-2 py-4 text-2xl text-gray-50 text-center border-l-2 border-transparent hover:border-gray-50`}
      >
        {props.icon}

        <div className='absolute rounded-md bg-violet-500 z-20 text-xs left-full top-3 p-1 px-4 transition-all duration-500 transform scale-75 opacity-0 invisible group-hover:visible group-hover:scale-100 group-hover:opacity-100'>
          {props.title}
        </div>
      </button>
    </a>
  );
};

export default IconButton;
