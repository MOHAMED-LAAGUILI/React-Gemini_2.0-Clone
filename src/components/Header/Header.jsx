import { useState } from 'react';
import { assets } from '../../assets/assets';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 py-2 md:px-6 md:py-3 flex justify-between items-center">
      <div className="header-left">
        <h1 className="text-lg font-semibold text-gray-800">Gemini</h1>
      </div>

      <div className="header-right flex items-center gap-4">
        <button className="new-chat-btn flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-opacity-90">
          <img src={assets.plus_icon} className="w-5" alt="New chat" />
          New chat
        </button>

        <div className="user-menu relative">
          <button className="user-menu-btn p-0" onClick={toggleDropdown}>
            <img src={assets.user_icon} className="user-avatar w-8 h-8 rounded-full" alt="User Avatar" />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg min-w-[150px] z-10">
              <a href="#" className="dropdown-item block px-4 py-2 text-gray-700 text-sm transition-colors duration-200 hover:bg-gray-100">My account</a>
              <a href="#" className="dropdown-item block px-4 py-2 text-gray-700 text-sm transition-colors duration-200 hover:bg-gray-100">Settings</a>
              <a href="#" className="dropdown-item block px-4 py-2 text-gray-700 text-sm transition-colors duration-200 hover:bg-gray-100">Log out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
