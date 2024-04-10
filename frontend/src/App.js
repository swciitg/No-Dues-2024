import LoginScreen from "./pages/Auth/LoginScreen";

import LoginHome from "./pages/Auth/LoginHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginHome />} />
          <Route path="/auth/signin" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
