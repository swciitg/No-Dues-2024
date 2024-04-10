import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import StudentDashboard from "./pages/studentDashboard"
import RedirectComponent from "./pages/loading";
function App() {
  // const url=

  return (
    <BrowserRouter basename="/test_nodues">
    <Routes>
      {/* <RedirectComponent/> */}
    <Route path="/" element={<Login/>} />
    {/* <Route path="/" element={<RedirectComponent/>} /> */}

    {/* <StudentDashboard/> */}
    </Routes></BrowserRouter>
    
  );
}

export default App;
