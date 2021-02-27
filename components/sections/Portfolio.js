import styled from 'styled-components'
import Projects from '../../content/Projects';
import colors from '../../styles/Colors';
import PortfolioCard from '../UI/PortfolioCard';

export default function Portfolio() {
    return (
        <Container id="portfolio">
            <div className="grid">
                <h2>Portfolio</h2>
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
    color:#E2E5E9;
    display:flex;
    align-items: center;
    padding: 80px 0px;
    font-size: 16px;
    z-index:10;
    background-image: linear-gradient(180deg, #A500F316, #021BFF03);
    .pageContainer{
    }
    h2{
        color: inherit;
        margin-bottom:32px;
        grid-column:2/8;
        margin-bottom: 64px;
    }
    @media(max-width: 1260px){
        padding: 0px 52px;
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
            grid-column:1/13;
        }

    }
    @media(max-width:480px){
        padding:0px;
    }
`