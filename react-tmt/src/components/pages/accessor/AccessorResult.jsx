import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../../../context/authContext";
import axios from "axios";

const AccessorResult = props => {

  const [results, setResults] = useState([]);
  const authContext = useContext(AuthContext);
  // TODO: change here
  let participants = props.location.state.selections;
  // let participants = ["Nuser2"];
  const { 
    error, 
    isAuthenticated,
    token,
    stopLoading
    } = authContext;
    
  useEffect(()=>{
    
    if(isAuthenticated) {
      // change here. the array should be choiceArr
      //alert(participants);
      const asyncCallback = async () => {
        const res = await axios.get("https://cz3002-server.herokuapp.com/patientattempts/" + participants,
            {
              headers: {token: token}
            });

      const data = res.data
      const d = data.map((item, index) => {
        const new_data = {
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
    };
       asyncCallback();
    }else{
      stopLoading();
    }
    
  },[]
  );
  return(
    <table className="table">
          <thead>
            <tr>
              <th scope="col">Participant</th>
              <th scope="col">Date</th>
              <th scope="col">Time Taken (ms)</th>
              <th scope="col">Number of Misclick</th>
              <th scope="col">Difficulty</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => {
              
              var difficulty = null;
              var strings = item.attempted_on;
              console.log(strings);
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