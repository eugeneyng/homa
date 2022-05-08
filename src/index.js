import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
// import "./styles.css";
import "bulma"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Components from "./components";
import * as Pages from "./pages";

function Homa() {
  return (
    <Components.Auth.AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="login" element={<Pages.Login />} />
          <Route path="register" element={<Pages.Register />} />
          <Route path="*" element={<Pages.FourZeroFour />} />
          <Route element={<Components.Auth.RequireAuth />}>
            <Route path="places" element={<Pages.Places />} />
            <Route path="places/place/:id" element={<Pages.PlacePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Components.Auth.AuthProvider>
  );
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<Homa />);
