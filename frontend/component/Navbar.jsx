import React from "react";

function Navbar() {
  return (
    <div className="w-full py-3 px-10 flex justify-between">
      <h1>HRM</h1>
      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
