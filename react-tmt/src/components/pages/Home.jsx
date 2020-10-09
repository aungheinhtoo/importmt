import React from "react";
import { Fragment } from "react";

const Home = () => {

    return(
        <Fragment>
            <div
            className="w3-container w3-content w3-center w3-padding-64"
            style={{ maxWidth: '800px' }}
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
                            still maintaining accuracy. It is sensitive to detecting cognitive
                            impairment associated with dementia; for example, Alzheimer's disease.
                        </p>
                    </div>
                    <div className="w3-col m6 w3-padding-large w3-hide-small">
                        <img src="https://u4w9x9m4.stackpathcdn.com/wp-content/uploads/2020/01/trail-making-test-1024x689.png"
                            className="w3-round w3-image w3-opacity-min"
                        ></img>
                    </div>
                </div>
                <br></br>
                <br></br>

            </div>
            <div 
                className="w3-container w3-content w3-center w3-padding-32"
                style={{background: "linear-gradient(90deg, rgb(110, 94, 254) 0%, rgba(73,63,252,1) 100%)", color : "white"}}
            >
                    <h2>About Us</h2>
                    <p className="w3-justify w3-center">
                        We are a team of 6 who aims to provide TMT web services to the larger community. We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
            </div>
            <div className="w3-container w3-content w3-center w3-padding-32">
                <h2>Contact Us</h2>
                <div class="w3-row-padding w3-padding-32">
                    <div class="w3-third w3-margin-bottom">
                        <h5> Address </h5>
                        <p> 50 Nanyang Ave </p>
                        <p> Singapore 639798 </p>
                    </div>
                    <div class="w3-third w3-margin-bottom">
                        <h5> Contacts </h5>
                        <p> Office : 98765421 </p>
                        <p> Hotline : 87564212</p>
                        <p> Fax: 445463232 </p>
                    </div>
                    <div class="w3-third w3-margin-bottom">
                        <h5> Enquires </h5>
                        <p> For further enquires, please contact us at tmt@email.com.sg </p>

                    </div>
                </div>


            </div>
        </Fragment>


    )
}

export default Home;