import React ,{useEffect} from "react";
import { useHistory } from 'react-router-dom';

export default function Unauthorized(props) {
    const history = useHistory();

    useEffect(() => {
       if(JSON.parse(localStorage.getItem("loggedin"))==true){
      
       }
       
         }, []);    
    return(<h1 className="text-danger mt-5">Unauthorized access</h1>)
};
