import Link from "next/link";
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled, { css } from 'styled-components';
import MenuIcon from "../icons";
import { LinkButton } from "../UI/Button";
import { useRouter } from 'next/router'

export default function Header({ transparent, show, ...props }) {
    const { setMenu } = props;
    const router = useRouter();

    const NavLink = ({ href, title }) => <li className={`navLink`}>
        {router.pathname == "/" ?
            <AnchorLink className="underline" href={href}>{title}</AnchorLink> :
            <Link href={`/${href}`}>
                <a className="underline">
                    {title}
                </a>
            </Link>
        }
    </li>
    return (
        <Container transparent={transparent} style={show ? { top: 0, opacity: 1 } : { top: -20, opacity: 0 }} >
            {router.pathname == "/" ?
                <AnchorLink href="#home" rel="noreferrer" onClick={() => setMenu(false)}>
                    <img src="/assets/logo.svg" width="50" height="32" alt="Home" />
                </AnchorLink> :
                <Link href={`/#home`} rel="noreferrer" onClick={() => setMenu(false)}>
                    <a>
                        <img src="/assets/logo.svg" width="50" height="32" alt="Home" />
                    </a>
                </Link>
            }

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
    backdrop-filter: blur(24px);
    background:#02141a98;
    border-bottom: 1px solid #02141a50;
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

    ${props => props.transparent && css`
        transition: 0.25s ease-in;
        backdrop-filter: blur(0px);
        backdrop-filter: unset;
        background: unset;
        border-color: transparent;
    `} 

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