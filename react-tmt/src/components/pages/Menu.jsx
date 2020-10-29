import React, {Fragment, useContext, useEffect} from 'react';
import tmtgame from "../../icons/tmt_game.png"
import logout_ from "../../icons/logout.png"
import records from "../../icons/records.png"
import {Link} from "react-router-dom"
import AuthContext from "../../context/authContext";
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import DateForm from "../modal/dateForm";

const Menu = props => {
    const authContext = useContext(AuthContext);
    // const {isShowing, toggle} = useModal();
    const [isOpen, setIsOpen] = React.useState(false);
    let seen = false;
    const {
        error,
        user,
        domain,
        isAuthenticated,
        stopLoading,
        logout
    } = authContext;

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    // useEffect(()=>{
    //     if (isAuthenticated) {

    //     } else{
    //         stopLoading();
    //     }

    // },[error, isAuthenticated]);
    const changeLink = domain => {
        var link = "/404"
        if (domain === "Participant") {
            link = "/result";
        } else if (domain === "Assessor") {
            link = "/a_search";
        }
        return (link);
    }

        //
        // <Link to={changeLink(domain)}>
        //     <img src={records}
        //          className="w3-opacity-min"
        //          style={{width: "100%", maxWidth: 200, maxHeight: 200}}
        //     ></img>
        //     <p>View Records</p>
        // </Link>

    return (
        <div className="w3-container  w3-padding-64">
            {/*<Modal*/}
            {/*    isShowing={isShowing}*/}
            {/*    hide={toggle}*/}
            {/*/>*/}
            <h1> Welcome {user} !</h1>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>Please Select the date range.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DateForm linkTo ={changeLink(domain)} />
                </Modal.Body>
            </Modal>
            <div
                className="w3-container w3-content w3-center w3-padding-32"
                style={{
                    width: 10000,
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >

                <div className="w3-third">
                    <Link to="/gameChoice">
                        <img src={tmtgame}
                             className="w3-opacity-min"
                             style={{width: "100%", maxWidth: 200, maxHeight: 200}}
                        ></img>
                        <p>Play Game</p>
                    </Link>
                </div>
                <div className="w3-third ">

                    <Button onClick={showModal} class="btn" style={{'background-color': 'transparent'}}>
                        <img src={records}
                             className="w3-opacity-min"
                             style={{width: "100%", maxWidth: 200, maxHeight: 200, "pointer-events": "all"}}
                        ></img>

                    </Button>
                    <p>View Records</p>

                </div>
                <div className="w3-third">
                    <a href="/home"
                       onclick={logout}
                    >
                        <img src={logout_}
                             className="w3-opacity-min"
                             style={{width: "100%", maxWidth: 200, maxHeight: 200}}

                        ></img>
                        <p>Logout</p>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Menu;