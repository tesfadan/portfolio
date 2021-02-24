import styled from 'styled-components'
import PlaygroundProjects from '../../content/PlaygroundProjects';
import Projects from '../../content/Projects';
import colors from '../../styles/Colors';
import PlaygroundCard from '../UI/PlaygroundCard';


export default function Playground() {
    return (
        <Container id="portfolio">
            <div className="grid">
                <h2>Playground</h2>
                <div className="content">
                    {PlaygroundProjects.map((project, index) => <PlaygroundCard {...project} key={`playground-${index}`} />)}
                </div>
                <div className="more">
                    <button className="button">Show More</button>
                </div>
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
        row-gap: 60px;
    }
    h2{
        grid-column-start: 4;
        /* margin-bottom: 60px; */
    }
    button{
        grid-column: 1/6
    }
    .content{
        grid-column:2/12;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    .more{
        grid-column: 2/12;
        display: flex;
        justify-content:center;
    }
`