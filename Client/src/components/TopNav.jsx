import React from "react";
import { AiOutlineLogout } from 'react-icons/ai';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";

import Logo from '../assets/logo.png';
import { firebaseAuth } from '../utils/firebase-config'

export default function TopNav({ isScrolled }) {

        const navlinks = [
                { name: 'Home', link: '/' },
                { name: 'Tv Shows', link: '/tv' },
                { name: 'My List', link: '/mylist' },
                { name: 'Movies', link: '/movies' },
        ];

        const navigate = useNavigate();

        onAuthStateChanged(firebaseAuth, (currentUser) => {
                if (!currentUser) navigate('/login')
        })

        return (
                <NavContainer>
                        <nav className={`${isScrolled ? 'scrolled' : 'notScrolled'}`}>
                                <div className="leftSide">
                                        <div className="logo">
                                                <img src={Logo} alt="Logo" />
                                        </div>
                                        <ul className="links">
                                                {
                                                        navlinks.map(({ name, link }) => {
                                                                return (
                                                                        <li key={name}><Link to={link}>{name}</Link></li>
                                                                )
                                                        })
                                                }
                                        </ul>
                                </div>
                                <div className="rightSide">
                                        <button onClick={() => signOut(firebaseAuth)}>
                                                <AiOutlineLogout />
                                        </button>
                                </div>
                        </nav>

                </NavContainer>
        )
};

const NavContainer = styled.div`
.notScrolled{
display:flex;
}
.scrolled{
display:flex;
background-color: black;
}
nav{
position:fixed;
top:0;
height:6rem;
width:100%;
justify-content:space-between;
z-index: 2;
align-items:center;
padding:0.4;
transition:0.3s ease-in-out;
.leftSide{
display: flex;
align-items:center;
justify-content: center;
gap:2rem;
margin-left: 3.5rem;
.logo{
display:flex;
justify-content:center;
align-items: center;
img{
width:18rem;
height: 6rem;
}
}
}
}
.links{
display:flex;
list-style-type:none;
gap: 2rem;
li{
a{
color:white;
font-size: 20px;
&:hover{
color: #ed2424;
}
}
}
}
.rightSide{
display:flex;
align-items: center;
gap: 1rem;
button{
background-color: #ed2424;
border: none;
cursor: pointer;
border-radius: 50%;
margin-right: 1rem;
}
&:focus{
outline:none;
}
svg{
color:white;
font-size: 2rem;
}
}
`

