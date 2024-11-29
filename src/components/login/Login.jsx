import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/userdataSlice";
import "./login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.userdata.currentUser);

  const handleSignIn = (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    dispatch(loginUser({ userName, password }));

    // Check if login was successful
    if (currentUser) {
      navigate("/dashboard"); // Navigate to Dashboard
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-img flex justify-center items-center h-screen">
      <div className="bg-white w-[600px] h-auto rounded-lg shadow-lg p-8">
        <p className="font-bold text-4xl text-center mb-4">DB Schenker</p>
        <hr className="border-gray-300 mb-6" />
        <form className="space-y-4" onSubmit={handleSignIn}>
          <div>
            <input
              className="w-full p-2 my-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full p-2 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full font-bold py-2 text-xl px-4 my-5 bg-green-400 text-white rounded-lg hover:bg-green-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
