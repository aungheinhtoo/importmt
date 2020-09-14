import React, {useContext} from "react";
import {countryData} from "../WebForm/Accessors";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/authContext";

import "./styles.css";



const Register = () => {
    const { register, handleSubmit, errors} = useForm();
    

    const authContext = useContext(AuthContext)
    // functions I can use from context
    const {
        register_
    } = authContext;
    
    
    const onSubmit = data => {
        //alert(JSON.stringify(data));


        var bool_accessor = null;
        var accessor_name = "null";

        if (data.domain === "User"){
            bool_accessor = "false";
            accessor_name = data.accessor
        }
        else {
            bool_accessor = "true";
        }

        // Registration for user
        const d = {
            "user_id" : data.nric,
            "user_name" : data.name,
            "user_password" : data.password,
            "is_accessor" : bool_accessor,
            "accessor": accessor_name,
        //    "user_email": "aqwer@qwewqe.com"
            "user_email": "user@email.com"
        }
        // alert(JSON.stringify(d));
        register_(d);


    
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign Up</h1>
            
            <label>Full Name:</label>
            <input name="name" ref={register({required : true})}/>
            {errors.name && (<p>This is required.</p>)}

            <label>NRIC (Username):</label>
            <input name="nric" ref={register({required : true})}/>
            {errors.nric && (<p>This is required.</p>)}

            <label>Password</label>
            <input name="password" type= "password" ref={register({required : true, minLength: 6})}/>
            {errors.password && errors.password.type === "required" && (<p>This is required.</p>)}
            {errors.password && errors.password.type === "minLength" && (<p>This field required a min length of 6.</p>)}

            <label>Domain:</label>
            <select name="domain" ref={register({required : true})} >
                <option>Select ...</option>
                <option>User</option>
                <option>Accessor</option>
            </select>

            <label>Assigned Accessor: </label>
            <select name="accessor" ref={register()}>
                {countryData.map((item, index) => {
                    return <option key={item.name}> {item.value} </option>;
                })}
            </select>
            <b id="user_part">If you are registering as an Accessor, skip this part.</b>
            
            {/* <label>Assigned Users (Please enter in the form of user1, user2,... etc)</label>
            <textarea name="assigned_users"  ref={register()}/>
            <b id="accessor_part">If you are registering as a User, skip this part.</b> */}

            <input type="submit" ref={register}/>

        </form>
    )
}

export default Register;