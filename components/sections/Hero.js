import Link from 'next/link';
import styled from 'styled-components'
import colors from '../../styles/Colors';
export default function Hero() {
    return (
        <Container>
            <div className="grid">
                <div className="content">
                    <h1>
                        Hello, my name is <span>Tesfa Demissie</span>. I’m a Frontend Developer.
                    </h1>
                    <p>
                        I am a Front End Developer based in Winnipeg with experience
                        building websites and web applications with JavaScript, HTML,
                        SASS, and React. I also have experience working with React Native,
                        PHP and MySQL.
                    </p>
                    <Link href="/#contact" >
                        <a className="button primary">
                            Get in Touch
                        </a>
                    </Link>
                </div>
            </div>
        </Container>
    );
}


const Container = styled.div`
    display:flex;
    justify-content:center;
    min-height: 100vh;
    align-items: center;
    .content{
        grid-column: 3/10;
        position: relative;
        top: -80px;
    }
    h1{
        font-size: 72px;
        line-height: 76px;
        letter-spacing: -3px;
        font-weight: 700;
        span{
            color: ${colors.primary}
        }
        margin-bottom: 40px;
    }
    p{
        margin-bottom: 40px;
        margin-right: 80px;
    }
    .button{
        padding: 0px 32px;
    }
`