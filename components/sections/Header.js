import Link from "next/link";
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import colors from '../../styles/Colors';
import { LinkButton } from "../UI/Button";
import Menu from './Menu';

export default function Header({ show }) {
    const NavLink = ({ href, title }) => <li className={`navLink`}>
        <AnchorLink className="underline" href={href}>{title}</AnchorLink>
    </li>
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <Container style={show ? { top: 0, opacity: 1 } : { top: -20, opacity: 0 }}>
                <AnchorLink href="#home">
                    <img src="/assets/logo.svg" width="50" height="32" alt="Home" />
                </AnchorLink>
                <nav>
                    <ul>
                        <li>
                            <Link href="/documents/Tesfa_Demissie_Resume.pdf">
                                <LinkButton className="button small">Resume</LinkButton>
                            </Link>
                        </li>

                        <NavLink href="#contact" title="Contact" />
                        <NavLink href="#portfolio" title="Portfolio" />
                        <NavLink href="#about" title="About" />
                    </ul>

                </nav >
            </Container >
        </>
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
        color:#E2E5E9;
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
`