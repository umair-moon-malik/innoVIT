import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

const Study = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/subjects");
        setSubjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchSubjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="study-main-container flex overflow-x-hidden max-w-[100vw] font-sora">
      <div className="study-sidebar w-[20vw] min-w-[20rem] max-w-[20vw] h-[86vh] bg-secondary rounded-[20px] ml-2 mr-2 mb-2">
        <div className="study-sidebar-heading-wrapper m-2 overflow-x-hidden flex flex-col items-center ">
          <div className="w-full">
            <h2 className="text-xl tracking-wider ml-1">Available Courses</h2>
          </div>
          <input
            type="text"
            className="w-full mt-2 p-[5px] rounded-md bg-[#1a1c2b] focus:outline-none mb-[1.2rem]"
            placeholder="Search Courses by Course Code"
          />
          <span className="min-w-[90%] border-b-[1px] border-gray-600 "></span>
        </div>

        <ul className="flex flex-col">
          {subjects.map((subject) => (
            <li
              key={subject._id}
              className="w-fill h-[40px] bg-secondary hover:bg-gray-800 flex items-center ml-2 mr-2 mt-2 rounded-lg"
            >
              <svg
                className="text-textColor group-hover:text-primary"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="M490-480 301-669l83-83 272 272-272 272-83-83 189-189Z" />
              </svg>
              <Link
                to={`/study/${subject.mainTitle}`}
                className="w-full h-full flex items-center px-2 mr-2"
              >
                {subject.mainTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
          <Outlet />
    </div>
  );
};

export default Study;
