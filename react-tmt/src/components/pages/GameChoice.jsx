import React from "react";
import { Fragment } from "react";
import {Button} from '../../components/Button'
import {Link} from "react-router-dom";

const gameChoice = () => {
    return(
        <Fragment>
            <div
                className="w3-container w3-content w3-center w3-padding-64"
                style={{ maxWidth: '800px' }}
            >
                <h2>Choose difficulty Level</h2>
                <div className="w3-row">
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        <h3> Level 1</h3>
                        <p className="w3-justify">
                            The nodes are all numbers and just need to connect'em all.
                        </p>
                        <br></br>

                        <Link to="/game">
                        <Button>Select Level 1</Button>
                        </Link>
                    </div>
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        <img src="https://u4w9x9m4.stackpathcdn.com/wp-content/uploads/2020/01/trail-making-test-1024x689.png"
                             className="w3-round w3-image w3-opacity-min"
                        ></img>
                    </div>
                </div>


                <div className="w3-row">
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        <h3> Level 2</h3>
                        <p className="w3-justify">
                            The nodes are a mix of numbers and letters.
                        </p>
                        <br></br>
                        <Link to="/game">
                        <Button>Select Level 2</Button>
                        </Link>
                    </div>
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        <img src="https://u4w9x9m4.stackpathcdn.com/wp-content/uploads/2020/01/trail-making-test-1024x689.png"
                             className="w3-round w3-image w3-opacity-min"
                        ></img>
                    </div>
                </div>

            </div>


        </Fragment>


    )
}

export default gameChoice;