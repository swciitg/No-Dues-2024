import React from "react";

function DueListTableRows() {
  const dataArray = [
    {
      id: 1,
      rollNo: "220107100",
      name: "Aditya Dadhich",
      dueat: "supervisor/guide",
      amount: 200,
    },
    {
      id: 2,
      rollNo: "220107100",
      name: "Aditya Dadhich",
      dueat: "supervisor/guide",
      amount: 200,
    },
    {
      id: 3,
      rollNo: "220107100",
      name: "Aditya Dadhich",
      dueat: "supervisor/guide",
      amount: 200,
    },
    {
      id: 4,
      rollNo: "220107100",
      name: "Aditya Dadhich",
      dueat: "supervisor/guide",
      amount: 200,
    },
  ];

  return (
    <div className="w-full">
      {dataArray.map((item) => (
        <div
          key={item.id}
          className="w-full h-[76px] bg-white justify-start items-start flex mb-[0.2rem]">
          <div className="w-1/12 h-full flex items-center">
            <p>{item.id}</p>
          </div>
          <div className="w-2/12 h-full flex items-center">
            <p>{item.rollNo}</p>
          </div>
          <div className="w-3/12 h-full flex items-center">
            <p>{item.name}</p>
          </div>
          <div className="w-3/12 h-full flex items-center">
            <p>{item.dueat}</p>
          </div>
          <div className="w-3/12 h-full flex items-center justify-between">
            <span className="flex"> <img src='currency_rupee (1).png'></img>
              <p>{item.amount}</p></span>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg md:w-32 mr-8">
              Approve
            </button>
          </div>


        </div>
      ))}
    </div>
  );
}

export default DueListTableRows;
