import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';

export default function Header() {
  const { user, logout } = useStore();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span>LearnScape</span>
        </Link>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-2 rounded-lg text-gray-800 w-64 focus:outline-none"
          />
          {user ? (
            <>
              <span>Welcome, {user.name}</span>
              <button onClick={logout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 text-sm font-medium">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
