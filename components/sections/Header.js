import React from 'react'
import styled from 'styled-components'
import Link from "next/link"
import colors from '../../styles/Colors';

export default function Header() {
    const NavLink = ({ href, title }) => <li className={`navLink`}>
        <Link href={href}>
            <a className="underline">{title}</a>
        </Link>
    </li>

    return (
        <Container>
            <Link href="/">
                <a><img src="/assets/logo.svg" width="50" height="32" alt="Home" /></a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a className="button small">Resume</a>
                        </Link>
                    </li>
                    <NavLink href="/#contact" title="Contact" />
                    <NavLink href="/#portfolio" title="Portfolio" />
                    <NavLink href="/#about" title="About" />
                </ul>
            </nav >
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
    }
    .navLink{
        transition: 0.1s ease-in;
        &:hover{
            color: ${colors.primary}
        }
    }
`