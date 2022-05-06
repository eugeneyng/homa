import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Pages from "./pages";
import * as Utilities from "./utilities";

function Homa() {
  return (
    <Utilities.Auth.AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="login" element={<Pages.Login />} />
          <Route path="register" element={<Pages.Register />} />
          <Route path="*" element={<Pages.FourZeroFour />} />
          <Route element={<Utilities.Auth.RequireAuth />}>
            <Route path="places" element={<Pages.Places />} />
            <Route path="places/place/:id" element={<Pages.PlacePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Utilities.Auth.AuthProvider>
  );
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<Homa />);
