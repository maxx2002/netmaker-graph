import { useState } from "react";
import {
  FaTachometerAlt,
  FaGlobe,
  FaDesktop,
  FaKey,
  FaUser,
  FaBook,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`absolute z-0 w-screen h-screen bg-black opacity-50 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={toggleMenu}
        className="fixed top-0 left-0 z-20 p-4 text-gray-300 bg-neutral-900 lg:hidden"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform border-r border-neutral-600 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-neutral-900 w-56 text-gray-300 flex flex-col justify-between z-30`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center p-4">
          <img
            src="/img/logo/logo.png"
            alt="Logo"
            className="h-10 mt-0 mb-4 cursor-pointer lg:mt-2 lg:h-16"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-grow">
          <ul className="px-2 space-y-2">
            <li
              className="flex items-center px-4 py-2 space-x-3 transition rounded-lg cursor-pointer hover:bg-neutral-600"
              onClick={closeMenu}
            >
              <FaTachometerAlt />
              <span>Dashboard</span>
            </li>
            <li
              className="flex items-center px-4 py-2 space-x-3 transition rounded-lg cursor-pointer hover:bg-neutral-600"
              onClick={closeMenu}
            >
              <FaGlobe />
              <span>Networks</span>
            </li>
            <li
              className="flex items-center px-4 py-2 space-x-3 transition rounded-lg cursor-pointer hover:bg-neutral-600"
              onClick={closeMenu}
            >
              <FaDesktop />
              <span>Devices</span>
            </li>
            <li
              className="flex items-center px-4 py-2 space-x-3 transition rounded-lg cursor-pointer hover:bg-neutral-600"
              onClick={closeMenu}
            >
              <FaKey />
              <span>Enrollment Keys</span>
            </li>
            <hr className="-mx-2 border-t border-neutral-600" />
            <li
              className="flex items-center px-4 py-2 space-x-3 transition rounded-lg cursor-pointer hover:bg-neutral-600"
              onClick={closeMenu}
            >
              <FaUser />
              <span>User Management</span>
            </li>
            <li
              className="flex items-center px-4 py-2 space-x-3 transition rounded-lg cursor-pointer hover:bg-neutral-600"
              onClick={closeMenu}
            >
              <FaBook />
              <span>Documentation</span>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="w-full px-2 pt-4 pb-8 border-t border-neutral-600">
          <div className="flex flex-col px-4 mb-4 text-sm gap-y-1">
            <p>UI: v0.26.0</p>
            <p>Server: v0.26.0</p>
          </div>
          <div className="flex items-center justify-between px-4 py-2 transition rounded-lg cursor-pointer hover:bg-neutral-600">
            <div className="flex items-center space-x-3">
              <FaUser />
              <span>test</span>
            </div>

            <FaChevronDown className="ml-auto text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
