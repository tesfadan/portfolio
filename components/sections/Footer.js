import Link from 'next/link';
import styled from 'styled-components';
import { event } from '../../head/gtag';
import colors from '../../styles/Colors';

const Footer = ({ show }) => {
    const FooterLink = ({ href, service }) => <li>
        <Link href={href}>
            <a rel="noreferrer" target="_blank"
                onClick={() => event({ action: "Link Clicked", category: "Contact", label: "Footer Overlay Link Clicked", value: service })}
            >
                <img
                    src={`/assets/icons/${service}.svg`}
                    alt={`Connect with Tesfa Demissie on ${service}.`}
                    width="20" height="20" />
                <span className="screenReaderOnly">
                    {`Connect with Tesfa Demissie on ${service}.`}
                </span>
            </a>
        </Link>
    </li>

    return <Container style={show ? { bottom: 0, opacity: 1 } : { bottom: -20, opacity: 0 }}>
        <ul className="socials">
            <FooterLink href="https://twitter.com/tesfadan" service="twitter" />
            <FooterLink href="https://github.com/tesfadan" service="github" />
            <FooterLink href="https://linkedin.com/in/tesfadan/" service="linkedin" />
        </ul>

        <ul className="email">
            <li>
                <Link href="mailto:tesfa@tesfadan.com" >
                    <a rel="noreferrer" target="_blank"
                        onClick={() => event({ action: "Link Clicked", category: "Contact", label: "Footer Overlay Link Clicked", value: 'Email' })}
                    >
                        <img src="/assets/icons/telegram.svg"
                            alt="Email Tesfa Demissie."
                            width="20" height="20" />
                        <span className="screenReaderOnly">
                            Email Tesfa Demissie.
                        </span>
                    </a>
                </Link>
            </li>
        </ul>
    </Container>
}

export default Footer

const Container = styled.footer`
    padding:40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    position: fixed;
    bottom: 0px;
    z-index: 100;
    transition: 0.2s ease-in;
    

    ul, li, a{
        height: max-content;
    }
    img{
        height:20px;
        opacity:0.8;
    }
    li{
        margin-top: 10px;
    }
    a{
        padding: 6px;
        display:block;
        background-color: unset;
        border-radius: 4px;
        border: 1px solid transparent;
        &:hover,
        &:focus {
            transform: translateY(-3px);
            border: 1px solid #727c88;
        }
        transition: 0.125s ease-in;
    }

    .socials, .email{
        position: fixed;
    }

    .email{
        right: 40px;
    }

    @media(max-width: 640px){
        padding: 20px;
        
        .socials, .email{
            /* right: 20px; */
            display: none;
        }
    }

`