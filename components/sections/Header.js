import React, { useState } from 'react'
import styled from 'styled-components'
import Link from "next/link"
import colors from '../../styles/Colors';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Menu from './Menu';
import MenuIcon from '../icons';

export default function Header({ show }) {
    const NavLink = ({ href, title }) => <li className={`navLink`}>
        <AnchorLink className="underline" href={href}>{title}</AnchorLink>
    </li>
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <Menu showMenu={showMenu} switch={() => setShowMenu(!showMenu)} show={show} />
            <Container style={show ? { top: 0, opacity: 1 } : { top: -20, opacity: 0 }}>
                <AnchorLink href="#home">
                    <img src="/assets/logo.svg" width="50" height="32" alt="Home" />
                </AnchorLink>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a className="button small">Resume</a>
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
    background: ${colors.white};
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
        margin-left: 22px;
        font-size: 14px;
        font-weight: 500;
    }
    .navLink{
        transition: 0.1s ease-in;
        &:hover{
            color: ${colors.primary}
        }
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