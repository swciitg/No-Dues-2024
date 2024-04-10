import React from "react";
import iitglogo from "../../assets/iitglogo.png";
import { ReactComponent as OutlookIcon } from "../../assets/OutlookIcon.svg";
import { ReactComponent as GoogleIcon } from "../../assets/GoogleIcon.svg";
import "../Auth/login.css";
function LoginScreen() {
  return (
    <div className="w-full px-2 flex py-8 flex-col items-center justify-center text-sm bg-slate-200 bg-img">
      <div className="whiteout"></div>
      <div className="w-full sm:w-[400px] sm:h-[330px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.75)] my-4 bg-white z-10">
        <form className="w-full py-8 h-full flex flex-col items-center justify-start px-10">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="w-full flex justify-center">
              <div className="w-14 h-14 mb-2 mt-2">
                <img src={iitglogo} alt="" />
              </div>
            </div>
          </div>

          <div className="flex justify-center  sm:w-64 sm:h-10 py-2 px-6 sm:px-10 items-center bg-[#2164E8] rounded-sm my-3 mt-10">
            <a
              href="http://localhost:3002/auth/signin"
              className="flex items-center"
            >
              <OutlookIcon />
              <span className="text-base font-semibold text-white w-full ml-2">
                Login With Outlook
              </span>
            </a>
          </div>
          <div className="flex justify-center  sm:w-64 sm:h-10 px-6 sm:px-10 py-2 items-center border rounded-sm border-[#767A81] my-3">
            <a href="*" className="flex items-center">
              <GoogleIcon />
              <span className="text-base font-semibold text-[#1B212D] w-full ml-2">
                Login With Google
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
