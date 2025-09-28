import { Link } from "react-router-dom"
import { useStore } from "../../store/useStore"
import { FaSearch } from "react-icons/fa"

export default function Header() {
  const { user, logout } = useStore()

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">LearnScape</Link>
        <nav className="space-x-6 hidden md:flex">
          <Link to="/catalog">Courses</Link>
          {user && <Link to="/dashboard">Dashboard</Link>}
          {user?.role === "instructor" && <Link to="/instructor">Instructor</Link>}
        </nav>
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="pl-8 pr-3 py-1 rounded-full w-60 text-gray-800"
          />
          <FaSearch className="absolute top-2 left-2 text-gray-500" />
        </div>
        <div className="space-x-4">
          {user ? (
            <button onClick={logout} className="bg-white text-blue-600 px-3 py-1 rounded">Logout</button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register" className="bg-white text-blue-600 px-3 py-1 rounded">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
