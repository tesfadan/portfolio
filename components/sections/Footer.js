import Link from 'next/link';
import styled from 'styled-components';
import colors from '../../styles/Colors';

const Footer = () => {
    return <Container>
        <ul className="socials">
            <li><Link href="https://twitter.com/tesfadan">
                <a>
                    <img src="/assets/icons/twitter.svg" alt="Connect with Tesfa Demissie on Twitter." width="20" height="20" />
                </a>
            </Link></li>
            <li><Link href="https://github.com/tesfadan">
                <a>
                    <img src="/assets/icons/github.svg" alt="Connect with Tesfa Demissie on Github." width="20" height="20" />
                </a>
            </Link></li>
            <li><Link href="https://linkedin.com/tesfadan">
                <a>
                    <img src="/assets/icons/linkedin.svg" alt="Connect with Tesfa Demissie on Linkedin." width="20" height="20" />
                </a>
            </Link></li>
        </ul>

        <ul className="email">
            <li>
                <Link href="mailto:tesfadaniel1@gmail.com" >
                    <a>
                        <img src="/assets/icons/telegram.svg" alt="Email Tesfa Demissie." width="20" height="20" />
                    </a>
                </Link>
            </li>
        </ul>
    </Container>
}

export default Footer

const Container = styled.footer`
    width: 100%;
    padding:40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    position: fixed;
    bottom: 0px;
    ul, li, a{
        height: max-content;
    }
    img{
        height:20px;
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
            background-color: ${colors.till};
            border: 1px solid ${colors.tillDark}
        }
        transition: 0.125s ease-in;
    }

`