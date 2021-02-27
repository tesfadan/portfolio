import React from 'react';
import styled from 'styled-components';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LinkButton } from '../UI/Button';




export const Menu = ({ ...props }) => {
    const { menu } = props;
    return <Container state={menu}>
        <div className="grid" >
            <nav>
                <ul>
                    <li><AnchorLink href="#about" rel="noreferrer" onClick={() => props.switch()} className="underline big">About</AnchorLink></li>
                    <li><AnchorLink href="#portfolio" rel="noreferrer" onClick={() => props.switch()} className="underline big">Portfolio</AnchorLink></li>
                    <li><AnchorLink href="#contact" rel="noreferrer" onClick={() => props.switch()} className="underline big">Contact</AnchorLink></li>

                    <li className="resumeBtn">
                        <a className="underline big" href="/documents/Tesfa_Demissie_Resume.pdf">Resume</a>
                    </li>
                </ul>
            </nav>

        </div>
    </Container>
}

const Container = styled.div`
        background:#000303;
        background-image: linear-gradient(-180deg, #1f4cc916, #34EBF705);
        min-height: 100vh;
        position: fixed;
        display:flex;
        width: 100%;
        z-index: 20;
        top:  ${props => props.state ? 0 : '-100vh'};
        transition: 0.3s ease-in-out;
        color: white;
        padding-top: 80px;
        align-items:center;
        nav{
            width: 100%;
            grid-column: 3/11;
            margin-top: -200px;
        }
        li{
            margin-bottom: 48px;
            a{
                font-size: 32px;
                font-weight: 600;
                color:#dadfe6;
            }
        }
        

        .resumeBtn a{
            /* position:absolute; */
            color:#3e98ff;
        }

        @media(min-width: 641px){
            display: none;
        }
`