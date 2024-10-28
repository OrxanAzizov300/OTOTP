

import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {



  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isopen, setisopen] = useState(false)

  const toggledropdown = () => {
    setisopen(!isopen)
  }

  return (


    <header className='header py-4'>
      <nav className='flex justify-around font-semibold' style={{ padding: '10px', zIndex: "1000" }}>
        <h2>Logo</h2>
        <ul style={{ display: 'flex', listStyleType: 'none', gap: '15px' }}>
          <li className=''><Link to="/">Ana səhifə</Link></li>
          <li><Link to="/about">Haqqımızda</Link></li>
          <li><div className="relative inline-block text-left">
            {/* Button to open dropdown */}
            <button
              onClick={toggleDropdown}
              className="lessonsBtn inline-flex justify-center w-full "
            >
              Dərslərimiz
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{
                  position: 'absolute',
                  zIndex: 10, // Higher z-index to bring it above the image
                  backgroundColor: 'white',
                  listStyle: 'none',
                  padding: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/dil"

                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 "
                    role="menuitem"

                  >
                    Dil
                  </Link>
                  <Link
                    to="/tarix"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400"
                    role="menuitem"
                  >
                    Tarix
                  </Link>
                  <Link
                    to="/cografiya"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400"
                    role="menuitem"
                  >
                    Coğrafiya
                  </Link>
                  <Link
                    to="/kültür"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400"
                    role="menuitem"
                  >
                    Kültür
                  </Link>
                </div>
              </div>
            )}
          </div></li>
          <li><div className="relative inline-block text-left">
            {/* Button to open dropdown */}
            <button
              onClick={toggledropdown}
              className="lessonsBtn inline-flex justify-center w-full "
            >
              Layihələrimiz
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {isopen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{
                  position: 'absolute',
                  zIndex: 10, // Higher z-index to bring it above the image
                  backgroundColor: 'white',
                  listStyle: 'none',
                  padding: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/ortaq_turk_dunyasi_olimpiadasi"

                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 "
                    role="menuitem"
                  >
                    Ortaq Türk Dünyası Olimpiadası
                  </Link>
                </div>
              </div>
            )}
          </div></li>
          <li><div className="relative w-full max-w-xs ">
            {/* Magnifying Glass Icon */}
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
            </span>
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div></li>
          <li>
            <Button>Az</Button>
          </li>
          <li><Link to="/login"><Button>Müraciət et</Button></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
