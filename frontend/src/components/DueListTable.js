import React from "react";
import DueListTableRows from "./DueListTableRows";

const DueListTable = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[2rem]">
      <div className="w-[1000px] flex h-[135px] pl-9 pr-4 pt-5 bg-white border-b-2 border-gray-200 flex-col justify-start items-start gap-2">
        <div className="text-gray-800 text-[30px] font-semibold font-['Lato'] leading-[48px]">
          Due List
        </div>
        <div className="justify-start items-start inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="px-2.5 py-3 justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-600 text-xl font-normal font-['Lato'] leading-tight">
                Not Approved
              </div>
            </div>
            <div className="w-36 h-0.5 relative bg-blue-600" />
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="px-2.5 py-3 justify-center items-center gap-2.5 inline-flex">
              <div className="w-[124px] text-center text-gray-800 text-xl font-normal font-['Lato'] leading-tight">
                Approved
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1000px] h-11 bg-gray-200 justify-start items-start flex mt-[1rem] shadow-lg">
        <div className="w-[108px] h-11 p-2.5 justify-center items-center gap-2.5 flex">
          <div className="text-stone-900 text-xl font-semibold font-['Lato'] leading-tight">
            Sr. No.
          </div>
        </div>
        <div className="w-[471px] h-11 p-2.5 justify-start items-center gap-2.5 flex">
          <div className="text-stone-900 text-xl font-semibold font-['Lato'] leading-tight">
            Due
          </div>
        </div>
        <div className="w-80 h-11 p-2.5 justify-start items-center gap-2.5 flex">
          <div className="text-stone-900 text-xl font-semibold font-['Lato'] leading-tight">
            Office
          </div>
        </div>
        <div className="p-2.5 flex-col justify-center items-start gap-2.5 flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="text-stone-900 text-xl font-semibold font-['Lato'] leading-tight">
              Amount
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
      <DueListTableRows />
    </div>
  );
};

export default DueListTable;
