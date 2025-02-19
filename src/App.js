import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="w-full bg-blue-600 p-4 flex justify-between text-white">
        <Link to="/" className="text-lg font-bold">CMS Dashboard</Link>
        <div>
          <Link to="/login" className="mr-4">Login</Link>
        </div>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;