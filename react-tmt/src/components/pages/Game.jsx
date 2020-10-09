import React, { useContext, useEffect, Fragment } from 'react';
import background from '../Game/background.jpg';

import GameNav from '../../components/layout/GameNav';
import Button from '../Game/Button';

import './Game.css';

import GameContext from '../../context/game/gameContext';

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

    useEffect(() => {
        initGame();
        // eslint-disable-next-line
    }, [end]);

    const gamebox = (
        <div className="img-overlay-wrap">
            <img src={background} alt="empty" width={width} height={height} />
            <svg viewBox={`0 0 ${width} ${height}`}>
                {nodes.map((node, i) => (
                    <Button key={i} i={i} text={(gameLevel==1) ? i : i%2==0 ? (i/2)+1 : letters[(i-1)/2]}></Button>
                ))}
            </svg>
        </div>
    );

    const endscreen = (
        <Fragment>
            <div
                className="container text-center"
                style={{ paddingTop: '16px', paddingBottom: '16px' }}
            >
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
