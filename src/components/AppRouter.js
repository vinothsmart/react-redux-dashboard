import React from "react";
import { Switch, Route } from "react-router-dom";
import { AddRole, Count, Home, Roles, Test, Testing } from "./pages";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/roles" component={Roles} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/testing" component={Testing} />
      <Route exact path="/roles/add" component={AddRole} />
      <Route exact path="/roles/edit/:id" component={AddRole} />
      <Route exact path="/count" component={Count} />
    </Switch>
  );
};

export default AppRouter;
