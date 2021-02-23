import styled from 'styled-components'
import colors from '../../styles/Colors';
import PortfolioCard from '../UI/PortfolioCard';

export default function Portfolio() {
    return (
        <Container id="portfolio">
            <div className="grid">
                <h2>Portfolio</h2>
                <PortfolioCard
                    name="linkup.page"
                    description="Multi-platform transit app built using React and Ionic for fetching Winnipeg Transit data such as bus stops and routes with real-time schedule updates."
                    tags="React, Sass, Firebase"
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
    padding-bottom: 300px;
    .grid{
        grid-gap: 80px;
    }
    h2{grid-column-start: 4}
`