import React from "react";
import './pentadsegment.css';

function Pentadsegment(){
    return(
        <div className="pentadmain">
            <div className="pentad">
                <div className="pentadleft">
                <h2>Why Pentad?</h2>
                <p class="description">Financial Product Distribution and Brokerage service at affordable and
                support</p>
                <button class="button">Know more about us</button>
                <div class="content2">
                    <div class="content23">
                        <span class="rupee">0</span><span class="sign">₹</span>
                        <p class="description1">Equity Delivery & Thematic Investments</p>
                    </div>
                    <div class="content24">
                        <span class="rupee">20</span><span class="sign">₹</span>
                        <p class="description1">Intraday, Futures And options</p>
                    </div>
                </div>

                </div>
                <div className="pentadright">
                    <div className="group1">
                        <div class="rightside1">
                            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/06/Goal-Based-Investing.svg"/>
                            <div class="rightside12">
                                <h3>Goal based investing</h3>
                                <p class="description1"> Identify the current situation and invest as per your goals.</p>
                            </div>
                        </div>
                        <div class="rightside1">
                            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/Individual-Specific-Investing-1.svg"/>
                            <div class="rightside12">
                                <h3>Customised Investing</h3>
                                <p class="description1"> Invest based on an individual's risk profile and requirements.</p>
                            </div>
                        </div>
                    </div>
                    <div className="group2">
                        <div class="rightside1">
                            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/Customized-Planning-And-Execution-1.svg"/>
                            <div class="rightside12">
                                <h3>Customized Planning and Executio</h3>
                                <p class="description1"> Based on individual needs, prompt support is provided.</p>
                            </div>
                        </div>
                        <div class="rightside1">
                            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/Timely-Review-1.svg"/>
                            <div class="rightside12">
                                <h3>Timely Review</h3>
                                <p class="description1"> Based on changing financial requirements, timely support is delivered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}export default Pentadsegment