import React, { useReducer } from 'react';
import DataContext from './dataContext';
import DataReducer from './dataReducer';


const DataState = props => {
    const initialState = {
        users: null,
        resultErrors: null
    };
    const [state, dispatch] = useReducer(DataReducer, initialState);

    // Load Options for search bar (Accessors)
    const loadAccessorsOptions = async (token) =>{

        try{
            const res = await fetch("https://cz3002-server.herokuapp.com/listofpatients/",
                {
                    method: "GET",
                    headers: new Headers({token: token})
                }
            );
            const data = await res.json();

            dispatch({
                type: "GET_USERS",
                payload: data
            });
        }catch(err){
            dispatch({
                type: "GET_USERS_FAIL",
                payload: err.response.data
            });
        }
        
    };

    const getUsers = () =>{
        return state.users;
    }


    //Concatenate all User Profiles for Display (Accessors)
    // const loadOptions = () =>{
    //     dispatch({type: "CONCATENATE_RESULTS"})
    // };

    return(
        <DataContext.Provider
            value={{
                users: state.users,
                resultErrors: state.resultErrors,
                // loadOptions,
                loadAccessorsOptions, getUsers
            }}
        >
            {props.children}
        </DataContext.Provider>
    );

};
export default DataState;