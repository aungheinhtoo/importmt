import React, {useState,useEffect,useContext} from "react";
import { Dropdown, Button} from 'semantic-ui-react'
import AuthContext from "../../../context/authContext";
import axios from 'axios';

const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'a2', value: 'a2', text: 'Alb1ania' }
]




const Accessor = () =>  {
  const [results, setResults] = useState([]);
  const authContext = useContext(AuthContext);
  const { 
    error, 
    isAuthenticated,
    user,
    stopLoading
    } = authContext;


  useEffect(async ()=>{
    if(isAuthenticated){
        const res = await axios.get("https://cz3002-server.herokuapp.com/listofdoctors/");
        setResults(res);
    } else{
      stopLoading();
    }
    alert(results);
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
              options={countryOptions}
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
          <Button 
          style={{margin: 15}}
          href="/404"
          >Search</Button>

        </div>
          
          
      </div>

    </div>



  //   <div
  //   className="w3-container w3-content w3-center "
  //   style={{width: 10000, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', border: "15px solid red"}}
  //   >
  //     <div className="w3-row">
  //       <div className="w3-col w3-padding-large" style={{minWidth: 10}}>
  //         Search:
  //       </div>
  //       <div className="w3-col " style={{border: "15px solid red"}} >
  //           <Dropdown
  //             clearable
  //             fluid
  //             multiple
  //             search
  //             selection
  //             options={countryOptions}
  //             style={{width : 300, border: "15px solid red"}}
  //             placeholder='Select Country'
  //             // onChange={handleChange.bind(this)}
  //           />
  //           <Button href="/404">Click Here</Button>
  //       </div>
        
  //     </div>

  //     </div>
  );
}

export default Accessor;