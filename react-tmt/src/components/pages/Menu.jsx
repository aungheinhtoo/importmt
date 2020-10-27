import React, {useContext, useEffect } from 'react';
import tmtgame from "../../icons/tmt_game.png"
import logout_ from "../../icons/logout.png"
import records from "../../icons/records.png"
import {Link} from  "react-router-dom"
import AuthContext from "../../context/authContext";

const Menu = props =>{
    const authContext = useContext(AuthContext);
    const {
        error,
        user,
        domain,
        isAuthenticated, 
        stopLoading,
        logout
    } = authContext;

    // useEffect(()=>{
    //     if (isAuthenticated) {

    //     } else{
    //         stopLoading();
    //     }
        
    // },[error, isAuthenticated]);
    const changeLink = domain =>{
        var link ="/404"
        if (domain === "Participant"){
            link = "/result";
        }else if (domain === "Assessor"){
            link = "/a_search";
        }
        return(link);
    }

    return(
        <div className="w3-container  w3-padding-64">
            <h1> Welcome {user} !</h1>
            <div
            className="w3-container w3-content w3-center w3-padding-32"
            style={{width: 10000 ,position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}
            >
                
                <div className="w3-third">
                    <Link to ="/gameChoice">
                        <img src={tmtgame}
                            className="w3-opacity-min"
                            style={{width:"100%", maxWidth:200, maxHeight:200}}
                        ></img>
                        <p>Play Game</p>
                    </Link>
                </div>
                <div className="w3-third ">

                    <Link to ={changeLink(domain)}>
                        <img src={records}
                            className="w3-opacity-min"
                            style={{width:"100%", maxWidth:200, maxHeight:200}}
                        ></img>
                        <p>View Records</p>
                    </Link>
 
                </div>
                <div className="w3-third">
                    <a href ="/home"
                        onclick={logout}
                    >
                        <img src={logout_}
                            className="w3-opacity-min"
                            style={{width:"100%", maxWidth:200, maxHeight:200}}
                            
                        ></img>
                        <p>Logout</p>
                    </a>
                </div>
            </div>

        </div>
        
    );
};

export default Menu;