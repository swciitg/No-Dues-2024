import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Login from "./pages/login";
import StudentDashboard from "./pages/student/studentDashboard"
//import RedirectComponent from "./pages/loading";
import DueList_Admin from "./pages/admin/DueList_Admin";
import DueList_Student from "./pages/student/DueList_Student";
function App() {
  // const url=

  return (
    <BrowserRouter basename="/test/nodues">
    <Routes>
      {/* <RedirectComponent/> */}
    {/* <Route path="/" element={<Login/>} /> */}
    {/*<Route path="/" element={<RedirectComponent/>} />*/}

    {/* <StudentDashboard/> */}
    <Route path='/dashboard' element={<StudentDashboard/>}></Route>
    <Route path='/duelist/admin' element={<DueList_Admin/>}></Route>
    <Route path='/duelist/student' element={<DueList_Student/>}></Route>
    </Routes></BrowserRouter>
  );
}

export default App;
