import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Slider from "react-slick";
import SimpleSlider from "./Common/SimpleSlider";
import styled from "styled-components";


const Home = () => {

    return(
        <>
        <Header></Header>
            <div style={{paddingTop:"100px"}}>
                <SimpleSlider/>
            </div>
            <h1>스토리 🔥</h1>
            <h1>New✨ 스터디 💬</h1>
            
        </>

    );
};

export default Home;