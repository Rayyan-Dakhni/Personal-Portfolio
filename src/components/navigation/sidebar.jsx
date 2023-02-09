import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillFolder,
  AiOutlineRight,
} from "react-icons/ai";
import IconButton from "../UI/iconButton";
import Accordion from "../UI/accordion";

const Sidebar = (props) => {
  const projects = [
    {
      title: "Marketing Tool",
      description: "",
      skills: [],
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
    <div className='h-full w-72 drop-shadow-md overflow-scroll flex-none flex bg-primary border border-[#282B3C]'>
      <div className='w-16 h-full'>
        <IconButton
          icon={<AiOutlineMail className='mx-auto' />}
          active={true}
        />

        <IconButton
          icon={<AiOutlineLinkedin className='mx-auto' />}
          active={false}
        />

        <IconButton
          icon={<AiOutlineFacebook className='mx-auto' />}
          active={false}
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
                <button className='w-full flex uppercase text-xs font-semibold p-1 bg-primary text-left text-gray-100'>
                  <span className='mr-1 text-base text-blue-300'>
                    <AiFillFolder />
                  </span>
                  {pr.title}
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
