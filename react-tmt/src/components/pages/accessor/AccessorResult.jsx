import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../../../context/authContext";

const AccessorResult = props => {

  const [results, setResults] = useState([]);
  const authContext = useContext(AuthContext);
  // TODO: change here
  let participants = props.location.state.selections[0];
  // let participants = ["Nuser2"];
  const { 
    error, 
    isAuthenticated,
    token,
    stopLoading
    } = authContext;
    
  useEffect(async()=>{
    
    if(isAuthenticated){
      // change here. the array should be choiceArr
      
      const res = await fetch("https://cz3002-server.herokuapp.com/patientattempts/" + participants,
      {
        method: "GET",
        headers: new Headers({token: token})
      });
      const data = await res.json();
      
      const d = data.map((item,index)=>{
        const new_data= {
          user: participants,
          attempted_on: item.attempted_on,
          accuracy: item.accuracy,
          time_taken: item.time_taken,
          difficulty: item.difficulty,
          pass_fail: item.pass_fail
        };
        return new_data;
      });

      setResults(d);
    }else{
      stopLoading();
    }
    
  },[isAuthenticated, error]
  );
  return(
    <table className="table">
          <thead>
            <tr>
              <th scope="col">Participant</th>
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

              );
            })}
          </tbody>
        </table>

        );
}

export default AccessorResult;