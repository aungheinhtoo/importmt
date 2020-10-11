import React, {useState,useEffect,useContext} from "react";
import { Dropdown, Button} from 'semantic-ui-react'
import AuthContext from "../../../context/authContext";
import axios from 'axios';
import {Link} from "react-router-dom";
import DataContext from "../../../context/userdata/dataContext";





const Accessor = () =>  {
  const [results, setResults] = useState([]);
  let [choiceArr, setChoices] = useState([]);
  const authContext = useContext(AuthContext);
    const {
    error, 
    isAuthenticated,
    token,
    stopLoading
    } = authContext;

  useEffect(()=>{
    if(isAuthenticated){
      const asyncCallback = async () =>{
        const res = await axios.get("https://cz3002-server.herokuapp.com/listofpatients/",
        {
          headers: {token: token}
        });
        const data = res.data;
        alert(JSON.stringify(data));
        var options = data.map((item)=>{
          const d = {
            key: item , value: item, text: item
          }
          return d;
        })
        
        setResults(options);
      };
      asyncCallback();
        
    } else{
      stopLoading();
    }
    
    },[]);


    const handleChange = (e, {value}) => {
        if (value.length===0){
        }
        else {
            choiceArr = [...value];
        }
        setChoices([...value]);
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
            <Link to=
                {{ pathname: "/a_results",
                 state: {
                     "selections": [...choiceArr],
                 }
             }} 
             >
                <Button
                    style={{margin: 15}}
                >Search</Button>
            </Link>

        </div>
          
          
      </div>

    </div>

  );
}

export default Accessor;