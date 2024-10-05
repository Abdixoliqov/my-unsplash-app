// react router dom
import { Link } from "react-router-dom";

// global context
import { useGlobalContext } from "../hooks/useGlobalContext";

// icons
import { FcStackOfPhotos } from "react-icons/fc";
import { IoMdHeart } from "react-icons/io";
import { FaSun, FaMoon, FaDownload } from "react-icons/fa";

// components
import { NavLinks } from "./";
import { useEffect, useState } from "react";

function themeFromLocalStorage() {
  return localStorage.getItem("theme") || 'winter'
}


function Navbar() {
  const { likedImages, downloadImages } = useGlobalContext()
  const [theme, setTheme] = useState(themeFromLocalStorage())

  function toggleTheme(params) {
    const newTheme = theme === 'winter' ? 'dracula' : 'winter'
    setTheme(newTheme)
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <header className="bg-base-300">
      <div className="navbar align-elements">
        <div className="navbar-start">
          <Link to={"/"} className="hidden md:flex">
            <FcStackOfPhotos className="w-10 h-10" />
          </Link>

          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button">
              <FcStackOfPhotos className="w-10 h-10" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal rounded-box">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end flex gap-6 items-center">
          <Link to={'/downloadImages'}>
            <div className="indicator">
              <span className="indicator-item badge badge-sm badge-secondary">{downloadImages.length}</span>
              <FaDownload className="h-6 w-6" />
            </div>
          </Link>



          <Link to={'/likedImages'}>
            <div className="indicator">
              <span className="indicator-item badge badge-sm badge-secondary">{likedImages.length}</span>
              <IoMdHeart className="h-6 w-6" />
            </div>
          </Link>

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={toggleTheme} />

            {/* sun icon */}
            <FaSun className="swap-on h-6 w-6 fill-current" />

            {/* moon icon */}
            <FaMoon className="swap-off h-6 w-6 fill-current" />

          </label>
        </div>
      </div>
    </header>
  );
}

export default Navbar;