import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Main from "../components/Main";

const routes = (
  <BrowserRouter>
    <Route path="/" component={Main}>
    </Route>
  </BrowserRouter>
);

export default routes;