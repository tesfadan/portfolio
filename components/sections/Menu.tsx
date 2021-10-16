import React from 'react';
import styled from 'styled-components';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LinkButton } from '../UI/Button';
import { useRouter } from 'next/router'
import Link from 'next/link';




export const Menu = ({ showMenu, SwitchMenu }: { showMenu: boolean, SwitchMenu: () => void }) => {
    // const { menu } = props;
    const router = useRouter();

    const NavLink = ({ href, title }: { href: string, title: string }) => <li className={`navLink ${title === "Resume" ? 'resumeBtn' : ''}`}>
        {title === "Resume" ? <a className="underline big" target="_blank" href="/documents/Tesfa_Demissie_Resume.pdf">Resume</a> :
            router.pathname == "/" ?
                <AnchorLink className={`underline big`} onClick={SwitchMenu} href={href}>{title}</AnchorLink> :
                <Link href={`/${href}`}>
                    <a className="underline big" onClick={SwitchMenu}>
                        {title}
                    </a>
                </Link>}
    </li>

    return <Container state={showMenu}>
        <div className="grid" >
            <nav>
                <ul>
                    <NavLink href="#portfolio" title="Work" />
                    <li><Link href="/about" ><a className="underline big" onClick={SwitchMenu}>About</a></Link></li>
                    <NavLink href="#contact" title="Contact" />
                    <NavLink href="/documents/Tesfa_Demissie_Resume.pdf" title="Resume" />
                </ul>
            </nav>
        </div>
    </Container>
}

const Container = styled.div<{ state: boolean }>`
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
