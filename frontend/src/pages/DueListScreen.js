import React from "react";
import DueListTable from "../components/admin/DueListAdmin/DueListTable";
import DueListHeader from "../components/admin/DueListAdmin/DueListHeader";
import DueListFooter from "../components/admin/DueListAdmin/DueListFooter";

function DueList() {
  return (
    <div className="bg-[#E9E9EB] h-screen">
      <DueListHeader />
      <DueListTable />
    </div>
  );
}

export default DueList;
