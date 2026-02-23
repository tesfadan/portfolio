import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { CaseStudy } from '../../src/@types/CaseStudy';
import PortfolioCard from '../../src/components/Cards/Portfolio';
import CaseStudiesData from '../../src/content/Portfolio.json';
import BlockRender from '../../src/helpers/BlockRender';

type CaseStudyRouteParams = {
  id: string;
};

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

export const getStaticProps: GetStaticProps<CaseStudyPageProps, CaseStudyRouteParams> = async ({ params }) => {
    const id = params?.id;
    const caseStudy = CaseStudiesData.find((data) => data.slug === id) as CaseStudy | undefined;

    if (!caseStudy) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            caseStudy
        }
    }
}

export const getStaticPaths: GetStaticPaths<CaseStudyRouteParams> = async () => {
    const paths = CaseStudiesData.map(caseStudy => ({
        params: { id: caseStudy.slug }
    }))

    return { paths, fallback: false }
}

const CaseStudyPage = ({ caseStudy }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tesfadan.com";
    const imageUrl = `${siteUrl}${caseStudy.coverImage.url}`;
    const caseStudyUrl = `${siteUrl}/portfolio/${caseStudy.slug}`;


    return <>
        <Head>
            <title> {caseStudy.title} | Tesfa Demissie, Product Designer </title>
            <meta property="og:type" content="website" />
            <meta property="og:title" content={caseStudy.title} />
            <meta property="og:description" content={caseStudy.blurb} />
            <meta property="og:image" content={imageUrl}  />
            <meta property="og:url" content={caseStudyUrl} />
            <meta property="og:site_name" content={caseStudy.title} />
            <meta property="og:image:secure_url" content={imageUrl} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="2016" />
            <meta property="og:image:height" content="1032" />
            <meta property="og:image:alt" content={caseStudy.coverImage.alt}  />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={caseStudy.title} />
            <meta name="twitter:description" content={caseStudy.blurb} />
            <meta name="twitter:image" content={imageUrl} />
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
                {caseStudy.content.map((block, index) => <BlockRender key={`block-${caseStudy.slug}-${index}`} block={block} />)}
            </div>

            <div className="moreStudies">
                <div className='divider' />
                <div className='title'>More Case Studies</div>

                {CaseStudiesData.filter((portfolio) => portfolio.slug !== caseStudy.slug).map((portfolio) => (
                    <PortfolioCard key={`related-${portfolio.slug}`} portfolio={portfolio} />
                ))}
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

            .block{
                height: 100%;
                margin-bottom: unset !important;
            }
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
                grid-template-columns: 1fr;
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
