// see : https://stackoverflow.com/questions/62384395/protected-route-with-react-router-v6
// see : https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

import * as React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom"
import * as Parse from "parse";

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

  Parse.initialize("id");
  Parse.serverURL = "https://parse.eugene.ng/parse"
  const [user, setUser] = React.useState(getUser());

  function registerUser(user) {
    const parseUser = new Parse.User();
    parseUser.set("username", user.username);
    parseUser.set("password", user.password);
    parseUser.set("email", user.email);

    parseUser.signUp().then(() => {
      signIn(user);
    }).catch(error => {
      console.log("Error: " + error.code + " " + error.message)
      setUser(null);
    })
  }

  function getUser() {
    return Parse.User.current();
  }

  function saveUser(user) {
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

  let value = { user, getUser, registerUser, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};