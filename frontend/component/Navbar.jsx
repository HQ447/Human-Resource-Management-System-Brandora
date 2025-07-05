/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isTokenExpired } from "../utils/authUtils";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  function handleLogout() {
    localStorage.clear();
    navigate();
  }
  useEffect(() => {
    const checkTokenExpiry = () => {
      const token = localStorage.getItem("token");
      if (token && isTokenExpired(token)) {
        handleLogout();
        navigate("/");
      }
    };

    const interval = setInterval(checkTokenExpiry, 5000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="w-full py-7 px-20 flex justify-between bg-amber-500">
      <h1>HRM</h1>
      <div>
        {token ? (
          <div>
            <h1>{name}</h1>
            {role == "admin" ? (
              <button>Admin Dashboard</button>
            ) : role == "instructor" ? (
              <button>Instructor dashboard</button>
            ) : (
              <button>Internee Dashboard</button>
            )}
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>SignUp</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
