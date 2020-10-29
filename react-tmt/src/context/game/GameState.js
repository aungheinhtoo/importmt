import React, {useReducer} from 'react';
import GameContext from './gameContext';
import GameReducer from './gameReducer';

import {INIT_GAME, SET_DONE, RESET_DONE, MOVE_POS, INC_ERRORS, CHECKPOINT, END_GAME, START_GAME} from '../types';

const GameState = props => {
    const initialState = {
        nodes: [],
        links: [],
        prevNodes: [],

        playerPos: 0,
        numErrors: 0,
        rawTimings: [],
        end: false,

        width: 1036,
        height: 553,
        numPoints: 10,
    };

    const [state, dispatch] = useReducer(GameReducer, initialState);

    const initGame = () => {
        dispatch({type: INIT_GAME});
    };

    const movePos = () => {
        dispatch({type: MOVE_POS});
    };

    const setDone = i => {
        dispatch({type: SET_DONE, i: i});
    };

    const resetDone = () => {
        dispatch({type: RESET_DONE});
    };

    const incErrors = () => {
        dispatch({type: INC_ERRORS});
    }

    const checkpoint = (i) => {
        dispatch({type: CHECKPOINT, i: i});
    }

    const endGame = () => {
        dispatch({type: END_GAME});
    }

    const startGame = () => {
        dispatch({type: START_GAME});
    }

    return (
        <GameContext.Provider
            value={{
                nodes: state.nodes,
                links: state.links,
                prevNodes: state.prevNodes,
                playerPos: state.playerPos,
                numErrors: state.numErrors,

                height: state.height,
                width: state.width,
                numPoints: state.numPoints,
                rawTimings: state.rawTimings,
                end: state.end,

                initGame,
                setDone,
                resetDone,
                movePos,
                incErrors,
                checkpoint,
                endGame,
                startGame
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;
