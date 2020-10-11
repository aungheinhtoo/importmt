import React, {useState,useEffect,useContext} from "react";
import { Dropdown, Button} from 'semantic-ui-react'
import AuthContext from "../../../context/authContext";
import axios from 'axios';
import {Link} from "react-router-dom";




const Accessor = () =>  {
  const [results, setResults] = useState([]);
  const authContext = useContext(AuthContext);
  const { 
    error, 
    isAuthenticated,
    token,
    user,
    stopLoading
    } = authContext;


  useEffect(async ()=>{
    
    if(isAuthenticated){
        const res = await fetch("https://cz3002-server.herokuapp.com/listofpatients/",
        {
          method: "GET",
          headers: new Headers({token: token})
        });
        
        const data = await res.json();
        var options = data.map((item)=>{
          const d = {
            key: item , value: item, text: item
          }
          return d;
        });
        
        setResults(options);
    } else{
      stopLoading();
    }
    
  },[error, isAuthenticated]);


  const handleChange = (e, {value}) => {
    alert(value);
  }
  return (
    <div className="w3-container w3-content w3-center w3-padding-64"
      style={{
          // marginRight: "auto",
          // marginLeft: "auto",
          height: 1000,
          position: "relative",
          // border: "3px solid green"
      }}
    >
        <div 
        className="w3-row"
        style={{  

        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
        height: "30rem", width: "60rem", 
        // border: "3px solid green" 
      }}
      >
        <div
          className="w3-third"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "100%" ,
            // border: "3px solid green"
          }}
        >

          <p style={{margin: 15}}>Search Users:</p>

        </div>
        <div
          className="w3-third"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%" ,
            // border: "3px solid green"
          }}
        >
          <Dropdown
              clearable
              fluid
              multiple
              search
              selection
              options={results}
              style={{width : 300}}
              placeholder='Select Users'
              onChange={handleChange.bind(this)}
            />

        </div>
        <div
          className="w3-third"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100%" ,
            // border: "3px solid green"
          }}
        >
            {/* <Link to={{
                pathname:"/game",
                state:{
                    "selections": value,
                }
            }}>
              </Link> */}
          <Button 
          style={{margin: 15}}
          href="/404"
          >Search</Button>

        </div>
          
          
      </div>

    </div>

  );
}

export default Accessor;