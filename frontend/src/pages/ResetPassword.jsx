import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function ResetPassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ otp: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/hrm/resetPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log("error in reset password", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        <input
          type="text"
          placeholder="OTP"
          value={form.otp}
          onChange={(e) => setForm({ ...form, otp: e.target.value })}
          className="w-full mb-3 px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="New Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Reset
        </button>
        <NavLink to={"/login"}>Back to Login</NavLink>
      </form>
    </div>
  );
}

export default ResetPassword;
