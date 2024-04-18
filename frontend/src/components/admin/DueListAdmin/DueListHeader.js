import React from "react";

const DueListHeader = () => {
  return (
    <div className="">
      <div className="w-full h-[5rem] flex px-10 py-8 bg-white shadow justify-between items-center ">
        <div className="justify-start items-center gap-3 flex">
          <div className="w-[47.61px] h-12 relative">
            <div className="w-[47.60px] h-12 left-[0.01px] top-[-0px] absolute">
              <img src="IIT_Guwahati_Logo 1.png" alt="" />
            </div>
          </div>
          <div className="text-gray-800 text-[32px] font-semibold font-['Lato'] leading-[37.33px]">
            No Dues Portal
          </div>
        </div>
        <div className="justify-start items-center gap-1 flex">
          <div className="w-7 h-7 relative" />
          <div className="justify-start items-center gap-2 flex">
            <div className="text-blue-600 text-xl font-normal font-['Lato']">
              Kane Mona
            </div>
          </div>
          <div className="w-7 h-7 relative" />
        </div>
      </div>
    </div>
  );
};

export default DueListHeader;
