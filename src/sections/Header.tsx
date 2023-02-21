import Link from 'next/link';
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import MenuIcon, { Contrast } from '../components/icons'
import { Context } from '../context';
import getLocalTheme from '../helpers/getLocalTheme';
import Color from '../theme/Color';
import Head from "next/head";

const Header = ({showMenu, switchMenu} : {showMenu: boolean, switchMenu: ()=> void})=> {
    const {darkMode, changeTheme} = useContext(Context);
    const colors = Color();

    useEffect(() => {
        document.body.classList.add(darkMode? 'dark' : 'light')
        return () => {
            document.body.classList.remove(darkMode? 'dark' : 'light')
        };
    }, [darkMode]);

  return <>
        <Head>
            <meta name="theme-color" content={darkMode ? "#1D1B1B": "#FFFFFF"} />
        </Head>
        <Container className={`section  ${showMenu ? 'openMenu' : ''}`} darkMode={darkMode}>
            <div className="grid">
                <div className="content">
                    <Link href="/"className='home'>
                       <img src='./assets/images/tesfa-home-icon.png' alt='Logo'/>
                    </Link>
                    <nav>
                        <ul>
                            <li onClick={()=>switchMenu()}><Link href="/about">About</Link></li>
                            <li onClick={()=>switchMenu()}><Link href="/portfolio">Portfolio</Link></li>
                            <li onClick={()=>switchMenu()}><Link href="/projects">Side Projects</Link></li>
                            <li onClick={()=>switchMenu()}><Link href="/">Resume</Link></li>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <button className="div" role="button" onClick={changeTheme}>
                            <Contrast color={colors.text} />
                        </button>
                        <MenuIcon showMenu={showMenu} switchMenu={switchMenu}/>
                    </div>
                </div>
            </div>
    </Container>
    </> 
}

export default Header;


const Container = styled.header<{darkMode: boolean}>`
    padding: 84px 0px 72px;
    /* position: sticky; */
    top: 0px;
    background: #FFFFFF;
    z-index: 10;

    .content{
        grid-column: 1/7;
        display: flex;
        font-size: 20px;
        line-height: 180%;
        align-items: center;
    }
    a{
        font-size: inherit;
        line-height: inherit;
    }
    .home{
        margin-right: 18px;
        border: 2px solid;
        border-radius: 16px;
        width: 72px;
        min-width: 72px;
        height: 72px;
        overflow: hidden;
        img{
            width: inherit;
            height: inherit;
            object-fit: cover;
        }
    }
    nav{
        width: 100%;
    }
    ul{
        display: flex;
    }
    li {
        padding: 0px 14px;
        /* background: red; */
        width: max-content;
    }
    .button, button{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .customMenuIcon{
        display: none;
    }

    /* IPAD */
    @media (max-width: 834px) {
        /* padding: 56px 0px 56px !important; */
        &.section{
            padding: 40px 0px 40px;
        }

        .content{
            font-size: 16px;
        }
        .home{
            min-width: 56px;
            width: 56px;
            height: 56px;
        }
        li{
            padding: 0px 10px;
        }
    }

    /* LG MOBILE */
    @media (max-width: 640px) {

        &.section{
            position: sticky;
            top: 0px;
            padding: 20px 0px 24px;
        }

        .content{
            justify-content: space-between;
        }
        .home{
            min-width: 40px;
            width: 40px;
            height: 40px;
            border-radius: 10px;
        }
        nav{
            display: none;
        }
        .buttons{
            display: flex;
            span{
                background: currentColor;
            }
        }

        .customMenuIcon{
            display: flex;
        }

        button{
            display: flex;
            align-items: center;
            margin-right: 32px;

            svg{
                width: 24px;
                height: 24px;
            }
        }

        &.openMenu{
            height: 100vh;
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            align-items: flex-start;
            /* background-color: #F6F3F0; */

            nav{
                max-width: 428px;
                display: block;
                position: absolute;
                /* left: 0px; */
                top: 96px;
                padding: inherit;
                padding: 32px 0px;
                font-weight: 500;
                font-size: 24px;
                line-height: 180%;

                ul{
                    flex-flow: column;
                }

                li{
                    padding: 0px;
                    margin-bottom: 20px;
                }
            }
        }

    }
`