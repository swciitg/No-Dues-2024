import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Login from "./pages/login";
import StudentDashboard from "./pages/studentDashboard"
//import RedirectComponent from "./pages/loading";
import DueList from "./pages/DueListScreen";
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
    <Route path='/duelist' element={<DueList/>}></Route>
    </Routes></BrowserRouter>
    
  );
}

export default App;
