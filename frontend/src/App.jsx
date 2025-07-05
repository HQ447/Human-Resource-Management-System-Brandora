import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import FogotPassword from "./pages/FogotPassword";
import OtpVerification from "./pages/otpVerification";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import InstructorDashboard from "./pages/instructor/Dashboard";
import InterneeDashboard from "./pages/internee/Dashboard";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<FogotPassword />} />
        <Route path="/verifyOTP" element={<OtpVerification />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

        <Route path="/home" element={<Home />} />

        <Route path="/admin-dashboard" element={<Dashboard />}></Route>
        <Route
          path="/instructor-dashboard"
          element={<InstructorDashboard />}
        ></Route>
        <Route
          path="/internee-dashboard"
          element={<InterneeDashboard />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
