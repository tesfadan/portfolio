import Link from 'next/link';
import styled from 'styled-components'
import colors from '../../styles/Colors';

export default function Contact() {
    return (
        <Container>
            <div className="grid">
                <div className="content">
                    <h2>Get in Touch</h2>
                    <p>
                        Feel free to email me or connect with me on social media if you would like to chat.
                    </p>
                    <Link href="mailto:tesfadaniel1@gmail.com">
                        <a rel="noreferrer" className="underline">tesfadaniel1@gmail.com</a>
                    </Link>
                    <ul>
                        <li><a rel="noreferrer" href="https://linkedin.com/in/tesfadan/" className="underline">Linkedin</a></li>
                        <li><a rel="noreferrer" href="https://github.com/tesfadan" className="underline">Github</a></li>
                        <li><a rel="noreferrer" href="https://twitter.com/tesfadan" className="underline">Twitter</a></li>
                    </ul>

                    <div className="credit">
                        <p>Designed & Developed by Tesfa Demissie</p>
                        <a rel="noreferrer" href="https://github.com/tesfadan/portfolio" className="underline">View Source Code</a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    background: ${colors.black};
    padding: 120px 0px;
    color: ${colors.till};
    position:sticky;
    bottom: 0px;
    z-index:0;
    .content{
        grid-column: 4/8;
    }

    h2{
        color: ${colors.tillDark};
    }
    p{
        color: ${colors.tillDark};
        margin-bottom: 40px;
    }
    ul{
        margin-top: 30px;
        display: flex;
    }
    li{
        margin-right: 40px;
        color: ${colors.tillDark}
    }

    .underline{
        &:hover{
            opacity:1;
            color: ${colors.white};
        }
        &:after{
            position: absolute;
            left: 0px;
        }
    }

    .credit{
        margin-top: 40px;
        font-size: 14px;
        p{
            margin-bottom:10px
        };
        p, a {
            font-size: 14px;
            color: ${colors.tillDark};
            opacity: 0.75;
        }

        .underline{
            &:hover{
                opacity: 1;
            }
        }
    }

        /* responsive code goes here  */
    @media(max-width: 1230px){
        padding: 80px 60px;
        .content{
            grid-column: 4/10;
        }
    }

    @media(max-width: 1010px){
        .content{
            grid-column: 3/9;
        }
    }

    @media(max-width: 780px){
        .content{
            grid-column: 2/12;
        }
    }

    @media(max-width: 640px){
        padding: 60px 20px;
    }

`