import styled from 'styled-components'
import colors from '../../styles/Colors';
import PortfolioCard from '../UI/PortfolioCard';

export default function Portfolio() {
    return (
        <Container id="portfolio">
            <div className="grid">
                <h2>Portfolio</h2>
                <PortfolioCard
                    name=""
                    description=""
                    tags=""
                    image="/"
                    link=""
                    github=""
                />
            </div>
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    padding: 80px 0px;
    background: ${colors.till};
    min-height: 100vh;
    .grid{
        grid-gap: 80px;
    }
    h2{grid-column-start: 4}
`