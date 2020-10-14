import React, {useReducer} from 'react';
import axios from 'axios';
import ResultsContext from './resultsContext';
import ResultsReducer from './resultsReducer';

import {
    ADD_RESULT,
    CLEAR_RESULTS,
    RESULT_ERROR
} from '../types';

const ResultsState = props => {
    const initialState = {
        results: null,
        error: null
    };

    const [state, dispatch] = useReducer(ResultsReducer, initialState);


    // Add Result
    const addResult = async (rawTimings, numErrors, isAuthenticated, difficulty, name, token) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        };

        let timings = [];
        for (let i = 1; i < rawTimings.length; i++) {
            timings[i - 1] = rawTimings[i] - rawTimings[i - 1];
        }
        let totalTime = rawTimings[rawTimings.length - 1] - rawTimings[0];


        try {
            if (isAuthenticated) {
                // Post: user_id,time_taken,accuracy,difficulty,pass_fail
                let data = {
                    'user_id': name,
                    'time_taken': totalTime,
                    'accuracy': 5 - numErrors / 5,
                    'difficulty': difficulty == 1,
                    'pass_fail': true
                };
                console.log("Data: ", data);
                const res = await axios.post('https://cz3002-server.herokuapp.com/userattempts', data, config);
                console.log(res)
                dispatch({type: ADD_RESULT, payload: {timings, numErrors, totalTime, name}, local: true});
            } else {
                dispatch({
                    type: ADD_RESULT,
                    payload: {timings, numErrors, totalTime},
                    local: true
                });
            }
        } catch (err) {
            resultError(err);
        }
    };


    const clearResults = () => {
        dispatch({type: CLEAR_RESULTS});
    };

    const resultError = err => {
        dispatch({type: RESULT_ERROR, payload: err.response});
    };

    return (
        <ResultsContext.Provider
            value={{
                results: state.results,
                error: state.error,

                addResult,
                clearResults
            }}
        >
            {props.children}
        </ResultsContext.Provider>
    );
};

export default ResultsState;
