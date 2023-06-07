import React from "react";
import './firstcarosel.css'

function Firstcarosel(){
    return(
        <div className="caroselcontainer">
            <div className="caroselmain">
                <div className="carosel">
                    <div className="carosel1">
                        <h1>Trade in Future & Options</h1>
                        <p>Flat ₹20 per Order for F&O trades with advanced web portal and apps</p>
                        <button>Open an Account</button>
                        <h3>20₹</h3>
                        <p className="future">Futures and options</p>
                    </div>
                    <div className="carosel2">
                        <img src='https://www.pentadsecurities.com/engine/wp-content/uploads/2023/02/Invest-in-Equity01.png.webp' alt="image"/>
                    </div>
                </div>

                <div className="carosel">
                    <div className="carosel1">
                        <h1>Fixed Deposits</h1>
                        <p>Earn better returns than bank interest at Corporate FDs, Peer to Peer Lending</p>
                        <button>Request a Call Backt</button>
                        <h3>20₹</h3>
                        <p className="future">Futures and options</p>
                    </div>
                    <div className="carosel2">
                        <img src='https://www.pentadsecurities.com/engine/wp-content/uploads/2023/02/Fixed-Deposit.png.webp' alt="image"/>
                    </div>
                </div>
                
                <div className="carosel">
                    <div className="carosel1">
                        <h1>Invest in Equity</h1>
                        <p>Invest in equity from your mobile and web applications for INR 0 brokerage</p>
                        <button>Open Demat Account</button>
                        <h3>0₹</h3>
                        <p className="future">Equity Delivery</p>
                    </div>
                    <div className="carosel2">
                        <img src='https://www.pentadsecurities.com/engine/wp-content/uploads/2023/02/Invest-in-Equity01.png.webp' alt="image"/>
                    </div>
                </div>
                <div className="carosel">
                    <div className="carosel1">
                        <h1>Intradey Trades</h1>
                        <p>Flat 20 per order for intradey trades with advanced web portals and apps</p>
                        <button>Open Demat Account</button>
                        <h3>20₹</h3>
                        <p className="future">Intraday</p>
                    </div>
                    <div className="carosel2">
                        <img src='https://www.pentadsecurities.com/engine/wp-content/uploads/2023/02/Intraday-Trades.png.webp' alt="image"/>
                    </div>
                </div>
                
              
            </div>
        </div>
    )
}export default Firstcarosel