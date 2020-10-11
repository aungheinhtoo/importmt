import React, {useState, useEffect, useContext} from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/authContext";

import "./styles.css";



const Register = () => {
    const [accessors, setAccessors] = useState([]);
    const { register, handleSubmit,getValues, errors} = useForm();

    const authContext = useContext(AuthContext)
    // functions I can use from context
    const {
        register_
    } = authContext;

    useEffect(async ()=> {
        const res = await fetch('https://cz3002-server.herokuapp.com/listofdoctors/');
        const data = await res.json();
        setAccessors(data);
        
    },[])
    
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

        // Registration for user+
        const d = {
            "user_id" : data.nric,
            "user_name" : data.name,
            "user_password" : data.password,
            "is_accessor" : bool_accessor,
            "accessor": accessor_name,
            "user_email": "user@email.com"
        }
        alert(JSON.stringify(d));
        register_(d);


    
    };

    return(
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form_h1" >Sign Up</h1>
            
            <label className="form_label" >Full Name:</label>
            <input className="form_input" name="name" ref={register({required : true})}/>
            {errors.name && (<p>This is required.</p>)}

            <label className="form_label">NRIC (Username):</label>
            <input className="form_input" name="nric" ref={register({required : true})}/>
            {errors.nric && (<p>This is required.</p>)}

            <label className="form_label">Password: </label>
            <input className="form_input" name="password" type= "password" ref={register({required : true, minLength: 6})}/>
            {errors.password && errors.password.type === "required" && (<p className="form_p">This is required.</p>)}
            {errors.password && errors.password.type === "minLength" && (<p className="form_p">This field required a min length of 6.</p>)}


            <label className="form_label">Confirm Password: </label>
            <input className="form_input" name="cfm_password" type= "password" ref={register(
                {
                    validate: {
                        passwordEqual: value => (value === getValues().password) || "Passwords are mismatch."
                    },
                    required : true
                })}/>
            {errors.cfm_password && errors.cfm_password.type === "required" && (<p className="form_p">This is required.</p>)}
            {errors.cfm_password && <p className="form_p">{errors.cfm_password.message}</p>}


            <label className="form_label">Domain:</label>
            <select name="domain" ref={register({required : true})} >
                <option>Select ...</option>
                <option>User</option>
                <option>Accessor</option>
            </select>

            <label className="form_label">Assigned Accessor: </label>
            <select name="accessor" ref={register()}>
                {accessors.map((item) => {
                    return <option> {item} </option>;
                })}
            </select>
            <b id="user_part">If you are registering as an Accessor, skip this part.</b>
            
            {/* <label>Assigned Users (Please enter in the form of user1, user2,... etc)</label>
            <textarea name="assigned_users"  ref={register()}/>
            <b id="accessor_part">If you are registering as a User, skip this part.</b> */}

            <input className="form_input" type="submit" ref={register}/>

        </form>
    )
}

export default Register;