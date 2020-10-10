import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

const AuthState = props => {
    const initialState = {
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      loading: true,
      user: null,
      error: null,
      domain: null
    };
  
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    
    const loadUser = () => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      } else{dispatch({ type: "AUTH_ERROR" });}
        
    };

    const register_ = async formData => {
    
        try {
          const res = await axios.post('https://cz3002-server.herokuapp.com/auth/register', formData);
    
          dispatch({
            type: "REGISTER_SUCCESS",
            payload: res.data //token
          });

    
        loadUser();
        } catch (err) {
          dispatch({
            type: "REGISTER_FAIL",
            payload: err.response.data
          });

        }
      };

    const login = async formData => {
      try {
        const d= {
          "user_id" : formData.nric,
          "user_password" : formData.password,
        }
        const res = await axios.post('https://cz3002-server.herokuapp.com/auth/login', d);
        //**modified setting proxy in package.json; posts to 'http://localhost:5000/api/users
        // alert(JSON.stringify(formData));
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data, //token
          input: formData.nric,
          domain: formData.domain
        });

        loadUser();

      } catch(err){
        dispatch({
          type: "LOGIN_FAIL",
          payload: err.response.data
        });
      }
    };

    const logout = () => {
      dispatch({ type: "LOGOUT" });
    };

      // Clear Errors
    const clearErrors = () => {
      dispatch({ type: "CLEAR_ERRORS" });
    };

    // Stop Loading
    const stopLoading = () => {
      dispatch({ type: "STOP_LOADING"});
    }
    
    
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error, 
                domain: state.domain,
                register_, login, logout, clearErrors, stopLoading
            }}>{props.children}
        </AuthContext.Provider>
    );

};
export default AuthState;