import React, { useState, createContext } from 'react';

const AuthContext = createContext({
  //we can initialize it with some dummy values
  isLoggedIn: false, //variable accessible for every childre component
  onLogout: () => {}, //dummy function because we need to pass a function as argument in the provider. This function will be accessible for any children component
  onLogin: () => {},
  setIsLoggedIn: () => {}, //dummy function because we need to pass a function as argument in the provider.This function will be accessible for any children component
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    console.log('executed logout');
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    window.location.reload(false);
    setIsLoggedIn(false);
  };

  const loginHandler = (token) => {
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);

    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expiration.toISOString());

    window.location.reload(false);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn, //sends the configuration with the values and function that needed to be executed
        onLogout: logoutHandler, // the function could be accessible by any children component of the app
        onLogin: loginHandler,
        setIsLoggedIn: setIsLoggedIn, //the function could be accessible by any children component of the app
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
