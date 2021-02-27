import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LinkButton } from '../UI/Button';




export const Menu = ({ ...props }) => {
    const { menu } = props;
    return <Container state={menu}>
        <div className="grid" >
            <nav>
                <ul>
                    <li><AnchorLink href="#about" rel="noreferrer" onClick={() => props.switch()}>About</AnchorLink></li>
                    <li><AnchorLink href="#portfolio" rel="noreferrer" onClick={() => props.switch()}>Portfolio</AnchorLink></li>
                    <li><AnchorLink href="#contact" rel="noreferrer" onClick={() => props.switch()}>Contact</AnchorLink></li>
                </ul>
                <div className="resumeBtn">
                    <LinkButton className="button small" href="/documents/Tesfa_Demissie_Resume.pdf">Resume</LinkButton>
                </div>
            </nav>
        </div>
    </Container>
}

const Container = styled.div`
        /* background-color: ${Color.black}; */
        background:#010e11;
        background-image: linear-gradient(-180deg, #1f4cc916, #34EBF705);
        /* color: ${Color.white}; */
        min-height: 100vh;
        position: fixed;
        width: 100%;
        z-index: 20;
        top:  ${props => props.state ? 0 : '-100vh'};
        transition: 0.3s ease-in-out;
        /*  */
        li{
            font-size: 48px;
            line-height: 66px;
            font-weight: 800;
            margin-left: -2px;
            margin-bottom: 48px;
            cursor: pointer;
            transform:translateY(0px);
            transition: 0.15s ease-in-out;
            color: #aeb9c7;
            a{
                font-size: inherit;
                line-height: inherit;
                font-weight: inherit;
            }

            &:hover{
                /* color: ${Color.goldLight}; */
                transform:translateY(-4px);
            }
        }
        nav{
            height: 100vh;
            grid-column: 7/11;
            display:flex;
            z-index: 2;
        }
        ul{
            top: -120px;
            position: relative;
            align-self: center;
        }

        .resumeBtn{
            grid-column: 7/9;
            position: absolute;
            bottom: 50px;
            transition: 0.15s ease-in-out;
            a{
                display: block;
                width:max-content;
                min-width: 160px;
                text-align:center;
                border-radius:4px;
                padding: 12px 16px;
                color:#ffffff;
                border: 1px solid #3e98ff;
                margin-top: 32px;
                transition: 0.15s ease;
                position: relative;
                top: 0px;
                box-shadow: 0px 0px 32px #00000000;
                &:hover, &:focus{
                    background: #3e98ff10;
                    border: 1px solid #A1CDFF40;
                }
            }
        }


        @media(max-width: 1260px){
            nav{
                grid-column: 6/11;
            }
        }

        @media(max-width: 940px){
            nav{
                grid-column: 5/11;
            }
        }
        @media(max-width: 600px){
            nav{
                grid-column: 3/11;
            }
            .resume{
                margin: auto;
                right: 0px;
                left: 0px;
            }
        }

        @media(max-width:480px){
              nav{
                li{
                    font-size: 36px;
                    line-height: 52px;
                    margin-bottom: 48px;
                    /* text-align: center; */
                }
                a{
                    /* text-align:center; */
                }
                margin: auto;
              }
        }

        @media(min-width: 641px){
            display: none;
        }
`