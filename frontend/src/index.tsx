import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "react-apollo";
import ApolloBoost from "apollo-boost";

const client = new ApolloBoost({
  uri: "https://api.spacex.land/graphql/"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
