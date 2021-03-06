import styled from 'styled-components'
import { useRouter } from "next/router";
import Projects from '../../content/Projects';

export default function Project() {
    const router = useRouter();
    // console.log(router.query.id);
    // Projects.filter(project => project.id === router.query.id)

    return <Container id="about">
        <div className="grid">
            <div>
                <h1>Project Page</h1>
                <p>Project id: {router.query.id}</p>
            </div>
        </div>
    </Container>
}

export const Container = styled.div`
    min-height: 100vh;
    background: #02141a;
    color:#E2E5E9;
    display:flex;
    align-items: center;
    padding: 80px 0px;
    font-size: 16px;
    z-index:10;
    background-image: linear-gradient(180deg, #34EBF705, #A500F316);

    div{
        grid-column: 1/end;
    }
`