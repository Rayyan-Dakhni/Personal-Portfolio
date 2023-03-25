import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../navigation/sidebar";
import Navbar from "../navigation/navbar";
import Terminal from "../terminal";
import TopHeader from "../navigation/topHeader";

const AppWrapper = () => {
  const [tableData, setTableData] = useState([]);

  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState();

  useEffect(() => {
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

  const addPage = (project) => {
    let found = false;

    pages.forEach((pg) => {
      if (pg.title === project.title) {
        found = true;
        return;
      }
    });

    if (!found) {
      setPages([...pages, project]);
    }
  };

  const removePage = (project) => {
    setPages([...pages.filter((obj) => obj.title !== project.title)]);
  };

  const formatParagraph = (paragraph) => {
    const words = paragraph.split(" ");

    const limit = 100;
    let line = "";
    const tempData = [];

    words.forEach((wrd) => {
      if (line.length + wrd.length < limit) {
        line += wrd + " ";
      } else {
        tempData.push(line);
        line = "";
      }
    });

    if (tempData.length < 20) {
      const count = 20 - tempData.length;

      for (let i = 0; i < count; i++) {
        tempData.push("");
      }
    }

    return tempData;
  };

  useEffect(() => {
    if (activePage) {
      const description = activePage.description;
      const tempData = formatParagraph(description);

      setTableData(tempData);
    } else {
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
    }
  }, [activePage]);

  useEffect(() => {
    setActivePage(pages[pages.length - 1]);
  }, [pages]);

  return (
    <div className='w-screen h-screen bg-primary overflow-hidden'>
      <TopHeader />

      <div className='w-full h-full flex pt-7'>
        <Sidebar addPage={addPage} />

        <div className='col-span-3 w-full h-full bg-primary relative'>
          <Navbar
            setActivePage={setActivePage}
            removePage={removePage}
            pages={pages}
          />

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
