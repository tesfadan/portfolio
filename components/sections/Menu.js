import React from 'react';
import styled from 'styled-components'
import colors from '../../styles/Colors';
import MenuIcon from '../icons';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from "next/link"


export default function Menu({ showMenu, show, ...props }) {
    const NavLink = ({ href, title }) => <li className={`navLink`}>
        <AnchorLink className=" button small" href={href} onClick={props.switch}>{title}</AnchorLink>
    </li>

    return (
        <Container style={{ right: showMenu ? 0 : '-180%' }} >
            <MenuIcon showMenu={showMenu} onClick={props.switch} show={showMenu || show} />
            <div className="mobileMenu" style={{ right: showMenu ? 0 : '-100%' }} >
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a className="button small primary" onClick={props.switch}>Resume</a>
                            </Link>
                        </li>
                        <NavLink href="#about" title="About" />
                        <NavLink href="#portfolio" title="Portfolio" />
                        <NavLink href="#contact" title="Contact" />
                    </ul>
                </nav >
            </div>
        </Container>
    );
}


const Container = styled.div`
    display:flex;
    position: fixed;
    height: 100vh;
    width:100%;
    right:0px;
    top: 0px;
    z-index: 102;
    background:#00000060;
    transition: 0.25s ease-in-out;
    .mobileMenu{
        transition: 0.25s ease;
        border-left: 1px solid ${colors.tillDark};
        background:${colors.white};
        width:320px;
        right:0px;
        position: fixed;
        height:100vh;

    }
    .mobileMenu &:after{
        display:block;
        content: " ";
        width: 100%;
        height: 100%;
        background:red;
        position:absolute;
        left:0px;
    }

    .customMenuIcon{
        right: 20px;
        position: fixed;
        top: 20px;
    }

    nav, ul, a{
        display: flex;
        align-items:center;
    }
    ul{
        display: flex;
        justify-self: flex-end;
        flex-flow: column;
    }
    li{
        margin-left: 22px;
        font-size: 14px;
        font-weight: 500;
        width: 100%;
    }
    .navLink{
        transition: 0.1s ease-in;
        &:hover{
            color: ${colors.primary}
        }
    }

    nav{
        justify-content: flex-end;
        padding-top: 80px;
        padding-right: 20px;
    }
    li{
        margin-bottom: 20px;
    }
    .button{
        width: auto;
    }

`