// see : https://stackoverflow.com/questions/62384395/protected-route-with-react-router-v6
// see : https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

import * as React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom"

export class User {

  constructor(id, password) {
    this.id = id;
    this.password = password;
  }
}

export let AuthContext = React.createContext();

export function RequireAuth() {
  let auth = React.useContext(AuthContext);
  let location = useLocation()

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />
}

export function AuthProvider( {children} ) {

  const [user, setUser] = React.useState(getUser());

  function getUser() {
    const userString = localStorage.getItem("user");
    const userObj = JSON.parse(userString);
    return userObj;
  }

  const saveUser = user => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  function signIn(newUser, callback = () => {return null;} ) {
    saveUser(newUser);
    setTimeout(callback, 100); // fake async
  }

  function signOut(callback = () => {return null;} ) {
    setUser(null);
    localStorage.clear();
    setTimeout(callback, 100); // fake async
  }

  let value = { user, signIn, getUser, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};