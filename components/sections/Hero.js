import styled from 'styled-components'
import colors from '../../styles/Colors';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
    return (
        <Container id="home">
            <div className="grid">
                <div className="content">
                    <h1>
                        <span>Hello, my name is</span>
                        <br />
                        <span><span className="themed">Tesfa Demissie</span></span>. I’m a <br />
                        <span>Frontend Developer.</span>
                    </h1>
                    <p>
                        I am a Front End Developer based in Winnipeg with experience
                        building websites and web applications with JavaScript, HTML,
                        SASS, and React. I also have experience working with React Native,
                        PHP and MySQL.
                    </p>
                    <AnchorLink className="button primary" href="#contact">
                        Get in Touch
                    </AnchorLink>
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
    background: ${colors.white};
    z-index: 10;
    position:relative;
    .content{
        grid-column: 3/10;
        position: relative;
        top: -80px;
    }
    h1{
        .themed{
            color: ${colors.primary}
        }
    }
    p{
        margin-bottom: 40px;
        margin-right: 80px;
    }
    .button{
        padding: 0px 32px;
    }


    @media(max-width: 1140px){
        .content{
            grid-column: 3/11;
        }
    }

    @media(max-width: 1010px){
        /* Font sizes should change here */
    }

    @media(max-width: 760px){
        .content{
            grid-column:3/12;
        }
    }

    @media(max-width: 640px){
        .content{
            grid-column:3/13;
        }
    }
    @media(max-width: 480px){
        .content{
            grid-column:2/13;
        }
        p{
            margin-right: 20px;
        }
    }
`