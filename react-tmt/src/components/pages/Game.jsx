import React, { useContext, useEffect, Fragment } from 'react';
import background from '../Game/background.jpg';

import GameNav from '../../components/layout/GameNav';
import Button from '../Game/Button';

import './Game.css';

import GameContext from '../../context/game/gameContext';

const Game = () => {
    const gameContext = useContext(GameContext);
    console.log(gameContext);
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
                    <Button key={i} i={i}></Button>
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
