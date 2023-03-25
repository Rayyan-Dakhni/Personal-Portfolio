import { AiFillFolder } from "react-icons/ai";
import IconButton from "../UI/iconButton";
import Accordion from "../UI/accordion";
import {
  FaBook,
  FaGlobe,
  FaPhoneAlt,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaReact,
} from "react-icons/fa";

const Sidebar = ({ addPage }) => {
  const projects = [
    {
      title: "Marketing Tool",
      description:
        "We built a product containing 4 main modules namely executive insights, customer segmentation, customer 360, and campaign manager. The Executive Insights is a fully customisable, drag and drop dashboard aimed towards the C level executives of an enterprise and does tend to provide them with all the necessary key performance indicators which can also be created and replaced by them. The Customer Segmentation module on the other hand allows you to create or filter out segments of customers based on certain parameters that can be further used for targeted marketing. Customer 360, on the other hand is full overview of one specific customer including predictions based on their journey with the enterprise along with recommended products that this customer should be marketed for.",
      skills: [],
      icon: <FaReact className='text-blue-400' />,
    },
    {
      title: "Smooth Operator",
      description: "",
      skills: [],
    },
    {
      title: "Capital Adequacy Ratio",
      description: "",
      skills: [],
    },
    {
      title: "U Secure Pro",
      description: "",
      skills: [],
    },
    {
      title: "LMS",
      description: "",
      skills: [],
    },
    {
      title: "Care Inc Sarl",
      description: "",
      skills: [],
    },
    {
      title: "Gift Assistant",
      description: "",
      skills: [],
    },
    {
      title: "Farishta Foundation UK",
      description: "",
      skills: [],
    },
    {
      title: "Moiz Gallery",
      description: "",
      skills: [],
    },
    {
      title: "Quiz Module",
      description: "",
      skills: [],
    },
    {
      title: "Bryson Sports",
      description: "",
      skills: [],
    },
    {
      title: "Help Code",
      description: "",
      skills: [],
    },
    {
      title: "HDI Accounts",
      description: "",
      skills: [],
    },
  ];

  return (
    <div className='h-full w-72 drop-shadow-md overflow-auto flex-none flex bg-primary border border-[#282B3C]'>
      <div className='w-16 h-full'>
        <IconButton
          icon={<FaPhoneAlt className='mx-auto' />}
          title='Phone'
          link='tel:+923312221445'
        />

        <IconButton
          icon={<FaMailBulk className='mx-auto' />}
          title='Email'
          link='mailto:rayyand62@gmail.com'
        />

        <IconButton
          icon={<FaGlobe className='mx-auto' />}
          title='Website'
          link='http://localhost:3000'
        />

        <IconButton
          icon={<FaLinkedin className='mx-auto' />}
          title='LinkedIn'
          link='https://linkedin.com/in/rayyan-dakhni/'
        />

        <IconButton
          icon={<FaGithub className='mx-auto' />}
          title='Github'
          link='https://github.com/rayyan-dakhni/'
        />
      </div>

      <div className='w-full h-full'>
        <p className='w-full px-5 p-1 text-white uppercase text-xs mt-3'>
          Explorer
        </p>

        <Accordion id='projects-accordion' title='Projects'>
          {projects.map((pr, index) => {
            return (
              <Accordion
                key={pr.title.replace(" ", "") + "-" + index}
                id={`project-${index}`}
                title={pr.title}
                icon={<AiFillFolder className='text-base text-blue-300 mr-1' />}
              >
                <button
                  onClick={(e) => {
                    addPage(pr);
                  }}
                  className='w-full flex text-sm p-1 ml-1 bg-primary text-left text-gray-100'
                >
                  <span className='mr-1 mt-0.5 text-base text-yellow-400'>
                    <FaBook />
                  </span>
                  Information
                </button>

                <button className='w-full flex text-sm p-1 ml-1 bg-primary text-left text-gray-100'>
                  <span className='mr-1 mt-0.5 text-base text-violet-400'>
                    <FaGlobe />
                  </span>
                  See Live
                </button>
              </Accordion>
            );
          })}
        </Accordion>

        <Accordion id='products-accordion' title='Products'></Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
