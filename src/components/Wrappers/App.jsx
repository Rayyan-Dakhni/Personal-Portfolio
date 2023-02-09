import { useState } from "react";
import Pfp from "../../assets/images/pfp.jpg";
import { useEffect } from "react";
import Accordion from "../UI/accordion";
import IconButton from "../UI/iconButton";

import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import Sidebar from "../navigation/sidebar";
import Navbar from "../navigation/navbar";
import Terminal from "../terminal";
import TopHeader from "../navigation/topHeader";

const AppWrapper = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let intro =
      "Over 2.5 years of experience working as a software engineer specialising in the MERN stack. Turned ideas and visions into interactive and appealing websites. Have a proven record of delivering the best even when it comes to complex web applications. Handled all phases of the software development lifecycle, from client interaction to deployment and testing.";

    // const tempData = [];
    // for (let i = 0; i < parseInt(intro.length / 100) + 2; i++) {
    //   const startIndex = i * 100;
    //   const part = intro.slice(startIndex, startIndex + 100);
    //   tempData.push(part);
    // }

    const tempData = [
      "Over 2.5 years of experience working as a software engineer specialising in the MERN stack. Turned ",
      "ideas and visions into engaging and interactive websites. Have a proven record of delivering the ",
      "best even when it comes to complex web applications. Handled all phases of the software development ",
      "lifecycle, from client interaction to deployment and testing.",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];

    setTableData(tempData);
  }, []);

  return (
    <div className='w-screen h-screen bg-primary overflow-hidden'>
      <TopHeader />

      <div className='w-full h-full flex pt-7'>
        <Sidebar />

        <div className='col-span-3 w-full h-full bg-primary relative'>
          <Navbar />

          <table className='table-auto text-sm mt-2'>
            <tbody>
              {tableData.map((td, index) => {
                return (
                  <tr key={index + "-td"}>
                    <td className='w-min-content text-right text-gray-600 px-2'>
                      {index + 1}
                    </td>
                    <td className='px-2 text-lime-200 tracking-wide font-mono'>
                      {td}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default AppWrapper;
