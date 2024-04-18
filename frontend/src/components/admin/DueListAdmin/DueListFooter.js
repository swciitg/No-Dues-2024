import React from "react";

const DueListFooter = () => {
  return (
    <div className="w-full flex">
      <div className="w-full h-[76px] p-4 bg-white justify-center items-center flex">
        {/* <div className="w-[93px] h-11 p-2.5" /> */}
        <div className="w-[644px] p-2.5 justify-center items-center gap-2.5 flex">
          <div className="w-[624px] text-zinc-600 text-xl font-normal font-['Lato'] leading-tight">
            Clear all dues to download certificate
          </div>
        </div>
        <div className="bg-zinc-100 rounded flex items-center justify-center px-2 gap-3">
          <div className="w-6 h-6 relative">
            <img src="Arrow Download.png" alt="" />
          </div>
          <div className="text-neutral-400 text-lg font-semibold font-['Lato'] py-4">
            Download Certificate
          </div>
        </div>
      </div>
    </div>
  );
};

export default DueListFooter;
