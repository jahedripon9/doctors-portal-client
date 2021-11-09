import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Deshboard from "./Pages/Deshboard/Deshboard/Deshboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";

import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <PrivetRoute path='/appointment'>
            <Appointment />
          </PrivetRoute>
          <PrivetRoute path='/deshboard'>
            <Deshboard></Deshboard>,
          </PrivetRoute>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
