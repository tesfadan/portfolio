import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ParsedUrlQuery } from "querystring";
import styled from 'styled-components';
import Projects from '../../src/content/Projects.json';

interface Props {
    host: string;
    key: string
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
    const projectId = context?.params?.id;
    const projects = Projects.filter(project => project.url.toString() === projectId)
    return {
        props: {
            project: projects[0]
        }
    }
}

export const getStaticPaths = async () => {
    const paths = Projects.map(project => ({
        params: { id: project.url }
    }))

    return { paths, fallback: false }
}


const ShowCasePage = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <>
        <Head>
            <title> Tesfa Demissie | {project.name}</title>
        </Head>
        <Container className="section">
        <div className="grid">
            <div className="intro">
                <h1>Case Study — Brightspot Design System</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Malesuada ultricies ipsum id volutpat venenatis eu. Tortor massa leo tristique amet cras sem viverra facilisi. Amet ultricies urna ridiculus mauris maecenas neque nunc hendrerit. Et gravida eli.</p>
            </div>
            <div className="content">
                <div className="block">
                    <div className="cover card image">
                        <img src=''/>
                    </div>
                </div>
                <div className="block">
                    <p className='title'>Challenge</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Malesuada ultricies ipsum id volutpat venenatis eu. Tortor massa leo tristique amet cras sem viverra facilisi. Amet ultricies urna ridiculus mauris maecenas neque nunc hendrerit. Et gravida eli.</p>
                </div>
                <div className="block">
                    <div className="card image">
                        <img src=''/>
                    </div>
                </div>

                <div className="block">
                    <p className='title'>Process</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Malesuada ultricies ipsum id volutpat venenatis eu. Tortor massa leo tristique amet cras sem viverra facilisi. Amet ultricies urna ridiculus mauris maecenas neque nunc hendrerit. Et gravida eli.</p>
                </div>

                <div className="block twocol">
                    <div className="card image">
                        <img src=''/>
                    </div>
                    <div className="card image">
                        <img src=''/>
                    </div>
                </div>
                <div className="block">
                    <p className='title'>Result</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Malesuada ultricies ipsum id volutpat venenatis eu. Tortor massa leo tristique amet cras sem viverra facilisi. Amet ultricies urna ridiculus mauris maecenas neque nunc hendrerit. Et gravida eli.</p>
                </div>
                <div className="block">
                    <div className="card image">
                        <img src=''/>
                    </div>
                </div>
                <div className="block">
                    {/* <p className='title'>Result</p> */}
                    <p>Lorem ipsum dolor sit amet consectetur. Malesuada ultricies ipsum id volutpat venenatis eu. Tortor massa leo tristique amet cras sem viverra facilisi. Amet ultricies urna ridiculus mauris maecenas neque nunc hendrerit. Et gravida eli.</p>
                </div>
                {/* <div className="block">
                    <div className='divider' />
                </div> */}
            </div>

            {/*  */}
            <div className="moreStudies">
                <div className='divider' />
                <div className='title'>More Case Studies</div>

                <div className="portfolioCard">
                        <div className="cover card">
                        </div>
                        <div className="details">
                            <p>Designing for Education: Creating a Scalable Design System for a Cutting-Edge EdTech Platform</p>
                            <Link href="/"><a>Case Study</a></Link>
                        </div>
                    </div>

                    <div className="portfolioCard">
                        <div className="cover card">
                        </div>
                        <div className="details">
                            <p>Designing for Education: Creating a Scalable Design System for a Cutting-Edge EdTech Platform</p>
                            <Link href="/"><a>Case Study</a></Link>
                        </div>
                    </div>
            </div>
        </div>
        </Container>
    </>
}

export default ShowCasePage;

export const Container = styled.div`
    .intro{
        margin-bottom: 72px;
    }
    .intro, .content, .moreStudies{
        grid-column: 1/7;
    }
    .image{
        height: 516px;
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
            .title{
                margin-bottom: 40px;
            }
            /* remove */
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
    }
`