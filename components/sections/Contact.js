import Link from 'next/link';
import styled from 'styled-components'
import colors from '../../styles/Colors';

export default function Contact() {
    return (
        <Container id="contact">
            <div className="grid">
                <div className="content">
                    <h2>Get in Touch</h2>
                    <p>
                        Feel free to email me or connect with me on social media if you would like to chat.
                    </p>
                    <Link href="mailto:tesfadaniel1@gmail.com">
                        <a className="underline">tesfadaniel1@gmail.com</a>
                    </Link>
                    <ul>
                        <li><a href="https://linkedin.com/in/tesfadan/" className="underline">Linkedin</a></li>
                        <li><a href="https://github.com/tesfadan" className="underline">Github</a></li>
                        <li><a href="https://twitter.com/tesfadan" className="underline">Twitter</a></li>
                    </ul>

                    <div className="credit">
                        <p>Designed & Developed by Tesfa Demissie</p>
                        <a href="https://github.com/tesfadan/portfolio" className="underline">View Source Code</a>
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
    .content{
        grid-column: 4/9;
    }

    h2{
        color: ${colors.tillDark};
    }
    p{
        color: ${colors.tillDark};
        margin-bottom: 40px;
    }
    ul{
        margin-top: 40px;
        display: flex;
    }
    li{
        margin-right: 40px;
        color: ${colors.tillDark}
    }

    .underline{
        &:after{
            position: absolute;
            left: 0px;
        }
    }

    .credit{
        margin-top: 60px;
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

`