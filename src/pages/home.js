
import React from "react";
import "bulma";
import * as Components from "../components";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // TODO: change logo
  // TODO: navbar burger not working

  render() {
    return (
      <section className="hero has-background-dark is-fullheight">
        {<Components.Header/>}

        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title has-text-light">
              Homa
            </p>
          </div>
        </div>

      </section>
    )
  }
}

export default Home;