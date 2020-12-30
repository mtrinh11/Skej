import { Route, Switch, withRouter } from "react-router-dom";

import Sidebar from '../components/Sidebar'

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Calendar from '../pages/Calendar'

const Router = (props) => {
  return (
    <section>
      <Switch>
        <Route 
        exact path="/" 
        component={ (props) => (
          <div style={{display:"flex", height:'100%', flexDirection: 'row', flexGrow: '1', justifyContent: 'left'}}>
          <Sidebar {...props}/>
          <Home />
          </div>
        )}
        />
        <Route 
        path="/signup" 
        component={(props) => (
          <div style={{display:"flex", height:'100%', flexDirection: 'row', flexGrow: '1', justifyContent: 'left'}}>
            <Sidebar collapsed={false} {...props}/>
            <Signup {...props}/>
          </div>
        )} 
        />
        <Route 
        path="/login" 
        component={(props) => (
          <div style={{display:"flex", height:'100%', flexDirection: 'row', flexGrow: '1', justifyContent: 'left'}}>
            <Sidebar collapsed={false} {...props}/>
            <Login {...props}/>
          </div>
        )} />
        <Route 
        path="/calendar" 
        component={(props) => (
          <div style={{display:"flex", height:'100%', flexDirection: 'row', flexGrow: '1', justifyContent: 'left'}}>
            <Sidebar collapsed={false} {...props}/>
            <Calendar />
          </div>
        )} />
      </Switch>
    </section>
  );
};

export default Router;
