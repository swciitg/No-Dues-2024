import React from "react";
import Header from "../../components/student/Header";
import StudentContainer from "../../components/student/Container";
const StudentDashboard = () => {
    
    return (
        <React.Fragment>
            <div className="w-full h-screen">
                <Header></Header>
                <StudentContainer></StudentContainer>
            </div>

        </React.Fragment>
    )
}
export default StudentDashboard;