import React from 'react'
import styled from 'styled-components'
import Link from "next/link"

export default function Header() {
    const NavLink = ({ href, title, ...props }) => <li className={`navLink${title}`}>
        <Link href={href}>
            <a>{title}</a>
        </Link>
    </li>

    return (
        <Container>
            <Link href="/">
                <a><img src="/assets/logo.svg" width="50" height="32" /></a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a className="button">Resume</a>
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
    /* background-color: red; */
    justify-content: space-between;
    align-items: center;
    padding:46px 60px;
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
        font-family: 'Airbnb Cereal App Medium'
    }

    .button{
        height: 40px;
        display:flex;
        justify-content:center;
        border: 2px solid black;
        padding: 0px 12px;
        border-radius: 4px; 
    }


`