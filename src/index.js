import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homes from "./pages/homes.js";
import Login from "./pages/login.js";

class Homa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<Homa />);