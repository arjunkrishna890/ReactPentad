import React from "react";
import Marquee from '../Component/1Navbarsegment/marquee.js';
import Navbar from '../Component/1Navbarsegment/navbar';
import Firstcarosel from '../Component/2Caroselsegment/firstcarosel';
import Productsegment from '../Component/3Productsegment/productsegment';
import Pentadsegment from '../Component/4Pentadsegment/pentadsegment';
import Platform from '../Component/5Platformsegment/platform';
import Member from '../Component/6Membersegment/membar';
import Blog from '../Component/7Marqueesegment/blog';
import Footer from "../Component/8Footersegment/footer";

function Homepage(){
    return(
        <div>
        <Marquee/>
        <Navbar/>
        <Firstcarosel/>
        <Productsegment/>
        <Pentadsegment/>
        <Platform/>
        <Member/>
        <Blog/>
        <Footer/>
      </div>
    )
}export default Homepage