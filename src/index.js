import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import * as Pages from "./pages"

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
          <Route path="/" element={<Pages.Home />} />
          <Route path="login" element={<Pages.Login />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<Homa />);