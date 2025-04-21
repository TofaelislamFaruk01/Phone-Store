import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="w-11/12 max-w-6xl mx-auto flex justify-between items-center py-4">
        {/* Logo or Site Name */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          📱 PhoneStore
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-lg">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/phones"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Phones
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
