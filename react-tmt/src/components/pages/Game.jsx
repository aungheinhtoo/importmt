import React, { useContext, useEffect, Fragment } from 'react';
import background from '../Game/background.jpg';

import GameNav from '../../components/layout/GameNav';
import ResultContext from '../../context/results/resultsContext';
import Button from '../Game/Button';
import ResultItem from '../results/ResultItem';
import Spinner from '../layout/Spinner';

import './Game.css';

import GameContext from '../../context/game/gameContext';
import {Link} from "react-router-dom";
import AuthContext from "../../context/authContext";

const letters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ';

const Game = (props) => {
    const gameContext = useContext(GameContext);
    const gameLevel = props.location.state.gameLevel;
    console.log(gameContext);
    console.log("Game Level:", gameLevel);
    const {
        nodes,
        height,
        width,
        end,
        rawTimings,
        numErrors,

        initGame,
        startGame
    } = gameContext;

    const authContext = useContext(AuthContext);
    const { stopLoading, loadUser, isAuthenticated, token, user } = authContext;

    const resultContext = useContext(ResultContext);
    const { results, addResult, loading } = resultContext;


    useEffect(() => {
        if (end && rawTimings.length === nodes.length) {
            addResult(rawTimings, numErrors, isAuthenticated, gameLevel, user, token);
        }
        initGame();

        // eslint-disable-next-line
    }, [end]);

    const gamebox = (
        <div className="img-overlay-wrap">
            <img src={background} alt="empty" width={width} height={height} />
            <svg viewBox={`0 0 ${width} ${height}`}>
                {nodes.map((node, i) => (
                    <Button key={i} i={i} text={(gameLevel==1) ? i+1 : i%2==0 ? (i/2)+1 : letters[(i-1)/2]}></Button>
                ))}
            </svg>
        </div>
    );

    const endscreen = (
        <Fragment>
            <div
                className="jumbotron text-center jumbotron-fluid"
                style={{ backgroundColor: '#f0f8ff' }}
            >
                <div className="container">
                    <h1>Trail Making Test</h1>
                    <h6 style={{ color: '#777' }}>Your Result</h6>
                </div>
            </div>

            <div
                className="container text-center"
                style={{ paddingTop: '16px', paddingBottom: '16px' }}
            >
                {results !== null && !loading ? (
                    <Fragment>
                        {results.length > 0 ? (
                            <ResultItem
                                result={results[results.length - 1]}
                                showDelete={false}
                            ></ResultItem>
                        ) : null}
                    </Fragment>
                ) : (
                    <Spinner />
                )}
                <button type="button" className="btn btn-success" onClick={startGame}>
                    Try Again
                </button>
            </div>

        </Fragment>
    );

    return (
        <div>
            {!end ? (
                <Fragment>
                    <div>
                        <GameNav></GameNav>
                        {gamebox}
                    </div>
                </Fragment>
            ) : (
                <Fragment>{endscreen}</Fragment>
            )}
        </div>
    );
};

export default Game;
