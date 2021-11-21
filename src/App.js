import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import AdDoctor from "./Pages/Deshboard/AdDoctor/AdDoctor";
import Deshboard from "./Pages/Deshboard/Deshboard/Deshboard";
import MakeAdmin from "./Pages/Deshboard/Deshboard/MakeAdmin/MakeAdmin";
import DeshboardHome from "./Pages/Deshboard/DeshboardHome/DeshboardHome";
import Payment from "./Pages/Deshboard/Payment/Payment";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";

import Register from "./Pages/Login/Register/Register";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Navigation></Navigation>
        <Routes>
          <Route path='/appointment' 
          element={
          <PrivetRoute>
            <Appointment />
            </PrivetRoute> }>
          </Route>
          <Route path='/deshboard' 
          element={
          <PrivetRoute>
            <Deshboard></Deshboard>
            </PrivetRoute>}>
            <Route  path='/deshboard' element={<DeshboardHome></DeshboardHome>}>
        </Route>
        <Route  path={`/deshboard/payment/:appointmentId`} element={<Payment></Payment>}>
        </Route>
        <Route path={`/deshboard/makeAdmin`}
        element={
          <AdminRoute>
          <MakeAdmin></MakeAdmin>
          </AdminRoute>
        }
        >
        </Route>
        <Route path={`/deshboard/adDoctor`}
        element={
          <AdminRoute>
            <AdDoctor></AdDoctor>
          </AdminRoute>
        }>
        </Route>

          </Route>
          <Route path='/home' element={<Home />}>
          </Route>
          <Route path='/login' element={<Login />}>
          </Route>
          <Route path='/register' element={<Register />}>
          </Route>
          <Route exact path='/' element={<Home />}>
          </Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
