// import React, { createContext, useState } from 'react';

// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export { ThemeProvider, ThemeContext };


// AuthContext.js
import { createContext, useContext, useReducer, useState } from 'react';

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  theme: 'light',
};

// Action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const TOGGLE_THEME = 'TOGGLE_THEME';

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

// Create context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user) => {
    dispatch({ type: LOGIN, payload: user });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};
