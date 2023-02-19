import Link from "next/link";
import React, { Dispatch, SetStateAction } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled, { css } from 'styled-components';
import MenuIcon from "../icons";
import { LinkButton } from "../UI/Button";
import { useRouter } from 'next/router'

export default function Header({ menuOn, transparent, showMenu, SwitchMenu }: {
    menuOn: boolean,
    transparent: boolean, showMenu: boolean,
    SwitchMenu: () => void
}) {

    const router = useRouter();

    const NavLink = ({ href, title }: { href: string, title: string }) => <li className={`navLink`}>
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
        <Container transparent={transparent} style={showMenu ? { top: 0, opacity: 1 } : { top: -20, opacity: 0 }} >
            {router.pathname == "/" ?
                <AnchorLink href="#home" rel="noreferrer" onClick={menuOn ? SwitchMenu : () => { }}>
                    <img className="homeIcon" src="/assets/images/cool-glass-guy.png" width="72" height="72" alt="Home" />
                </AnchorLink> :
                <Link href={`/#home`}>
                    <a rel="noreferrer" onClick={SwitchMenu}>
                        <img className="homeIcon" src="/assets/images/cool-glass-guy.png" width="72" height="72" alt="Home" />
                    </a>
                </Link>
            }
            <nav>
                <ul role="list">
                    <li><Link href="">About</Link></li>
                    <li><Link href="">Portfolio</Link></li>
                    <li><Link href="">Side Projects</Link></li>
                    <li><Link href="">Resume</Link></li>
                </ul>
            </nav >
            <MenuIcon showMenu={!showMenu} switchMenu={SwitchMenu} />
        </Container >
    );
}

const Container = styled.header<{ transparent: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:46px 60px;
    /* position:fixed; */
    top: 0px;
    width: 100%;
    z-index: 100;
    transition: 0.2s ease-in;
    backdrop-filter: blur(24px);
    /* background: red; */
    width: -webkit-fill-available;

    .homeIcon{
        border: 2px solid #0E0D0D;
        border-radius: 16px;
        object-fit: cover;
    }

    .customMenuIcon{
        position: absolute;
        right: 20px;
        display:none;
        z-index: 200;
    }

    /* ${props => props.transparent && css`
        transition: 0.25s ease-in;
        backdrop-filter: blur(0px);
        backdrop-filter: unset;
        background: unset;
        border-color: transparent;
    `}  */

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