import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

type PortfolioCard = {
    title: string,
    blurb: string,
    slug: string,
    coverImage: {
        url: string,
        alt: string
    }
}

export default function PortfolioCard({portfolio} : {portfolio : PortfolioCard}) {
  return (
    <Container className="portfolioCard">
        <div className="cover card">
            <img src={portfolio.coverImage.url} alt={portfolio.coverImage.alt}/>
        </div>
        <div className="details">
            <p>{portfolio.title}</p>
            <Link href={`/portfolio/${portfolio.slug}`}>Case Study</Link>
        </div>
    </Container>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
    margin-bottom: 44px;

    .cover{
        width: 100%;
        height: auto;
        overflow: hidden;

        img{
            object-fit: cover;
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
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
        gap: 28px;
        margin-bottom: 32px;

        .cover{
            grid-column: 1/3;
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
        display: flex;
        flex-flow: column;
        gap: unset;
        margin-bottom: 32px;

        .cover{
            margin-bottom: 16px;
        }
        .details p {
            margin-bottom: 0px;
        }
    }
`