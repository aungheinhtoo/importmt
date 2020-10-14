import React from "react";
import {Fragment} from "react";
import {Button} from '../../components/Button'
import {Link} from "react-router-dom";
import difficulty1 from "../Game/difficulty1.png"
import difficulty2 from "../Game/difficulty2.png"

const gameChoice = () => {
    return (
        <Fragment>
            <div
                className="w3-container w3-content w3-center w3-padding-64"
                style={{maxWidth: '800px'}}
            >
                <h2>Choose difficulty Level</h2>
                <div className="w3-row">
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        <h3> Level 1</h3>
                        <p className="w3-justify">
                            The nodes are all numbers and just need to connect'em all.
                        </p>
                        <br></br>

                        <Link to={{
                            pathname: "/game",
                            state: {
                                gameLevel: 1,
                            }
                        }}>
                            <Button>Select Level 1</Button>
                        </Link>
                    </div>
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        <img src={difficulty1}
                             className="w3-round w3-image w3-opacity-min"
                        ></img>
                    </div>
                </div>


                <div className="w3-row">
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        <h3> Level 2</h3>
                        <p className="w3-justify">
                            The nodes are a mix of numbers and letters. Follow order of 1,A,2,B...
                        </p>
                        <br></br>
                        <Link to={{
                            pathname: "/game",
                            state: {
                                gameLevel: 2,
                            }
                        }}>
                            <Button>Select Level 2</Button>
                        </Link>
                    </div>
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        <img src={difficulty2}
                             className="w3-round w3-image w3-opacity-min"
                        ></img>
                    </div>
                </div>

            </div>


        </Fragment>


    )
}

export default gameChoice;