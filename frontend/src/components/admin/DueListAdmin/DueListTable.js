import React from "react";
import DueListTableRows from "./DueListTableRows";
import DueListFooter from "./DueListFooter";
const DueListTable = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[2rem] w-10/12 mx-auto">
      <div className="w-full flex h-[135px] pl-8 pt-5 bg-white border-b-2 border-gray-200 flex-col justify-start items-start gap-2">
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
          <div className="flex-col justify-start items-start inline-flex">
            <div className="px-2.5 py-3 justify-center items-center gap-2.5 inline-flex">
              <div className="w-[124px] text-center text-gray-800 text-xl font-normal font-['Lato'] leading-tight">
                All
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-white pl-8 ">
        <div className="w-8/12 flex h-full items-center">
          <span className="w-1/6 flex">
            <img src="Filter.svg"></img>
            <p className="text-xl">Filter</p>
          </span>
          <span className="w-5/6 flex relative items-center">
            <img src="search.svg" className="absolute left-2"></img>
            <input
              className="w-full h-10 border border-gray-400 rounded-md outline-none pl-8 text-xl focus:border-767A81 placeholder-gray-767A81 text-gray-767A81"
              type="text"
              placeholder="Search"
            />
          </span>

        </div>
      </div>
      <div className="w-full h-11  bg-gray-200 justify-start items-start flex mt-[1rem] shadow-lg">
        <div className="w-1/12 h-11  justify-start items-center gap-2.5 flex">
          <p className="text-stone-900 text-xl font-semibold font-['Lato'] leading-tight">
            Sr. No.
          </p>
        </div>
        <div className="w-2/12 h-11  justify-start items-center gap-2.5 flex">
          <p className="text-stone-900 text-xl font-semibold font-['Lato'] leading-tight">
            Roll Number
          </p>
        </div>
        <div className="w-3/12 h-11  justify-start items-center gap-2.5 flex">
          <p className="text-stone-900 text-xl font-semibold font-['Lato'] leading-tight">
            Name
          </p>
        </div>
        <div className="w-3/12 h-11  justify-start items-center gap-2.5 flex">
          <span className="flex items-center">
            <p className="text-stone-900 text-xl mr-2 font-semibold font-['Lato'] leading-tight">
              Due at
            </p>
            <img src="Filter.svg"></img>
          </span>

        </div>
        <div className="w-3/12 h-11  justify-start items-center gap-2.5 flex">
          <span className="flex items-center">
            <p className="text-stone-900 text-xl mr-2 font-semibold font-['Lato'] leading-tight">
              Amount
            </p>
            <img src="sort.svg"></img>
          </span>

        </div>

      </div>
      <DueListTableRows />
      {/* <DueListFooter/>*/}
    </div>
  );
};

export default DueListTable;
