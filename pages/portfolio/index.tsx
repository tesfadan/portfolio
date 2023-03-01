import React, { useEffect, useState } from 'react';
import Head from "next/head";
import styled from "styled-components"
import Link from 'next/link';
import PortfolioData from '../../src/content/Portfolio.json';
import PortfolioCard from '../../src/components/Cards/Portfolio';


const PortfolioPage = () => {
    // const potfolio = {
    //     v1: "https://framer.com/share/Tesfa-Demissie-Portfolio--j7ycSoVIBT77QKZZGeIb/JBFKuBX0h?highlights=0"
    //   }

    //   useEffect(() => {
    //   window.location.replace(potfolio.v1);
    // }, []);
    const [portfolioItems] = useState(PortfolioData);


    return  <>
            <Head>
            <title>Portfolio | Tesfa Demissie, Product Designer</title>
            <meta name="description" content="As a product designer, I strive to develop design solutions that solve real-world problems and inspire and excite the end user. Here are some examples of my product design work with case studies." />
            </Head>
            <Container className="section">
            <div className="grid">
                <div className="content">
                    <div className="intro">
                        <h1>Portfolio</h1>
                        <p>As a product designer, I strive to develop design solutions that solve real-world problems and inspire and excite the end user. Here are some examples of my product design work with case studies.</p>
                    </div> 

                    {portfolioItems.map(portfolio => 
                        <PortfolioCard portfolio={portfolio} />
                    )}
                </div>
            </div>
            </Container>
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
        /* height: 272px; */
        height: auto;
        overflow: hidden;

        img{
            object-fit: contain;
        }
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
            /* height:260px; */
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
