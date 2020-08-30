import React from "react";
import {countryData} from "../WebForm/Accessors";
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign Up</h1>
            
            <label>Name:</label>
            <input name="name"/>

            <label>NRIC (Username):</label>
            <input name="nric"/>

            <label>Password</label>
            <input name="password"/>

            <label>Domain:</label>
            <select name="domain">
                <option>Select ...</option>
                <option>User</option>
                <option>Accessor</option>
            </select>

            <label>Assigned Accessor: </label>
            <select name="accessor">
                {countryData.map((item, index) => {
                    return <option key={item.name}> {item.value} </option>;
                })}
            </select>

            <label>Assigned Users (Please enter in the form of user1, user2,... etc)</label>
            <textarea name="assigned_users" />

            <input type="submit" ref={register}/>


            {/* <input name="exampleRequired" ref={register({ required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}  */}
        </form>
    )
}

export default Register;