import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
    return (
        <Container id="home">
            <div className="grid">
                <div className="content">
                    <h1>Tesfa Demissie</h1>
                    <h2 className="jobTitle">Front End Developer</h2>
                    <p>
                        I am a front-end developer with experience building websites and web applications with JavaScript, HTML, SCSS, and React. I also have experience working with React Native & PHP.
                    </p>
                    <AnchorLink href="#portfolio">
                        View Portfolio
                    </AnchorLink>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    background:#02141a;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    background-image: linear-gradient(180deg, #A500F304, #34EBF705);
    .content{
        position:relative;
        top: -64px;
        grid-column: 3/11;
        z-index:2;
    }

    h1{
        font-weight: 600;
        font-size: 64px;
        line-height: 64px;
        margin-bottom:24px;
        color: #e2e7ec;
        letter-spacing: -1px;
        position:relative;
        left:-12px;
    }
    h2{
        font-size: 32px;
        line-height: 32px;
        margin-bottom: 40px;
        color: #c7ced8;
        letter-spacing: 0px;
        font-weight: 300;
    }
    p{
        margin-bottom: 56px;
        font-weight: 400;
        color: #c7ced8;
        font-size: 16px;
        line-height: 28px;
        max-width:487px;
    }

    a{
        display: block;
        width:max-content;
        border-radius:4px;
        padding: 10px 18px;
        color:#ffffff;
        border: 1px solid #3e98ff;
        margin-top: 32px;
        transition: 0.15s ease;
        position: relative;
        top: 0px;
        box-shadow: 0px 0px 32px #00000000;

        /*  */
        font-weight: 400;
        color: #e2e7ec;
        font-size: 16px;
        &:hover, &:focus{
            background: #3e98ff10;
            border: 1px solid #A1CDFF40;
        }
    }
    
    @media(max-width: 860px){
        h1{
            font-size:48px;
            margin-bottom: 16px;
            line-height: 48px;
            left: -1px;
        }
        h2{
            font-size: 24px;
            margin-bottom: 24px;
        }
        p{
            margin-bottom: 48px;
        }

    }

    @media(max-width:660px){
        .content{
            grid-column:2/12;
        }
    }

    @media(max-width:480px){
        .content{
            grid-column:2/13;
        }
        h1{
            font-size: 32px;
            line-height: 32px;
            margin-bottom:16px;
            left: -4px;
        }
        h2{
            font-size: 18px;
            line-height: 18px;
            font-weight: 400;
        }
        p{
            color: #c5cdd8;
        }
    }
`;