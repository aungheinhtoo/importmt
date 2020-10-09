import React,{Component} from "react";
import {Container, Dropdown, Button} from 'semantic-ui-react'


const countryOptions = [
  { key: 'af', value: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', text: 'Albania' },
  { key: 'a2', value: 'a2', text: 'Alb1ania' }
]

// const handleChange = (e, {value}) => {
  
// }



class accessor extends Component {
  render(){
    return (
      <div
      className="w3-container w3-content w3-center w3-padding-64"
      style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}
      >
        <div className="w3-row">
          <div className="w3-col m6 w3-padding-large w3-hide-small">
            <p style={{border: "15px solid red"}}>Search: </p>
          </div>
          <div className="w3-col m6 w3-padding-large w3-hide-small">
            <Dropdown
              clearable
              fluid
              multiple
              search
              selection
              options={countryOptions}
              style={{width : 300, border: "15px solid red"}}
              placeholder='Select Country'
              // onChange={handleChange.bind(this)}
            />
            <Button href="/404">Click Here</Button>
          </div>
        </div>
  
        </div>
    );
  }
  
};


export default accessor;