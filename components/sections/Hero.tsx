import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import colors from '../../styles/Colors';

export default function Hero() {
    return (
        <Container id="home">
            <div className="grid">
                <div className="content">
                    <img className="heroImage" src="assets/images/cool-glass-guy.png" />
                    
                    <div>
                        <p className="new-blurb heading2">
                            Hello! I'm Tesfa Demissie, a Product Designer passionate about intuitive and visually stunning digital products.
                        </p>
                        <p className="blurb">
                        My design philosophy is centered on understanding the user's needs and delivering solutions that can truly improve their lives. I strive to create products that are not only functional and user-friendly, but also beautiful and enjoyable to use.
                        </p>
                        <a className="button" target="_blank" href='https://framer.com/share/Tesfa-Demissie-Portfolio--j7ycSoVIBT77QKZZGeIb/JBFKuBX0h?highlights=0'>View Portfolio</a>
                    </div>
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
        grid-column: 1/12;
        z-index:2;

        display: flex;
        align-items: center;
        gap: 96px;
    }

    .heroImage{
        width: 400px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(AD675232-6F54-44F2-B037-2F4A97F75FA7_1_105_c.jpg);
        border: 6px solid #FAF8F5;
        border-radius: 252px 252px 4px 4px;
    }


    .blurb{
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 160%;
        /* or 48px */
        letter-spacing: 0.25px;
        margin-bottom: 56px;
    }

    .button{
        background-color: #FAF8F5;
        color: black;
        font-size: 20px;
        font-weight: 500;
        padding: 16px 24px;
        border-radius: 44px;

        &:hover{
            text-decoration: none;
        }
    }
    

    .heading2{
        font-size: 40px;
        line-height: 140%;
        margin-bottom: 20px;
        letter-spacing: 0px;
        font-weight: 400;
        color: #FAF8F5;
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

    @media (max-width: 1520px) {
        .content{
            gap: 72px;
            padding: 0px 56px;
        }
        .heroImage{
            width: 340px;
        }
        .heading2{
            font-size: 32px;
        }
        .blurb{
            font-size: 20px;
        }
        
    }


    @media(max-width: 1260px){
        .content{
            gap: 56px;
        }
        .heroImage{
            width: 300px;
        }
        .heading2{
            font-size: 28px;
            margin-bottom: 12px;
        }
        .blurb{
            font-size: 18px;
            margin-bottom: 32px;
        }
        .button{
            font-size: 16px;
            padding: 12px 20px;
        }
    }
    @media(max-width: 1120px){
        .heroImage{
            width: 260px;
        }
        .heading2{
            font-size: 24px;
            margin-bottom: 16px;
        }
        .blurb{
            font-size: 16px;
        }
    }

    @media(max-width: 860px){
        .content{
            grid-column:2/12;
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        .heroImage{
            width: 100%;
            height: 35vh;
            object-fit: cover;
            border-radius: 240px 240px 0px 0px;
        }

        h2, .heading2{
            font-size: 24px;
        }

        .heading2{
            margin-bottom: 20px;
        }
    }

    @media(max-width:660px){
        .content{
            grid-column:1/13;
            align-items: baseline;
            padding: 44px;
        }

        .heroImage{
            height: 44px;
            width: 72px;
            border-radius: 32px;
            border-width: 2px;
            display: none;
        }
        .button{
            font-size: 16px;
        }
    }

    @media(max-width:480px){
        .content{
            grid-column:1/13;
            padding: 0px;

        }
        .heading2{
            /* font-weight: 500; */
            font-weight: 400;
            font-size: 28px;
            margin-bottom: 16px;
        }
        .blurb{
            font-size: 20px;
            margin-bottom: 40px;
        }
    }
`;