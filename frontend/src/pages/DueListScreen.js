import React from "react";
import DueListTable from "../components/DueListTable";
import DueListHeader from "../components/DueListHeader";
import DueListFooter from "../components/DueListFooter";

function Home() {
  return (
    <div className="bg-[#E9E9EB] h-full">
      <DueListHeader />
      <DueListTable />
      <DueListFooter />
    </div>
  );
}

export default Home;
