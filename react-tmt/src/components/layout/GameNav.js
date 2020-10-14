import React, {useContext, Fragment} from 'react';

import GameContext from '../../context/game/gameContext';
import Errors from '../Game/Errors';
import Stopwatch from "../Game/Stopwatch";


const GameNav = () => {
    const gameContext = useContext(GameContext);
    const {initGame, end} = gameContext;

    return (
        <Fragment>
            <div
                className="jumbotron text-center jumbotron-fluid"
                style={{marginBottom: 0, backgroundColor: '#f0f8ff'}}
            >
                <div className="container">
                    <h1>Trail Making Test</h1>
                    <h6 style={{color: '#777'}}>How to play?</h6>
                    <p>
                        Click on the circles in ascending order.
                        <br></br>
                        Clicking on a circle more than once
                        will increase the error even if it is correct.
                        <br></br>
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div
                        className="col-sm-6 text-center"
                        style={{paddingTop: '32px', paddingBottom: '32px'}}
                    >
                        <Errors></Errors>
                        <Stopwatch></Stopwatch>
                    </div>
                    <div
                        className="col-sm-6 text-center"
                        style={{paddingTop: '40px', paddingBottom: '32px'}}
                    >
                        {!end ? (
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={initGame}
                            >
                                Restart
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default GameNav;
