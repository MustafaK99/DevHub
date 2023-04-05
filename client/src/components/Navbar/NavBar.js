import { FaSignInAlt, FaSignOutAlt, FaUser, FaBars } from "react-icons/fa";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import "./NavBar.css";

const NavBar = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    naviagte("/");
  };

  return (
    <>
      {(toggleMenu || screenWidth > 750) && (
        <header className="header">
          <div className="logo">
            <Link to="/">DevHub</Link>
          </div>
          <Link className="middleLinks" to="/chat">
            Chat
          </Link>
          <Link className="middleLinks" to="/board">
            Projects
          </Link>
          <Link className="middleLinks" to="/git">
            Git
          </Link>
          <ul>
            {user ? (
              <li>
                <button className="btn" onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/register">
                    <FaUser /> Register
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <FaSignInAlt /> Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </header>
      )}

      <button className="burger-icon" onClick={toggleNav}>
        <FaBars />
      </button>
    </>
  );
};

export default NavBar;
