import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../../../context/authContext";

const AccessorResults = participants => {

  const [results, setResults] = useState([]);
  const authContext = useContext(AuthContext);

  const { 
    error, 
    isAuthenticated,
    token,
    stopLoading
    } = authContext;
  useEffect(async ()=>{
    if(isAuthenticated){
      const res = await fetch("https://cz3002-server.herokuapp.com/patientattempts/" + participants,
      {
        method: "GET",
        headers: new Headers({token: token})
      });
      const data = await res.json();
      const d = {
        user: participants,
        attempted_on: data.attempted_on,
        accuracy: data.accuracy,
        time_taken: data.taken,
        difficulty: data.difficulty,
        pass_fail: data.pass_fail
      }
      setResults(d);
    }else{
      stopLoading();
    }
    
  },[]
  );


  return(<table className="table">
  <thead>
    <tr>
      <th scope="col">User</th>
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
      console.log(strings);
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
          <th scope="row">{item.user}</th>
          <td>{date+" "+ time}</td>
          <td>{item.time_taken}</td>
          <td>{errors}</td>
          <td>{difficulty}</td>
          <td>{status}</td>
        </tr>

      )
    })}
  </tbody>
</table>);
}

export default AccessorResults;