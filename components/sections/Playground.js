import styled from 'styled-components'
import PlaygroundProjects from '../../content/PlaygroundProjects';
import colors from '../../styles/Colors';
import PlaygroundCard from '../UI/PlaygroundCard';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring'


export default function Playground() {
    const [showMore, setShowMore] = useState(false);
    return (
        <Container id="portfolio">
            <div className="grid">
                <h2>Playground</h2>
                <div className="content">
                    {PlaygroundProjects.map((project, index) => showMore ? <PlaygroundCard {...project} key={`playground-${index}`} /> : index < 2 ? <PlaygroundCard {...project} key={`playground-${index}`} index={index} /> : null)}
                </div>
                <div className="more">
                    <button className="button" onClick={e => setShowMore(!showMore)}>{!showMore ? 'Show More' : 'Show Less'}</button>
                </div>
            </div>
        </Container >
    );
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    padding: 80px 0px;
    background: ${colors.till};
    transition: 2s;
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
        transition: 2s;
    }
`