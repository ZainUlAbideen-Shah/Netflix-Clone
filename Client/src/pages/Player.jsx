import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

export default function Player() {

        const navigate = useNavigate();

        return (
                <PlayerContainer>
                        <div className="player">
                                <div className="backArrow">
                                        <BsArrowLeft onClick={() => navigate(-1)} />
                                </div>
                                <video autoPlay loop controls src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"></video>
                        </div>
                </PlayerContainer>
        )
};

const PlayerContainer = styled.div`
.player{
width: 100vw;
height: 100vh;
.backArrow{
position: absolute;
padding: 2rem;
z-index: 1;
svg{
font-size: 3rem;
cursor: pointer;
color: white;
}
}
video{
height:100%;
width:100%;
}
}
`
