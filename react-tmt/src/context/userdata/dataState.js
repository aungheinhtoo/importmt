import React, { useReducer } from 'react';
import DataContext from './dataContext';
import DataReducer from './dataReducer';


const DataState = props => {
    const initialState = {
        users: []
    };
    const [state, dispatch] = useReducer(DataReducer, initialState);

    // Load Options for search bar (Accessors)
    const loadOptions = () =>{
        dispatch({type: "GET_USERS"})
    };


    //Concatenate all User Profiles for Display (Accessors)
    const loadOptions = () =>{
        dispatch({type: "CONCATENATE_RESULTS"})
    };

    return(
        <DataContext.Provider
            values={{
                users: state.users,
                loadOptions,
                loadAccessorsOptions
            }}
        >
            {props.children}
        </DataContext.Provider>
    )

}