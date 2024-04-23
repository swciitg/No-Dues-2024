import React from "react";
import Header from "../../components/student/Header";
import StudentContainer from "../../components/student/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import Error from "../../components/error";
const StudentDashboard = () => {
  const SERVER_URL =
    process.env.REACT_APP_SERVER_URL || "http://localhost:3002";
  const [data, setData] = useState(
    {
      email: localStorage.getItem("email"),
    },
  );
  const [authenticated, setAuthenticated] = useState(
    false || localStorage.getItem("email")
  );
  //    useEffect(() => {
  //        const email = localStorage.getItem("email");
  //        try {
  //            axios.get(`${SERVER_URL}/user/profile/${email}`)
  //                .then((response) => {
  //                    setData(response.data.result[0]);
  //                });
  //        } catch (error) {
  //            console.log(error);
  //        }
  //    }, []);

  return (
    <React.Fragment>
      {authenticated ? (
        <div className="w-full h-screen">
          <Header data={data} />
          <StudentContainer data={data} />
        </div>
      ) : (
        <Error />
      )}
    </React.Fragment>
  );
};
export default StudentDashboard;
