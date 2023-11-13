import React from "react";
import styled from "styled-components";
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
        const navigate = useNavigate();
        return (
                <HeaderContainer>
                        <div className="logo">
                                <img src={Logo} alt="Netflix" />
                        </div>
                        <button onClick={() => { return navigate(props.login ? '/login' : '/signup') }}>
                                {props.login ? 'Login' : 'SignUp'}
                        </button>
                </HeaderContainer>
        )
};

const HeaderContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:1rem 1rem;
.logo{
img{
height:6rem;
cursor:pointer;
}
}
button{
padding:0.5rem 1rem;
background-color:red;
border:none;
cursor:pointer;
color:white;
border-radius:0.2rem;
font-weight: bolder;
font-size:1.05rem;
margin-bottom: 20px;
margin-right: 20px;
}
`

