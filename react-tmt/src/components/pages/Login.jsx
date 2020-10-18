import React, {useContext, useEffect} from "react";
import { useForm } from "react-hook-form";

import AuthContext from "../../context/authContext";
import "./styles.css";

const Login = props => {
    const { register, handleSubmit, errors} = useForm();
    const authContext = useContext(AuthContext)
    const {
        login, 
        error, 
        clearErrors, 
        isAuthenticated, 
        stopLoading
    } = authContext;


    useEffect(()=>{
        if (isAuthenticated) {
            props.history.push('/menu'); // redirects to '/'
        }
        stopLoading();
    },[error, isAuthenticated, props.history]);

    const onSubmit = data => {
        login(data);
    }


    return(
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form_h1"> Sign In </h1>

                <label>NRIC: </label>
                <input className="form_input" name="nric" ref={register({required : true})}/>
                {errors.nric && (<p className="form_p">This field is required.</p>)}

                <label>Password</label>
                <input className="form_input" name="password" type= "password" ref={register({required : true, minLength: 6})}/>
                {errors.password && errors.password.type === "required" && (<p className="form_p">This is required.</p>)}

                <label className="form_label">Domain:</label>
                <select name="domain" ref={register({required : true})} >
                    <option>Select ...</option>
                    <option>Participant</option>
                    <option>Assessor</option>
                </select>

                <input className="form_input" type="submit" value="Login" ref={register}/>


            </form>
    )
}

export default Login;