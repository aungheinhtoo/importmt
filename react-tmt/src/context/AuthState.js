import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import axios from 'axios';

const AuthState = props => {
    const initialState = {
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      loading: true,
      user: null,
      error: null
    };
  
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const register_ = async formData => {
    
        try {
          const res = await axios.post('https://cz3002-server.herokuapp.com/auth/register', formData);
    
          dispatch({
            type: "REGISTER_SUCCESS",
            payload: res.data //token
          });

        console.log(res.data);
    
        //loadUser();
        } catch (err) {
          dispatch({
            type: "REGISTER_FAIL",
            payload: err.response.data.msg
          });

          console.log(err.response.data.msg);

        }
      };
    
    return(
        <AuthContext.Provider
            value={{
                // token: state.token,
                // isAuthenticated: state.isAuthenticated,
                // loading: state.loading,
                // user: state.user,
                // error: state.error, 
                register_
            }}>{props.children}
        </AuthContext.Provider>
    );

};
export default AuthState;