import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/Logo.png'
// import { IoIosSearch } from "react-icons/io";
import { HiSun } from "react-icons/hi";
import { useAuth } from '../../context/ThemeContext';

// import { IoIosCall } from "react-icons/io";

const Header = () => {

  // const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated, user, theme, toggleTheme, logout } = useAuth();
  console.log("Authnetication", isAuthenticated, user)




  return (
    <div>
      {/* <header> */}
      <header className={`${theme == 'dark' ? 'header_light' : 'header_dark'}`}>
        {/* <header className={`app ${theme}`}> */}
        <div className="page_width">
          <nav>
            <div className="logo">
              <Link to="/" ><img src={Logo} alt="" /></Link>
            </div>
            <div className="nav_link">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/create_blog">Create Blog Post</Link>
                </li>
                <li>
                  <Link to="/author">Pages</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
                
                {isAuthenticated && (
                  <li className="user_info">
                    Welcome, {user.first_name} {user.last_name}
                  </li>
                )}

                {isAuthenticated ? (
                  <li onClick={logout} >
                    <Link>Logout</Link>
                  </li>) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/signUp">Sign Up</Link>
                    </li>
                  </>
                )}
               

              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
