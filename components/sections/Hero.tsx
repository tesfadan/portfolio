import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import colors from '../../styles/Colors';

export default function Hero() {
    return (
        <Container id="home">
            <div className="grid">
                <div className="content">
                    <p className="new-blurb heading2">
                    My name is <a className="heading2" target="_blank" href="https://twitter.com/tesfadan">Tesfa Demissie</a> and I’m a Product Designer at <a className="heading2" target="_blank" href="https://combinevb.com">Combine Ventures</a> working on exciting startups. I spend <br /> most of my time thinking, designing & coding.
                    </p>
                    <p className="heading2">
                        Check out my <a target="_blank" href="/portfolio" className="heading2">design portfolio</a> here.
                    </p>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    /* background:#02141a; */
    background-color: #00000090;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    background-image: linear-gradient(180deg, #1e476d10, #4100f312);
    .content{
        position:relative;
        top: -16px;
        grid-column: 2/11;
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
    h2, .heading2{
        /* font-size: 32px; */
        line-height: 44px;
        margin-bottom: 40px;
        letter-spacing: 0px;
        font-weight: 400;
    }

    p{
        color: #acb6c0;
    }

    a{
        color: ${colors.white}
    }
    a:hover{
        text-decoration: underline;
    }


    @media(max-width: 1260px){
        br{
            display: none;
        }
    }

    @media(max-width: 860px){
        h2, .heading2{
            font-size: 24px;
            line-height: 36px;
        }

        .heading2{
            margin-bottom: 20px;
        }
    }

    @media(max-width:660px){
        .content{
            grid-column:2/12;
        }

        h2, .heading2{
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
        }
    }

    @media(max-width:480px){
        .content{
            grid-column:1/13;
        }
        h2, .heading2{
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
        }
        .heading2{
            margin-bottom: 16px;
        }
    }
`;