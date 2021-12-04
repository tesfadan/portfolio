import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
    return (
        <Container id="home">
            <div className="grid">
                <div className="content">
                    <p className="new-blurb">
                    My name is <a target="_blank" href="https://twitter.com/tesfadan">Tesfa Demissie</a> and I’m a Product Designer at <a target="_blank" href="https://combinevb.com">Combine Ventures</a> working on exciting startups. I spend my time thinking, designing & coding.
                    </p>
                    <p>
                        Checkout my <AnchorLink href="#portfolio">side projects</AnchorLink> here.
                    </p>
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
    h2{
        font-size: 32px;
        line-height: 32px;
        margin-bottom: 40px;
        color: #c7ced8;
        letter-spacing: 0px;
        font-weight: 300;
    }
    p, a{
        margin-bottom: 32px;
        font-weight: 400;
        color: #c7ced8;
        font-size: 16px;
        line-height: 28px;

        font-style: normal;
        font-weight: 500;
        font-size: 46px;
        line-height: 60px;
        /* or 130% */
        letter-spacing: -0.01em;
        /* Copy */
        color: #898D9A;
    }

    a{
        color:#F2EDF2;
    }

    a:hover{
        text-decoration: underline;
    }

    /* a{
        display: block;
        width:max-content;
        border-radius:4px;
        padding: 12px 24px;
        color:#ffffff;
        border: 1px solid #3e98ff;
        margin-top: 32px;
        transition: 0.15s ease;
        position: relative;
        top: 0px;
        box-shadow: 0px 0px 32px #00000000;
        font-weight: 400;
        color: #e2e7ec;
        font-size: 16px;
        &:hover, &:focus{
            background: #3e98ff10;
            border: 1px solid #A1CDFF40;
        }
    } */
    
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

        p,a{
            font-size: 32px;
    line-height: 44px;
    letter-spacing: 0;
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
            /* color: #c5cdd8; */
        }
    }
`;