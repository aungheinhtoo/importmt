import React, {useState, useEffect, useContext} from "react";
import AuthContext from "../../../context/authContext";
import axios from "axios";
// import {JSONReply} from "./data";

const User = () => {
  const [results, setResults] = useState([]);
  const authContext = useContext(AuthContext);
  const { 
    error, 
    isAuthenticated,
    user,
    token, 
    stopLoading
    } = authContext;


  useEffect( ()=>{
    if(isAuthenticated){
        const asyncCallback = async () => {
            const res = await axios.get("https://cz3002-server.herokuapp.com/userattempts/" + user,
                {
                    headers: {token: token}
                });
            const data = res.data
            setResults(data);
        };asyncCallback();

    } else{
      stopLoading();
    }
  },[error, isAuthenticated]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Time Taken (ms)</th>
          <th scope="col">Number of Misclicks </th>
          <th scope="col">Difficulty</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {results.map((item, index) => {
          
          var difficulty = null;
          var strings = item.attempted_on;
          var errors = item.accuracy;
          var date= null;
          var time =null;
          var status = null;

          if (item.difficulty == true){
            difficulty = 1;
          } else if (item.difficulty == false){
            difficulty = 2;
          } else{
            difficulty = -1;
          }
          if(item.pass_fail){
            status = "pass";
          }else{
            status = "fail";
          }
     

          date = strings.split('T')[0];
          time = strings.split('T')[1].replace('.000Z','');
          return(
            <tr>
              <th scope="row">{date+" "+ time}</th>
              <td>{item.time_taken}</td>
              <td>{errors}</td>
              <td>{difficulty}</td>
              <td>{status}</td>
            </tr>

          )
        })}
      </tbody>
    </table>
  );
}

export default User;