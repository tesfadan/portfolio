import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
    return (
        <Container id="home">
            <div className="grid">
                <div className="content">
                    <h1><span className="name">Tesfa Demissie</span><br /> <span className="jobTitle">Frontend Developer.</span></h1>
                    <p>
                        I am a front-end developer based in Winnipeg with experience building websites and web applications with JavaScript, HTML, SCSS, and React. I also have experience working with React Native, PHP and MySQL.
                    </p>
                    <AnchorLink href="#portfolio">
                        Explore Portfolio
                    </AnchorLink>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    background:#021B22;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;

    background-image: linear-gradient(180deg, #1f4cc916, #34EBF705);

    .content{
        position:relative;
        top: -64px;
        grid-column: 3/9;
        z-index:2;
    }
    h1{
        color: inherit;
        font-size: 48px;
        line-height: 54px;
        margin-bottom: 16px;
        font-weight: 800;
    }
    .name{
        color:#E2E5E9;
    }
    .jobTitle{
        opacity: 0.8;
        color: #aeb9c7;
    }
    p, a{
        color: inherit;
        font-size:18px;
        line-height: 32px;
        color:#aeb9c7;
        margin-bottom: 18px;
    }
    a{
        display: block;
        width:max-content;
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

    @media(max-width: 1260px){
        .content{
            grid-column: 3/10;
        }
    }

    @media(max-width: 860px){
        .content{
            grid-column:3/11;
        }
        img{
            display: none;
        }
    }
    @media(max-width: 760px){
        h1{
            font-size: 32px;
            line-height: 36px;
            font-weight: 700;
        }
        p,a{
            font-size: 16px;
            margin-bottom: 8px;
            line-height:26px;
        }
        .content{
            grid-column:3/11;
        }
    }

    @media(max-width: 480px){
        h1{
            font-size: 28px;
            line-height: 32px;
            font-weight: 600;
        }
        .content{
            padding-left: 16px;
            grid-column:1/13;
        }
    }
`;