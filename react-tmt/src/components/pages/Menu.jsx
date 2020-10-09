import React from 'react';
import tmtgame from "../../icons/tmt_game.png"
import logout from "../../icons/logout.png"
import records from "../../icons/records.png"


const Menu = () =>{
    return(
        <div
        className="w3-container w3-content w3-center w3-padding-64"
        style={{width: 10000 ,position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}
        >
            <div className="w3-quarter">
                <img src={tmtgame}
                    className="w3-opacity-min"
                    style={{width:"100%", maxWidth:200, maxHeight:200}}
                ></img>
                <p>Play Game</p>
            </div>
            <div className="w3-quarter ">
                <img src={records}
                    className="w3-opacity-min"
                    style={{width:"100%", maxWidth:200, maxHeight:200}}
                ></img>
                <p>View Records</p>
            </div>
            <div className="w3-quarter" >
                <img src={logout}
                    className="w3-opacity-min"
                    style={{width:"100%", maxWidth:200, maxHeight:200}}
                ></img>
                <p>Search User</p>
            </div>
            <div className="w3-quarter">
                <img src={logout}
                    className="w3-opacity-min"
                    style={{width:"100%", maxWidth:200, maxHeight:200}}
                ></img>
                <p>Logout</p>
            </div>
        </div>
    );
};

export default Menu;