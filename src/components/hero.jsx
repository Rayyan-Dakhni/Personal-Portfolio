import ProfilePic from "../assets/images/Subject.png";
import Js from "../assets/images/js.png";
import ReactLogo from "../assets/images/react.png";
import Mongo from "../assets/images/mongo.png";
import Node from "../assets/images/nodejs.png";

const Hero = () => {
  return (
    <section className='inline-flex items-center w-full'>
      <div className='w-full p-10 px-14'>
        <div className='flex items-center w-full space-x-10'>
          <h1 className='text-7xl font-semibold font-serif'>Hi! I Am</h1>

          <div className='border rounded-3xl p-3 px-7 text-gray-100 font-semibold bg-gradient-to-r from-red-700 to-red-600'>
            Software Engineer
          </div>
        </div>

        <h2 className='text-7xl font-bold font-serif'>Rayyan Dakhni</h2>

        <br />

        {/* <div className='grid grid-cols-4 pr-10'>
          <img
            src={ReactLogo}
            className='w-20 h-20 mx-auto rounded-full drop-shadow-xl'
          />

          <img
            src={Mongo}
            className='w-20 h-20 mx-auto rounded-full drop-shadow-xl'
          />

          <img
            src={Node}
            className='w-20 h-20 mx-auto rounded-full drop-shadow-xl'
          />

          <img
            src={Js}
            className='w-20 h-20 mx-auto rounded-full drop-shadow-xl'
          />
        </div> */}
      </div>
      <div className='relative w-full h-full flex justify-center items-center'>
        <img
          src={ProfilePic}
          className='w-2/3 h-auto rounded-xl drop-shadow-xl'
        />
      </div>
    </section>
  );
};

export default Hero;
