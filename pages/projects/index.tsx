import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import projects from '../../src/content/Projects.json';


export default () => {
    return (
        <>
            <Head>
            </Head>
            <Container className="section">
            <div className="grid">
                <div className="intro">
                        <h1>Side Projects</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Malesuada ultricies ipsum id volutpat venenatis eu. Tortor massa leo tristique amet cras sem viverra facilisi. Amet ultricies urna ridiculus mauris maecenas neque nunc hendrerit. Et gravida eli.</p>
                </div>
                {projects.map(project => 
                    <div className="projectCard card">
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
    );
}


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
`