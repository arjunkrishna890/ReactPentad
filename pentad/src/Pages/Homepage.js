import React from "react";
import Marquee from 'C:/Users/Anjali Krishna/Desktop/WAC/React Pentad/pentad/src/Component/1Navbarsegment/marquee.js';
import Navbar from 'C:/Users/Anjali Krishna/Desktop/WAC/React Pentad/pentad/src/Component/1Navbarsegment/navbar';
import Firstcarosel from 'C:/Users/Anjali Krishna/Desktop/WAC/React Pentad/pentad/src/Component/2Caroselsegment/firstcarosel';
import Productsegment from 'C:/Users/Anjali Krishna/Desktop/WAC/React Pentad/pentad/src/Component/3Productsegment/productsegment';
import Pentadsegment from 'C:/Users/Anjali Krishna/Desktop/WAC/React Pentad/pentad/src/Component/4Pentadsegment/pentadsegment';
import Platform from 'C:/Users/Anjali Krishna/Desktop/WAC/React Pentad/pentad/src/Component/5Platformsegment/platform';
import Member from 'C:/Users/Anjali Krishna/Desktop/WAC/React Pentad/pentad/src/Component/6Membersegment/membar';
import Footer from 'C:/Users/Anjali Krishna/Desktop/WAC/React Pentad/pentad/src/Component/7Marqueesegment/blog';
import Blog from 'C:/Users/Anjali Krishna/Desktop/WAC/React Pentad/pentad/src/Component/8Footersegment/footer';


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