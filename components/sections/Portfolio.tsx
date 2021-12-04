import styled from 'styled-components'
import Projects from '../../content/Projects.json';
import PortfolioCard from '../UI/PortfolioCard';

export default function Portfolio() {
    return (
        <Container id="portfolio">
            <div className="grid">
                <h2>Projects</h2>
                {Projects.map((project, index) =>
                    <PortfolioCard {...project} flip={index % 2 != 0} key={`portfolio-${index}`} />
                )}
            </div>
        </Container>
    );
}

export const Container = styled.div`
    min-height: 100vh;
    background: #02141a;
    background-color: #00000090;
    color:#E2E5E9;
    display:flex;
    align-items: center;
    padding: 80px 0px;
    font-size: 16px;
    z-index:10;
    background-image: linear-gradient(180deg, #4100f312, #021BFF03);
    h2{
        color: inherit;
        margin-bottom:32px;
        grid-column:2/8;
        margin-bottom: 64px;
    }
    @media(max-width: 1260px){
        padding: 48px 52px;
    }
    @media(max-width: 760px){
        .content{
            grid-column:1/13;
        }
        ul{
            width: 100%;
        }
        h2{
            font-size: 24px;
            margin-bottom: 32px;
            grid-column:2/13;
        }
    }
    @media(max-width:480px){
        padding:32px 0px;
    }
`