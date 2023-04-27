import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import ProfNoBack from './assets/ProfNoBack.png'
import { Fade } from 'react-awesome-reveal';

const ProfComponent = () => {
    return (
            <Container id='home'>
                <Texts>
                    <h4>Hi, I'm</h4>
                    <h1 className="blue">Kedgard Cordero</h1>
                    <h3>Full Stack Web Developer</h3>
                    <p>My journey into web development started when a close friend introduced me to the field, and I immediately knew this was my calling. I threw everything down, and pursued my passion by graduating from the University of Minnesota Coding Boot Camp.</p> 
                    
                    <p>This is what I was meant to do, and I love every second of it.</p>
                    <button>Let's Create Something</button>
                    <Social>
                        <p>Check out my</p>
                        <div className="social-icons">
                            <span><a href="#"><FaLinkedinIn/></a></span>
                            <span><a href="#"><FaGithub/></a></span>
                        </div>
                    </Social>
                </Texts>
                <Profile>
                    <div className='img-container'>
                        <img src={ProfNoBack} alt="Kedgard Cordero" />
                    </div>
                </Profile>
            </Container>
    )
}

export default ProfComponent;

const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding-top: 1rem;
    width: 80%;
    height: 70vh;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 1;
    @media (max-width: 840px) {
        width: 90%;
    }
    /* @media (max-width: 640px) {
        flex-direction: column;
    } */
`;
const Texts = styled.div`
    flex: 1;
    h4 {
        /* padding: 1rem 0; */
        font-weight: 400;
        font-size: 1rem;
    }
    h1 {
        font-size: 1rem;
        letter-spacing: 2px;
    }
    h3 {
        font-weight: 500;
        font-size: 1.1rem;
        /* padding-bottom: 1.2rem; */
        text-transform: capitalize;
    }
    p {
        font-weight: 300;
    }
    button {
        padding: 0.7rem 2rem;
        margin-top: 1rem;
        cursor: pointer;
        background-color: #0077b3;
        border: none;
        color: white;
        font-weight: 500;
        filter: drop-shadow(0px 10px 10px #01be9551);
        :hover {
            filter: drop-shadow(0px 10px 10px #01be9570);
        }
    }
`
const Social = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
        font-size: 0.9rem;
        @media (max-width: 690px) {
            font-size: 0.7rem;
        }
    }
    .social-icons {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
        width: 2.3rem;
        height: 2rem;
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        background-color: #0077b3;
        position: relative;
        transition: transform 400ms ease-in-out;
        :hover {
            transform: rotate(360deg);
        }
        }
        a {
        color: #fff;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        }
    }
`;
const Profile = styled.div`
    img {
        width: 20rem;
        /* margin-left: 21rem; */
        filter: drop-shadow(0px 10px 10px #0077b3);
        transition: transform 400ms ease-in-out;
        margin-bottom: 5rem;
        @media (max-width: 1100px) {
            margin-left: 10rem;
        }
        @media(max-width: 970px) {
            margin-left: 8rem;
        }
        @media (max-width: 790px) {
        width: 20rem;
        margin-left: 5rem;

        }
        /* @media (max-width: 661px) {
        width: 18rem;
        margin-left: 4rem;

        } */
        @media (max-width: 650px) {
           display: none

        }
    }
    :hover img {
        transform: translateY(-10px);
    }
`;


