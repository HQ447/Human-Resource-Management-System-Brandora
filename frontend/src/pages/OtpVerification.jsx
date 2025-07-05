import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function OtpVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/hrm/otpVerification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });
      const data = await res.json();

      if (res.ok) {
        navigate("/resetPassword");
        console.log("otp verified");
      }

      console.log(data);
    } catch (error) {
      console.log("Error in otp verification", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          OTP Verification
        </h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Verify OTP
        </button>
        <NavLink to={"/login"}>Back to Login</NavLink>
      </form>
    </div>
  );
}

export default OtpVerification;
