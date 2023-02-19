import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Contrast } from '../components/icons'
import { Context } from '../context';
import getLocalTheme from '../helpers/getLocalTheme';
import Color from '../theme/Color';

export default function Header() {
    const {darkMode, changeTheme} = useContext(Context);
    const colors = Color();

    useEffect(() => {
        document.body.classList.add(darkMode? 'dark' : 'light')
        return () => {
            document.body.classList.remove(darkMode? 'dark' : 'light')
        };
    }, [darkMode]);

  return (
    <Container className="section" darkMode={false}>
    <div className="grid">
        <div className="content">
            <a className='home'><img src='./assets/images/tesfa-home-icon.png' alt='Logo'/></a>
            <nav>
                <ul>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Portfolio</a></li>
                    <li><a href=''>Side Projects</a></li>
                    <li><a href=''>Resume</a></li>
                </ul>
            </nav>
            <button className="div" role="button" onClick={changeTheme}>
                <Contrast color={colors.text} />
            </button>
        </div>
    </div>
    </Container>
  )
}


const Container = styled.header<{darkMode: boolean}>`
    padding: 84px 0px 72px;
    position: sticky;
    top: 0px;

    .content{
        grid-column: 1/7;
        display: flex;
        font-size: 20px;
        line-height: 180%;
        align-items: center;
    }
    .home{
        margin-right: 32px;
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
            a{
                text-decoration: unset;
            &:hover{
            text-decoration: underline;
            }
        }
    }
    li {
        padding: 0px 14px;
    }
`