import React from "react";
import styled from 'styled-components';
import Background from '../assets/login.jpg'

export default function BackgroundImage() {
        return (
                <BackgroundContainer>
                        <img src={Background} alt="No Internet Connection" />
                </BackgroundContainer>
        )
};

const BackgroundContainer = styled.div`
height:100vh;
width:100vw;
img{
height:100vh;
width:100vw;
}
`

