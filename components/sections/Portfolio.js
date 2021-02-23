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
                    <PortfolioCard {...project} flip={index % 2 != 0} />
                )}
            </div>
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    padding: 80px 0px;
    background: ${colors.till};
    .grid{
        column-gap: 20px;
        row-gap: 100px;
    }
    h2{
        grid-column-start: 4;
        margin-bottom: -60px;
    }
`