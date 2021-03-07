import { useState, useEffect } from "react";
import styled from 'styled-components'
import { useRouter } from "next/router";
import Projects from '../../content/Projects.json';
import Cover from "../../components/showcase/Cover";
import ProjectStack from "../../components/showcase/ProjectStack";
import Links from "../../components/showcase/Links";
import MoreProjects from "../../components/showcase/MoreProjects";
import Display from "../../components/showcase/Display";


export const getStaticProps = async ({ params }) => {
    const studies = Projects.filter(project => project.url.toString() === params.id)

    console.log(studies)

    return {
        props: {
            project: studies[0]
        }
    }
}

export const getStaticPaths = async () => {
    const paths = Projects.map(project => ({
        params: { id: project.url }
    }))

    return { paths, fallback: false }
}


export default function Project({ project }) {
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
                    <MoreProjects Projects={Projects} />
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
`