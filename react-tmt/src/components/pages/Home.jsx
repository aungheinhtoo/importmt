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
                        Formed by 7 individuals who wanted to support the medical industry with their programming skills, importTMT was created as their first foray into the world of Telemedicine.<br/>
                        importTMT is a robust and reliable implementation of the Trail Making Test (TMT) on an online platform, designed specifically for quick, easy access to a Trail Making Test anytime.<br/>
                        Our TMT is available for use for users in the educational and medical industry. Also, our TMT is automatically generated for you so you don't need to create your own test, making for a quick, reliable experience.<br/>
                    </p>
            </div>
            <div 
                className="w3-container w3-content w3-center w3-padding-32"
                style={{background: "linear-gradient(90deg, rgb(110, 94, 254) 0%, rgba(73,63,252,1) 100%)", color : "white"}}
            >
                    <h2>Tutorial</h2>
                    <p className="w3-justify w3-center">
                        Never tried a TMT before? This section has you covered!<br/>
                        There are 2 difficulties available; the 2nd difficulty level is locked until you're sufficiently acquainted with the 1st difficulty level.<br/>

                        The basics of a TMT are very simple:<br/>
                        1. Click on the circle labelled "1" and hold the button down.<br/>
                        2. Drag the line that appears to the next circle.<br/>
                        3. Repear step 2 and 3 until complete.<br/>

                        On the 1st difficulty, you'll need to drag in ascending order of numbers (eg. 1, 2, 3, 4,...).<br/>
                        However, the 2nd difficulty requires you to drag from a number to its corresponding letter before increasing in number (eg. 1, a, 2, b, ...)<br/>

                        You will be graded on 2 things:<br/>
                        1. Accuracy. The number of mistakes that you make will be recorded to help you improve in further attempts.<br/>
                        2. Time taken. You will also be graded as to how fast you can complete the test.<br/>

                        Enjoy your TMT experience! <br/>
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



            {/* <div className="w3-content">   
                <div className="w3-center" >
                    <h1>What is TMT?</h1>
                </div>
                <div>
                    <h1>About Us</h1>
                </div>
                <div>
                    <h1>Contact Us</h1>
                    <p>The Trail Making Test is a neuropsychological test of visual attention
                    and task switching. It consists of two parts in which the subject is
                    instructed to connect a set of 25 dots as quickly as possible while
                    still maintaining accuracy. It is sensitive to detecting cognitive
                    impairment associated with dementia; for example, Alzheimer's disease.</p>
                </div>
            </div> */}
        </Fragment>


    )
}

export default Home;