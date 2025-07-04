import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import FogotPassword from "./pages/FogotPassword";
import OtpVerification from "./pages/otpVerification";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";

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
      </Routes>
    </div>
  );
}

export default App;
