import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import projects from '../../src/content/Projects.json';


const Projects = () => {
    return  <>
            <Head>
            <title>Side Projects | Tesfa Demissie, Product Designer</title>
            <meta name="description" content="I enjoy combining my passion for product design and coding skills to work on side projects from concept to design to development. This process allows me to explore my creativity and problem-solving skills." />
            </Head>
            <Container className="section">
            <div className="grid">
                <div className="intro">
                        <h1>Side Projects</h1>
                        <p>I enjoy combining my passion for product design and coding skills to work on side projects from concept to design to development. This process allows me to explore my creativity and problem-solving skills.</p>
                </div>
                {projects.map(project => 
                    <div key={`project-${project.url}`} className="projectCard card">
                        <div className="top">
                            <div className="icon">
                                <img src={`/assets/projects/${project.image}/icon.png`} alt="project"/>
                            </div>
                            <a target="_blank" href={project.links.link}>{project.links.label}</a>
                        </div>
                        <div className="details">
                            <p className='title'>{project.name}</p>
                            <p>{project.description}</p>
                        </div>
                    </div>
                )}
            </div>
            </Container>
        </>
}

export default Projects;


const Container = styled.div`
    .intro{
        grid-column: 1/7;
        margin-bottom: 72px;
    }

    /* Project card */
    .projectCard{
        grid-column: span 3;
        padding: 32px;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }
    .top{
        margin-bottom: 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title{
        font-weight: 500;
        margin-bottom: 12px;
    }
    .icon{
        width: 72px;
        height: 72px;
        border: 2px solid;
        border-radius: 20px;
        display: block;
        overflow: hidden;

        img{
            object-fit: cover;
            width: 100%;
        }
    }

    /* IPAD */
    @media (max-width: 834px) {
        .intro{
            margin-bottom: 56px;
        }
        .projectCard{
            padding: 16px;
        }
        a{
            font-size: 16px;
        }
        .top{
            margin-bottom: 56px;
        }
        .icon{
            height: 56px;
            width: 56px;
            border-radius: 12px;
            border-width: 1px;
        }
        .title{
            font-size: 20px;
            margin-bottom: 8px;
        }
    }
    /* MOBILE */
    @media (max-width: 640px) {
        .intro{
            margin-bottom: 32px;
        }
        .projectCard{
            grid-column: span 6;
            margin-bottom: 24px;
        }
    }
`