import React from "react";
import DueListTable from "../../components/student/duelist/DueListTable";
import DueListHeader from "../../components/student/duelist/DueListHeader";
import DueListFooter from "../../components/student/duelist/DueListFooter";
function DueList_Student() {
  return (
    <div className="bg-[#E9E9EB] h-full">
      <DueListHeader />
      <DueListTable />
      <DueListFooter />
    </div>
  );
}

export default DueList_Student;
