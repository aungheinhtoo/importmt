import React, { Fragment, useContext, useEffect } from 'react';

import GameContext from '../../context/game/gameContext';

function getRandomString(length) {
    // Remove O
    let randomChars = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

const BaitButton = ({ i }) => {
    const gameContext = useContext(GameContext);
    const {
        nodes,
        prevNodes,
        playerPos,
        numPoints,

        setDone,
        movePos,
        incErrors,
        checkpoint,
        endGame
    } = gameContext;

    useEffect(() => {
        // eslint-disable-next-line
    }, []);

    // check(): function to implement logic triggered upon button click
    const check = () => {
            incErrors();
    };

    return (
        <Fragment>
            <Fragment>
                <circle
                    className={i}
                    key={i}
                    cx={nodes[i].x}
                    cy={nodes[i].y}
                    r="15"
                    fill={'#e0701b'}
                    stroke="white"
                    strokeWidth="2"
                    onClick={check}
                />
                <text x={nodes[i].x} y={(nodes[i].y) + 0.2} textAnchor="middle" onClick={check} fill="white">
                    {getRandomString(1)}
                </text>
            </Fragment>
        </Fragment>
    );
};

export default BaitButton;
