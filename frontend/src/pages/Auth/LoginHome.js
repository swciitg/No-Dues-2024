import React from "react";
import { useState } from "react";
import iitglogo from "../../assets/iitglogo.png";
import { Link } from "react-router-dom";
import "./login.css";

const options = {
  student: {
    key: "student",
    value: "Student",
    route: "/auth/signin",
  },
  recruiter: {
    key: "recruiter",
    value: "Recruiter",
    route: "/auth/login/recruiter",
  },
};
function LoginHome() {
  const [selectedOption, setSelectedOption] = useState(options.student.key);
  const onValueChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-full px-2 relative min-h-screen flex flex-col items-center justify-center text-sm bg-slate-200 bg-img">
      <div className="whiteout"></div>
      <div className="w-full sm:w-[400px] sm:h-[330px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.75)] bg-white bg-form opacity-85 z-10">
        <form className="py-4 w-full h-full flex flex-col items-start justify-start px-10">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="w-full flex justify-center">
              <div className="w-14 h-14 mb-2 mt-2">
                <img src={iitglogo} alt="" />
              </div>
            </div>
            <div className="text-2xl font-semibold mt-2">Select a role</div>
          </div>

          <div className="flex flex-col items-start justify-start w-100 my-10">
            <div className="flex items-center mb-4 w-100">
              <input
                onChange={onValueChange}
                checked={options.student.key === selectedOption}
                id="default-radio-1"
                type="radio"
                value={options.student.key}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 "
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 font-medium text-black-900 dark:text-black-300 text-lg"
              >
                {options.student.value}
              </label>
            </div>
            <div className="flex items-center w-100">
              <input
                onChange={onValueChange}
                checked={options.recruiter.key === selectedOption}
                id="default-radio-2"
                type="radio"
                value={options.recruiter.key}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 font-medium text-black-900 dark:text-black-300 text-lg"
              >
                {options.recruiter.value}
              </label>
            </div>
          </div>

          <div className="flex justify-end items-center w-full">
            <Link
              className="bg-blue-700 border rounded-sm px-5 py-1 text-white"
              to={options[selectedOption].route}
            >
              Continue
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginHome;
