import { useState, useEffect } from "react";
import styled from 'styled-components'
import { useRouter } from "next/router";
import Projects from '../../content/Projects';
import Cover from "../../components/showcase/Cover";
import { LinkButton } from "../../components/UI/Button"
import ProjectStack from "../../components/showcase/ProjectStack";
import Links from "../../components/showcase/Links";
import MoreProjects from "../../components/showcase/MoreProjects";

export default function Project() {
    const router = useRouter();
    const [project, setProject] = useState({
        name: String,
        description: String,
        image: String,
        tags: String,
        link: String,
        sourceCode: String,
        coverImage: URL,
    })
    // console.log(router.query.id);

    useEffect(() => {
        setProject(Projects[2])
    }, [true])


    return <Container id="about">
        <div className="grid">
            <Cover {...project} />
            <div className="writeup">
                <h3>About</h3>
                <p>{project.description}</p>
            </div>
            <div className="writeup">
                <h3>Process</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Faucibus gravida nulla
                    auctor mauris nulla. Gravida orci ornare
                    faucibus montes, ultricies tortor convallis turpis.
                    Gravida non lacus tortor curabitur volutpat
                    scelerisque eget. In varius in arcu pharetra
                    nec felis aliquam. Enim, sit consectetur
                    tristique fusce in vel eu .
                </p>
            </div>

            <section>
                <ProjectStack project={project} />
                <Links project={project} />
                <MoreProjects Projects={Projects} />
            </section>
        </div>
    </Container>
}

export const Container = styled.div`
    min-height: 100vh;
    background: #02141a;
    color:#C5CDD8;
    font-size: 16px;
    z-index:10;
    background-image: linear-gradient(180deg, #34EBF705, #A500F305);
    padding-bottom: 80px;
    .writeup{
        grid-column: 2/7;
        margin-bottom: 54px;
    }

    section{
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