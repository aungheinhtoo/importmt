import React, {useState, useEffect, useContext} from "react";
import AuthContext from "../../../context/authContext";
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


  useEffect(async ()=>{
    if(isAuthenticated){
        const res = await fetch("https://cz3002-server.herokuapp.com/userattempts/" + user,
        {
          method: "GET",
          headers: new Headers({token: token})
        });
        const data = await res.json();
        setResults(data);
    } else{
      stopLoading();
    }
  },[error, isAuthenticated]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Time Taken</th>
          <th scope="col">Error</th>
          <th scope="col">Difficulty</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {results.map((item, index) => {
          
          var difficulty = null;
          var strings = item.attempted_on;
          var errors = 25 - item.accuracy;
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