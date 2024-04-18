import React from "react";

function DueListTableRows() {
  const dataArray = [
    {
      id: 1,
      title: "Clearance from Alumni and External Relations",
      department: "Alumni and External Relations",
      amount: 200,
    },
    {
      id: 1,
      title: "Clearance from Alumni and External Relations",
      department: "Alumni and External Relations",
      amount: 200,
    },
    {
      id: 1,
      title: "Clearance from Alumni and External Relations",
      department: "Alumni and External Relations",
      amount: 200,
    },
    {
      id: 1,
      title: "Clearance from Alumni and External Relations",
      department: "Alumni and External Relations",
      amount: 200,
    },
  ];

  return (
    <div>
      {dataArray.map((item) => (
        <div
          key={item.id}
          className="w-[1000px] h-[76px] p-4 bg-white justify-start items-start flex mb-[0.2rem]"
        >
          <div className="w-[93px] h-11 p-2.5 justify-center items-center gap-2.5 flex">
            <div className="w-[55px] text-zinc-600 text-xl font-normal font-['Lato'] leading-tight">
              {item.id}.
            </div>
          </div>
          <div className="w-[470px] p-2.5 justify-center items-center gap-2.5 flex">
            <div className="w-[450px] text-zinc-600 text-xl font-normal font-['Lato'] leading-tight">
              {item.title}
            </div>
          </div>
          <div className="w-80 p-2.5 justify-center items-center gap-2.5 flex">
            <div className="w-[300px] text-zinc-600 text-xl font-normal font-['Lato'] leading-tight">
              {item.department}
            </div>
          </div>
          <div className="p-2.5 flex-col justify-start items-start gap-2.5 flex">
            <div className="justify-start items-center gap-1 flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute">
                  <img src="currency_rupee (1).png" alt="" />
                </div>
              </div>
              <div className="w-20 text-green-800 text-xl font-normal font-['Lato'] leading-tight">
                {item.amount}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DueListTableRows;
