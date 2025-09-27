import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';

export default function Header() {
  const { user, logout } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span>LearnScape</span>
        </Link>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="hidden md:block px-4 py-2 rounded-lg text-gray-800 w-64 focus:outline-none bg-white bg-opacity-20 backdrop-blur-sm"
          />

          {user ? (
            <>
              <span className="hidden md:inline">Hi, {user.name}</span>
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded text-sm transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link
                to="/register"
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 text-sm font-medium transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
