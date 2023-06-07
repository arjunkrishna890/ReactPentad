import React from "react"
import './productsegment.css'

function Productsegment(){
    return(
        <div>
            <div className="product">
            <div className="productwrap">
                    <h3>Choose From Our Products</h3>
                    <ul className="productlist">
                    <li><button className="button1"><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/fixed-deposit.svg"/>Equity</button></li>
                    <li><button className="button1"><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/future-and-option.svg"/>Future & Option</button></li>
                    <li><button className="button1"><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/mutual-funds-1.svg"/>Mutual Fund</button></li>
                    <li><button className="button1"><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/bonds.svg"/>Bonds</button></li>
                    <li><button className="button1"><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/ulisted_shares.svg"/>Listed Shares</button></li>
                    <li><button className="button1"><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/exchange-traded-funds-2.svg"/>Exchange Traded Funds</button></li>   
                    </ul>
                    <div className="productimage">
                        <div className="imagecontainer">
                            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/06/Equity-1-1.png.webp"/>
                        </div>
                                
                            <div className="productlist1">
                                <span className="productlist2">
                                    <h1>0₹</h1>
                                </span>
                                <h2>Invest in ETF at 0 brokerage</h2>
                                    <button className="productbutton">Know more</button> 
                            </div>
                        </div>
            </div>
            
            </div>
        </div>
    )
}export default Productsegment