import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ParsedUrlQuery } from "querystring";
import { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styled from 'styled-components';
import { CaseStudy } from '../../src/@types/CaseStudy';
import PortfolioCard from '../../src/components/Cards/Portfolio';
import CaseStudiesData from '../../src/content/Portfolio.json';


  
interface Props {
    host: string;
    key: string;
    caseStudy: CaseStudy;
}

export const getStaticProps: GetStaticProps= async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
    const id = context?.params?.id;
    const caseStudy = CaseStudiesData.filter(caseStudy => caseStudy.slug.toString() === id)[0]
    return {
        props: {
            caseStudy
        }
    }
}

export const getStaticPaths = async () => {
    const paths = CaseStudiesData.map(caseStudy => ({
        params: { id: caseStudy.slug }
    }))

    return { paths, fallback: false }
}

const CaseStudyPage: NextPage<Props> = ({ caseStudy }) => {
    const [portfolioItems] = useState(CaseStudiesData)


    return <>
        <Head>
            <title> {caseStudy.title} | Tesfa Demissie, Product Designer </title>
            <meta name="description" content={caseStudy.blurb} />
            <meta property="og:image" content={caseStudy.coverImage.url} />
            <meta property="og:image:secure_url" content={caseStudy.coverImage.url} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="2016" />
            <meta property="og:image:height" content="1032" />
            <meta property="og:image:alt" content={caseStudy.title} />
        </Head>
        <Container className="section">
        <div className="grid">
            <div className="intro">
                <h1>{caseStudy.title}</h1>
                <p>{caseStudy.blurb}</p>
            </div>
            <div className="content">
                <div className="block">
                    <div className="cover card image">
                        <img src={caseStudy.coverImage.url} alt={caseStudy.coverImage.alt}/>
                    </div>
                </div>
                {caseStudy.content.map(block => block.blockType === "markdown" ? 
                <div className="block">
                    <ReactMarkdown>{block.content}</ReactMarkdown> 
                </div>
                : 
                <div className="block">
                    <div className="card image">
                        <img src={block.url} alt={block.alt}/>
                    </div>
                </div>)}
            </div>

            <div className="moreStudies">
                <div className='divider' />
                <div className='title'>More Case Studies</div>

                {portfolioItems.map(portfolio => portfolio.slug !== caseStudy.slug ? <>
                        <PortfolioCard portfolio={portfolio} />
                </> : null)}
            </div>
        </div>
        </Container>
    </>
}

export default CaseStudyPage;

export const Container = styled.div`
    .intro{
        margin-bottom: 72px;
    }
    .intro, .content, .moreStudies{
        grid-column: 1/7;
    }
    .cover{
        display: flex;
        overflow: hidden;
    }
    .image{
        object-fit: fill;
        width: 100%;
    }
    .showcaseIMG, p{

    }
    .block{
        margin-bottom: 56px;
        &.twocol{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 32px;
        }
    }
    .divider{
        height: 2px;
        width: 100%;
        background: currentColor;
        margin: 32px 0px;
        opacity: .15;
    }

    

    .moreStudies{
        .title, h2{
            margin-bottom: 40px;
        }
    }
    /* IPAD */
    @media (max-width: 834px) {
        .intro{
            margin-bottom: 56px;
        }
        .block{
            margin-bottom: 40px;
            
            &.twocol{
                gap: 24px;
            }
        }
        .image, .cover{
            /* height: 400px; */
        }
        .moreStudies{
            .title{
                margin-bottom: 28px;
            }
        }
        .title, h2{
            font-size: 20px;
        }
        .divider{
            margin: 24px 0px;
        }
    }

    /* MOBILE */
    @media (max-width: 640px) {
        .intro{
            margin-bottom: 32px;
        }
        .block{
            margin-bottom: 32px;
            &.twocol{
                gap: 12px;
                .image{
                    height: 240px;
                }
            }
        }
        .image, .cover{
            /* height: 280px; */
        }
    }
`