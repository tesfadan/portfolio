import React, { useEffect } from 'react';
import Head from "next/head";
import styled from "styled-components"
import Link from 'next/link';

const PortfolioPage = () => {
    const potfolio = {
        v1: "https://framer.com/share/Tesfa-Demissie-Portfolio--j7ycSoVIBT77QKZZGeIb/JBFKuBX0h?highlights=0"
      }

      useEffect(() => {
      window.location.replace(potfolio.v1);
    }, []);


    return  <>
            <Head>
            </Head>
            {/* <Container className="section">
            <div className="grid">
                <div className="content">
                    <div className="intro">
                        <h1>Portfolio</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Malesuada ultricies ipsum id volutpat venenatis eu. Tortor massa leo tristique amet cras sem viverra facilisi. Amet ultricies urna ridiculus mauris maecenas neque nunc hendrerit. Et gravida eli.</p>
                    </div>  
                    <div className="portfolioCard">
                        <div className="cover card">
                        </div>
                        <div className="details">
                            <p>Designing for Education: Creating a Scalable Design System for a Cutting-Edge EdTech Platform</p>
                            <Link href="/portfolio/stoic">Case Study</Link>
                        </div>
                    </div>

                    <div className="portfolioCard">
                        <div className="cover card">
                        </div>
                        <div className="details">
                            <p>Designing for Education: Creating a Scalable Design System for a Cutting-Edge EdTech Platform</p>
                            <Link href="/portfolio/stoic">Case Study</Link>

                        </div>
                    </div>

                    <div className="portfolioCard">
                        <div className="cover card">
                        </div>
                        <div className="details">
                            <p>Designing for Education: Creating a Scalable Design System for a Cutting-Edge EdTech Platform</p>
                            <Link href="/portfolio/stoic">Case Study</Link>
                        </div>
                    </div>
                </div>
            </div>
            </Container> */}
        </>
}

export default PortfolioPage;

const Container = styled.div`
    .content{
      grid-column: 1/7;
    }
    .intro{
        margin-bottom: 72px;
    }
    .portfolioCard{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        align-items: center;
        margin-bottom: 44px;
    }
    .cover{
        width: 100%;
        height: 272px;
    }
    .details{
        width: 100%;
        p{
            margin-bottom: 20px;
        }
    }

    /* IPAD */
    @media (max-width: 834px) {
        .intro{
            margin-bottom: 44px;
        }
        
        .portfolioCard{
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
            gap: 28px;
            margin-bottom: 32px;
        }
        .cover{
            grid-column: 1/3;
            height:260px;
        }
        .details{
            grid-column: 3/6;
        }
        .details p{
            margin-bottom: 4px;
        }
    }

    /* Mobile  */
    @media (max-width: 640px) {
        .intro{
            margin-bottom: 32px;
        }
        .portfolioCard{
            display: flex;
            flex-flow: column;
            gap: unset;
            margin-bottom: 32px;
        }
        .cover{
            margin-bottom: 16px;
        }
        .details p {
            margin-bottom: 0px;
        }
    }
`
