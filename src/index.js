import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom"

import * as Pages from "./pages"
import * as Utilities from "./utilities"

function RequireAuth() {
  let auth = React.useContext(Utilities.AuthContext);
  let location = useLocation()
  console.log(auth);
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />
}

function Homa () {
  
  return (
    <Utilities.FakeAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="login" element={<Pages.Login />} />
          <Route path="*" element={<Pages.FourZeroFour />} />
          <Route element={<RequireAuth />}>
            <Route path="places" element={<Pages.Places />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Utilities.FakeAuthProvider>
  )
}


const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<Homa />);