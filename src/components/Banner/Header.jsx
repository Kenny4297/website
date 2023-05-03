import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaReact } from "react-icons/fa";
import GoogleAnalytics from "../GoogleAnalytics";

const Header = () => {
    const [bar, setBar] = useState(false);
    return (
        <Container bar={bar}>
            <GoogleAnalytics />
            <Logo>
                <RotatingReact data-testid="rotating-react" size={30} />
                <h1>Portfolio</h1>
            </Logo>
            <Nav bar={bar}>
                <span>
                    <a href="#services" data-testid="services-link">Services</a>
                </span>
                {/* <span><a href="#projects">Projects</a></span> */}
                <span>
                    <a href="#recommendation">Recommendations</a>
                </span>
                <span>
                    <a href="#footer">Connect</a>
                </span>
            </Nav>
            <div onClick={() => setBar(!bar)} className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media (max-width: 763px) {
        width: 90%;
    }
    .bars {
        display: none;
    }
    @media (max-width: 640px) {
        .bars {
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar {
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${(props) =>
                    props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;
                :before,
                :after {
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }
                :before {
                    transform: ${(props) =>
                        props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }
                :after {
                    transform: ${(props) =>
                        props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
        font-size: 1.8rem;
    }
    h1 {
        font-weight: 600;
        font-size: 1.8rem;
        color: white;
    }
`;

const Nav = styled.div`
    @media (max-width: 640px) {
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #0077b3;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${(props) => (props.bar ? "100vh" : 0)};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span {
        margin-left: 1rem;
        a {
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            :before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before {
                transform: scale(1);
                transform-origin: left;
            }
            :hover {
                opacity: 0.7;
            }
        }
    }
`;

const colorPulse = keyframes`
    0% {
        fill: white;
    }
    50% {
        fill: #0077b3;
    }
    100% {
        fill: white;
    }
`;

const RotatingReact = styled(FaReact)`
    animation: 3s linear infinite, spin 10s linear infinite;
    &.react-icons-spin {
        display: inline-block;
        animation: 3s linear infinite, spin 3s linear infinite;
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    & path:nth-of-type(1) {
        stroke: white;
        animation: ${colorPulse} 8s linear infinite;
    }
`;
