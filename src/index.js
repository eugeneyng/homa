import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import * as Pages from "./pages"
import * as Auth from "./utilities"

class Homa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  const [token, setToken] = React.useState();

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="places" element={<Pages.Places />} >
            <Route path=":placeId" element={<Pages.Place />} />
          </Route>
          <Route path="login" element={<Pages.Login />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<Homa />);