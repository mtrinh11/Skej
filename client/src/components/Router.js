import { Route, Switch, withRouter } from "react-router-dom";

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Calendar from '../pages/Calendar'
import CreateEvent from '../pages/CreateEvent'

const Router = (props) => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/calendar" component={Calendar} />
        <Route path ="/create" component={CreateEvent} />
      </Switch>
    </section>
  );
};

export default Router;
