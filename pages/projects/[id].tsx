import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from "querystring";
import styled from 'styled-components';
import Cover from "../../components/showcase/Cover";
import Display from "../../components/showcase/Display";
import Links from "../../components/showcase/Links";
import MoreProjects from "../../components/showcase/MoreProjects";
import ProjectStack from "../../components/showcase/ProjectStack";
import Projects from '../../content/Projects.json';

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


export default function ProjectPage({ project }: InferGetStaticPropsType<typeof getStaticProps>) {
    // name: String,
    // description: String,
    // image: String,
    // tags: String,
    // link: String,
    // sourceCode: String,
    // study: {
    //     heading: String,
    //     subHeading: String,
    //     coverImage: String,
    //     about: String,
    //     process: String,
    //     media: []
    // }

    return <>
        <Head>
            <title> Tesfa Demissie | {project.name}</title>
        </Head>
        <Container id="showcase">
            <div className="grid">
                <Cover {...project.study} />
                <div className="writeup">
                    <h2 className="sectionHeading">About</h2>
                    <p>{project.study.about}</p>
                </div>
                <div className="writeup">
                    <h2 className="sectionHeading">Process</h2>
                    <div dangerouslySetInnerHTML={{ __html: project.study.process }} />
                </div>

                <Display media={project.study.media} />
                <aside>
                    <ProjectStack project={project} />
                    <Links project={project} />
                    <MoreProjects Projects={Projects} thisProject={project.url} />
                </aside>
            </div>
        </Container>
    </>
}

export const Container = styled.div`
    min-height: 100vh;
    background: #02141a;
    color:#C5CDD8;
    font-size: 16px;
    z-index:10;
    background-image: linear-gradient(180deg, #1f4cc916, #34EBF705);
    padding-bottom: 80px;
    .writeup{
        grid-column: 2/7;
        margin-bottom: 54px;

        a{
            text-decoration: underline;
        /* color: #5cb3fa; */
        &:hover{
            color: #3e98ff;
        }
        }
    }
    .sectionHeading{
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 20px;
        color: #E2E7EE;
    }

    .grid{
        column-gap: 16px;
    }
    aside{
        grid-column: 9/12;
        grid-row: 2/12;
    }
    .sectionItem{
        margin-bottom: 54px;
        h4{
            margin-bottom:26px;
            font-weight: 500;
        }
    }

    @media(max-width: 1260px){
        .writeup{
            grid-column: 2/8;
        }
        aside{
            grid-column: 9/end;
            padding-right: 40px;
        }
    }
    @media(max-width: 1080px){
        .writeup{
            grid-column: 2/7;
        }
        aside{
            grid-column: 8/end;
            padding-right: 60px;
        }
        .display{
            grid-column: 1/9;
        }
    }

    @media(max-width: 900px){
        .cover{
            .name{
                font-size: 24px;
                line-height: 24px;
                margin-bottom: 12px;

            }
        }
        .writeup{
            grid-column: 2/12;
        }
        aside{
            grid-column: 3/11;
            grid-row: unset;
            padding-right: 0px;
        }
        .display{
            grid-column: 1/end;
        }
    }
    @media(max-width: 640px){
        aside{
            grid-column: 2/12;
        }
    }

    @media(max-width:480px){
        .grid{padding: 0px;}
        .writeup{
            padding: 0px 20px;
            grid-column: 1/end;
        }
        .cover{
            img{
                height: 100%;
                object-fit:cover;
            }
        }
        .display{
            margin: 20px;
            padding: 20px 0px;
            /* height: 720px; */
            margin-bottom: 62px;
            .swiper-button-next,  .swiper-button-prev {
                display: none;
            }
            .swiper-slide{
                margin: 0px;
                display: flex;
                justify-content: center;
            }
        }
    }
`