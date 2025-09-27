import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";

const Header = () => {
  const { user, logout } = useStore();
  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src="/assets/logo.png" alt="logo" className="h-8"/>
        <Link to="/" className="font-bold text-lg text-blue-700">LearnScape</Link>
        <Link to="/catalog" className="text-gray-700 px-2">Courses</Link>
        {user?.role === "instructor" && (
          <Link to="/dashboard/instructor" className="text-gray-700 px-2">Instructor</Link>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="search"
          className="border rounded px-2 py-1"
          placeholder="Search courses..."
        />
        {user ? (
          <>
            <Link to="/dashboard/student" className="px-2">
              <img src={user.profilePic} alt="profile" className="h-8 w-8 rounded-full inline"/>
              <span className="ml-1 text-gray-700">{user.name}</span>
            </Link>
            <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-500 text-white px-3 py-1 rounded">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
