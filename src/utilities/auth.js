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
  const [user, setUser] = React.useState(Parse.User.current());
  const parseUser = new Parse.User();

  function registerUser(user) {
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

  function signIn(user) {
    parseUser.set("username", user.username);
    parseUser.set("password", user.password);
    parseUser.set("email", user.email);

    parseUser.logIn().then(() => {
      setUser(Parse.User.current());
    }).catch(error => {
      console.log("Error: " + error.code + " " + error.message)
      setUser(null);
    })
  }

  function signOut() {
    // It's strange that this is Parse.User.logOut() and parseUser.logOut() does not work instead
    // Also, this doesn't even close the session in Parse database which is annoying
    Parse.User.logOut().then(() => {
      setUser(null);
      localStorage.clear();
    }).catch(error => {
      console.log("Error :" + error.code + " " + error.message);
      console.log("Session not closed, most likely");
    })
  }

  let value = { user, registerUser, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};