const TopHeader = (props) => {
  return (
    <div className='fixed bg-primary shadow-sm pt-2 pb-1 px-3 w-full'>
      <div className='flex h-full items-center justify-center space-x-2 float-left'>
        <button className='w-3 h-3 rounded-full bg-red-500'></button>

        <button className='w-3 h-3 rounded-full bg-yellow-500'></button>

        <button className='w-3 h-3 rounded-full bg-green-500'></button>
      </div>

      <p className='float-right text-xs text-white'>
        Copyright © 2023 Rayyan.Dev
      </p>
    </div>
  );
};

export default TopHeader;
