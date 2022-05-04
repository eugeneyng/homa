import * as React from "react";

export let AuthContext = React.createContext();

function AuthProvider() {
  console.log("AuthProvider")
}

export function FakeAuthProvider( {children} ) {

  let [user, setUser] = React.useState();

  function signIn(newUser, callback = () => {return null;} ) {
    setUser(newUser)
    setTimeout(callback, 100); // fake async
  }
  
  function signOut(callback = () => {return null;} ) {
    setUser(null)
    setTimeout(callback, 100); // fake async
  }

  let value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;