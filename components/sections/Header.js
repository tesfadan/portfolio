import Link from "next/link";
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import MenuIcon from "../icons";
import { LinkButton } from "../UI/Button";

export default function Header({ show, ...props }) {
    const { setMenu, menu } = props;

    const NavLink = ({ href, title }) => <li className={`navLink`}>
        <AnchorLink className="underline" href={href}>{title}</AnchorLink>
    </li>
    return (
        <Container style={show ? { top: 0, opacity: 1 } : { top: -20, opacity: 0 }}>
            <AnchorLink href="#home" rel="noreferrer" onClick={() => setMenu(false)}>
                <img src="/assets/logo.svg" width="50" height="32" alt="Home" />
            </AnchorLink>
            <nav>
                <ul>
                    <li>
                        <LinkButton className="button small" href="/documents/Tesfa_Demissie_Resume.pdf">Resume</LinkButton>
                    </li>

                    <NavLink href="#contact" title="Contact" />
                    <NavLink href="#portfolio" title="Portfolio" />
                    <NavLink href="#about" title="About" />
                </ul>
            </nav >
            <MenuIcon {...props} show={show} />
        </Container >
    );
}


const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:46px 60px;
    position:fixed;
    top: 0px;
    width: 100%;
    z-index: 100;
    transition: 0.2s ease-in;
    nav, ul, a{
        display: flex;
        align-items:center;
    }
    ul{
        display: flex;
        justify-self: flex-end;
        flex-flow: row-reverse;
    }
    li{
        margin-left: 32px;
        font-weight: 500;
        color:#dadfe6;
    }
    a{
        color:#dadfe6;
        font-size:16px;
        font-weight:400;
    }
    img{
        opacity:0.8;
    }
    .navLink{
        transition: 0.1s ease-in;
    }

    .customMenuIcon{
        position: absolute;
        right: 20px;
        display:none;
        z-index: 200;
    }

    @media(max-width: 640px){
        padding: 20px;

        nav{
            display: none;
        }
        .customMenuIcon{
            display: flex;
        }
    }


    @media(min-width: 641px){
        .hamburger{
            display: none;
        }
    }
`