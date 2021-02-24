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

const Container = styled.div`
    display:flex;
    justify-content:center;
    padding: 80px 0px;
    background: ${colors.till};
    z-index: 10;
    position:relative;
    .grid{
        column-gap: 20px;
        row-gap: 100px;
    }
    h2{
        grid-column: 4/10;
        margin-bottom: -60px;
    }

    /* responsive code goes here  */
    @media(max-width: 1230px){
        padding: 80px 60px;
    }

    @media(max-width: 1010px){
        /* Font sizes should change here */
        h2{
            grid-column: 3/12;
        }
    }
    @media(max-width: 780px){
        h2{
            grid-column: 2/12;
        }

        .grid{
            row-gap: 60px;
        }
    }

    @media(max-width: 640px){
        padding: 20px;
        padding-top: 40px;
    }
`