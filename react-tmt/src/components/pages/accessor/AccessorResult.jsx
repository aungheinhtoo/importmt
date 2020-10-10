import React from "react";


const AccessorResults = () => {
    return(<table className="table">
    <thead>
      <tr>
        <th scope="col">User</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">Error</th>
        <th scope="col">Difficulty</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      {/* {results.map((item, index) => {
        
        var difficulty = null;
        var strings = item.attempted_on;
        console.log(strings);
        var timestamp = new Date(strings);
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
            <th scope="row">{date}</th>
            <td>{time}</td>
            <td>{errors}</td>
            <td>{difficulty}</td>
            <td>{status}</td>
          </tr>

        )
      })} */}
    </tbody>
  </table>);
}

export default AccessorResults;