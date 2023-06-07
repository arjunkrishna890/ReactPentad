import React from "react";
import './blog.css'

function Blog(){
    return(
        <div>
            <div className="blog">
            <h2>Recent Blog</h2>
            <div className="blogflex">
                <div className="blogged">
                    <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2023/05/website-blog-poster-01-scaled.jpg.webp"/>
                    <p>May 25,2023</p>
                    <h5>How to do stock market investments?</h5>
                    <h6> How to do stock market investm... </h6>
                </div>
                <div className="blogged">
                    <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/06/Insurance-As-An-Investment-1.jpeg.webp"/>
                    <p>May 25,2023</p>
                    <h5>Insurance as an investment</h5>
                    <h6>Insurance is never an investment, rather a protection against risks and contingencies. </h6>
                </div>
                <div className="blogged">
                    <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/06/What-is-SIP-1.jpeg.webp"/>
                    <p>June 6,2023</p>
                    <h5>What is SIP/Systematic Investment Plan</h5>
                    <h6> SIP or Systematic Investment Plan has been gaining immense popularity in the financial mainstream these </h6>
                </div>

            </div>
            <button className="button">View all Buttons</button>

            </div>
        </div>
    )
}export default Blog