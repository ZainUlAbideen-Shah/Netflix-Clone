import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Avengers from '../assets/avengers.jpg';
import TopNav from "../components/TopNav";
import Card from "../components/Card";
import { getGenres, fetchMovies } from "../store";
import SliderContainer from "../components/SliderContainer";


export default function Netflix() {
        const [isScrolled, setIsScrolled] = useState(false);

        const navigate = useNavigate();

        const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
        const movies = useSelector((state) => state.netflix.movies);

        const dispatch = useDispatch();

        useEffect(() => {
                dispatch(getGenres())
        }, [])

        useEffect(() => {
                if (genresLoaded) {
                        dispatch(fetchMovies({ type: 'all' }))
                }
        })

        window.onscroll = () => {
                setIsScrolled(window.pageYOffset === 0 ? false : true)
                // return () => (window.onscroll = null)
        }

        // console.log(isScrolled)

        return (
                <HeroContainer>
                        <div className="hero">
                                <TopNav isScrolled={isScrolled} />
                                <img className="backgroundImage" src={Avengers} alt="Avengers" />

                                <div className="container">
                                        <div className="title">
                                                <h1>Avengers</h1>
                                                <p>Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.</p>
                                        </div>
                                        <div className="buttons">
                                                <button onClick={() => navigate('/player')} className="playBtn">PLay</button>
                                                <button className="moreBtn">More...</button>
                                        </div>
                                </div>
                        </div>
                        <SliderContainer movies={movies} />
                </HeroContainer>
        )
};

const HeroContainer = styled.div`
background-color: black;
.hero{
position: relative;
.backgroundImage{
filter:brightness(40%)
}
img{
width:100%;
}
.container{
position:absolute;
bottom:1rem;
.title{
h1{
margin-left: 5rem;
text-transform: uppercase;
font-size:73px;
background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
}
p{
margin-bottom: 50px;
width:640px;
margin-left: 5rem;
font-family: 'lexend Deca',sans-serif;
color: white;
}
}
.buttons{
display:flex;
margin: 5rem;
gap: 2rem;
}
.playBtn{
display: flex;
align-items: center;
justify-content: center;
color: #ed2424;
border-radius: 1rem;
font-size:1.4rem ;
gap: 1rem;
padding: 0.9rem 1.8rem ;
border: none;
cursor: pointer;
}
.moreBtn{
display: flex;
align-items: center;
justify-content: center;
color: white;
background-color: black;
border-radius: 1rem;
font-size:1.4rem ;
gap: 1rem;
padding: 0.9rem 1.8rem ;
border: 0.1rem solid white;
cursor: pointer;
}
}
}
`

