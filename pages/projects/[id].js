import { useState, useEffect } from "react";
import styled from 'styled-components'
import { useRouter } from "next/router";
import Projects from '../../content/Projects';
import Cover from "../../components/Cover";

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
        </div>
    </Container>
}

export const Container = styled.div`
    min-height: 100vh;
    background: #02141a;
    color:#E2E5E9;
    display:flex;
    font-size: 16px;
    z-index:10;
    background-image: linear-gradient(180deg, #34EBF705, #A500F316);
`