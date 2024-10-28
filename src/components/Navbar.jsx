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

// firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

function Navbar() {
  const { likedImages, downloadImages, user, dispatch } = useGlobalContext();
  const [theme, setTheme] = useState(themeFromLocalStorage());
  // const { user } = useGlobalContext();
  // console.log(user, 'user');
  

  function toggleTheme(params) {
    const newTheme = theme === "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  }

  const signOutUser = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      toast.success("See you soon!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 bg-base-300 shadow-md">
      <div className="align-elements navbar">
        <div className="navbar-start">
          <Link to={"/"} className="hidden md:flex">
            <FcStackOfPhotos className="h-10 w-10" />
          </Link>

          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button">
              <FcStackOfPhotos className="h-10 w-10" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal rounded-box">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-6">
          <Link to={"/downloadImages"}>
            <div className="indicator">
              <span className="badge indicator-item badge-secondary badge-sm">
                {downloadImages.length}
              </span>
              <FaDownload className="h-6 w-6" />
            </div>
          </Link>

          <Link to={"/likedImages"}>
            <div className="indicator">
              <span className="badge indicator-item badge-secondary badge-sm">
                {likedImages.length}
              </span>
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

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="w-10 rounded-full">
                <img alt={user.displayName + "avatar"} src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-4 w-52 rounded-md bg-base-200 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={signOutUser}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
