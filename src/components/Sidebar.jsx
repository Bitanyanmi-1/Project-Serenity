import { Link } from "react-router-dom";
import serenityLogo from "../assets/serenity-logo-white.svg";
import home from "../assets/home.png";
import course from "../assets/online-learning.png";
import assignment from "../assets/paper.png";
import timetable from "../assets/schedule.png";
import forum from "../assets/chat.png";
import settings from "../assets/settings.png";
import Navbar from "./Navbar";

function Sidebar() {
  return (
    <div className="drawer mt-4">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="grid grid-cols-12 justify-center items-center pb-8">
          <label
            htmlFor="my-drawer"
            className="btn bg-white drawer-button w-16"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="18" viewBox="0 0 49 29" fill="none">
              <line y1="1.5" x2="49" y2="1.5" stroke="black" strokeWidth="3" />
              <line y1="13.5" x2="49" y2="13.5" stroke="black" strokeWidth="3" />
              <line y1="27.5" x2="38" y2="27.5" stroke="black" strokeWidth="3" />
            </svg>
          </label>
          <Navbar />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu text-base-content min-h-full w-80 p-4 bg-[#00173d85] rounded-r-2xl backdrop-blur-xl border border-[#00173d]">
          <div className="flex flex-col gap-3 px-3 ">
            <div className="flex flex-row justify-between items-center">
              <img className="w-20" src={serenityLogo} alt="Team Serenity Logo" />
              <label htmlFor="my-drawer" className="p-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="18" viewBox="0 0 49 29" fill="none">
                  <line y1="1.5" x2="49" y2="1.5" stroke="white" strokeWidth="3" />
                  <line y1="13.5" x2="49" y2="13.5" stroke="white" strokeWidth="3" />
                  <line y1="27.5" x2="38" y2="27.5" stroke="white" strokeWidth="3" />
                </svg>
              </label>
            </div>

            <div className="flex flex-row p-4 gap-5 border rounded-xl my-3 items-center">
              <img
                className="rounded-full w-12"
                src="https://static.vecteezy.com/system/resources/previews/039/334/804/non_2x/ai-generated-indian-female-student-free-photo.jpg"
                alt="User Image"
              />
              <div className="flex flex-col gap-1 text-white">
                <h4>Welcome, User Name</h4>
                <p>User ID</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <li className="rounded-2xl bg-white p-2 flex flex-row items-center justify-start">
                <img className="w-14" src={home} alt="Home" />
                <Link to="/">Home</Link>
              </li>
              <li className="rounded-2xl bg-white p-2 flex flex-row items-center justify-start">
                <img className="w-14" src={course} alt="Courses" />
                <Link to="/courses">My Courses</Link>
              </li>
              <li className="rounded-2xl bg-white p-2 flex flex-row items-center justify-start">
                <img className="w-14" src={assignment} alt="Assignments" />
                <Link to="/assignments">Assignments</Link>
              </li>
              <li className="rounded-2xl bg-white p-2 flex flex-row items-center justify-start">
                <img className="w-14" src={timetable} alt="Timetable" />
                <Link to="/timetable">Time Table</Link>
              </li>
              <li className="rounded-2xl bg-white p-2 flex flex-row items-center justify-start">
                <img className="w-14" src={forum} alt="Forum" />
                <Link to="/forum">Forum</Link>
              </li>
              <li className="rounded-2xl bg-white p-2 flex flex-row items-center justify-start">
                <img className="w-14" src={settings} alt="Settings" />
                <Link to="/settings">Settings</Link>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
