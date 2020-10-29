import React, {useContext, useEffect} from "react";
import { Fragment } from "react";
import AuthContext from "../../context/authContext";




const Home = () => {
    const authContext = useContext(AuthContext);
    const {
        error,
        user,
        domain,
        isAuthenticated,
        stopLoading
    } = authContext;
    useEffect (()=>{
    });
    return(
        <Fragment>
            <div
            className="w3-container w3-content w3-center w3-padding-64"
            style={{background: "#f0f8ff", color : "black"}}
            >
                <h2>Trail Making Test</h2>
                <p className="w3-opacity">
                    <i>What is TMT?</i>
                </p>
                <div className="w3-row">
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        <p className="w3-justify">
                            The Trail Making Test is a neuropsychological test of visual attention
                            and task switching. It consists of two parts in which the subject is
                            instructed to connect a set of 25 dots as quickly as possible while
                            still maintaining accuracy. It is meant to detect cognitive
                            impairment and discover dyslexic difficulties.
                        </p>
                    </div>
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        {/* <img src="https://u4w9x9m4.stackpathcdn.com/wp-content/uploads/2020/01/trail-making-test-1024x689.png" */}
                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5rWBOYgIieyGkO20PSFCl4KHL-Uvyst7GXw&usqp=CAU"
                            className="w3-round w3-image w3-opacity-min"
                        ></img>
                    </div>
                </div>
                <br></br>
                <br></br>

            </div>
            <div 
                className="w3-container w3-content w3-center w3-padding-64"
            >
                    <h2>Tutorial</h2>
                    <p className="w3-opacity">
                        <i> How to play? </i>
                    </p>

                    <div className="w3-row">
                        <div className="w3-col m6 w3-padding-large w3-hide-small">
                            <img src="https://cogquiz.com/images/desktops/tnt_1.png"
                                className="w3-round w3-image w3-opacity-min"
                            ></img>
                        </div>
                        
                        <div className="w3-col m6 w3-padding-large w3-hide-small">
                            <p className="w3-justify">
                                The basics of a TMT are very simple:<br/>
                                1. Click on the node labelled "1" .<br/>
                                2. Click on the node labelled "2" .<br/>
                                3. A line will connect the 2 nodes. <br/>
                                4. Repeat step 2 and 3.<br/>
                            
                            
                            <br></br>

                                Level 1 requires you to follow the ascending order of numbers (eg. 1, 2, 3, 4,...).<br/>
                                Level 2 requires you to a number to its corresponding letter before increasing in number (eg. 1, a, 2, b, ...)<br/>

                            <br></br>

                                Enjoy your TMT experience! <br/>
                            </p>
                        </div>

                    </div>

            </div>


            <div 
                className="w3-container w3-content w3-center w3-padding-64"
                style={{background: "#f0f8ff", color : "black"}}
            >
                    <h2>About Us</h2>
                    <p className="w3-justify w3-center">
                        Formed by 7 individuals who wanted to support the medical industry with their programming skills, importTMT was created as their first foray into the world of Telemedicine.
                        importTMT is a robust and reliable implementation of the Trail Making Test (TMT) on an online platform, designed specifically for quick, easy access to a Trail Making Test anytime.<br/>
                    
                    </p>
                    <br></br>
            </div>

            <div className="w3-container w3-content w3-center w3-padding-64"
            >
                <h2>Contact Us</h2>
                <div class="w3-row-padding ">
                    <div class="w3-third">
                        <h5> Address </h5>
                        <p> 50 Nanyang Ave </p>
                        <p> Singapore 639798 </p>
                    </div>
                    <div class="w3-third">
                        <h5> Contacts </h5>
                        <p> Office : 98765421 </p>
                        <p> Hotline : 87564212</p>
                        <p> Fax: 445463232 </p>
                    </div>
                    <div class="w3-third ">
                        <h5> Enquires </h5>
                        <p> For further enquires, please contact us at tmt@email.com.sg </p>

                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </Fragment>


    )
}

export default Home;