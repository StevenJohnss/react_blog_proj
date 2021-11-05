import React ,{useEffect , useState} from "react";
import './App.css';
import Login from "./login"
import Home from './Homepage_componants/Home'
import Unauthorized from "./Unauthorized"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  //  useEffect(() => {
  //
 
  //  }, []);
 
  return (
    <div className="App">
    
      <Router>
       <Switch>
       <Route exact path="/" component={Login} />
        <Route  path="/Home" component={Home} />  
        <Route path="*" component={Unauthorized} /> 
      
       </Switch>
       </Router>
       <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  );
}

export default App;
