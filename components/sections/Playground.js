import styled from 'styled-components'
import PlaygroundProjects from '../../content/PlaygroundProjects';
import colors from '../../styles/Colors';
import PlaygroundCard from '../UI/PlaygroundCard';
import { useState } from 'react';


export default function Playground() {
    const [showMore, setShowMore] = useState(false);
    return (
        <Container id="playground">
            <div className="grid">
                <h2>Playground</h2>
                <div className="content">
                    {PlaygroundProjects.map((project, index) => showMore ? <PlaygroundCard {...project} key={`playground-${index}`} /> : index < 2 ? <PlaygroundCard {...project} key={`playground-${index}`} index={index} /> : null)}
                </div>
                <div className="more">
                    <button className="button " onClick={e => setShowMore(!showMore)}>{!showMore ? 'Show More' : 'Show Less'}</button>
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
    position:relative;
    z-index:10;
    transition: 2s;
    .grid{
        column-gap: 20px;
        row-gap: 60px;
    }
    h2{
        grid-column: 4/10;
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

    .button{
        padding: 0px 30px;
    }

        /* responsive code goes here  */
    @media(max-width: 1230px){
        padding: 80px 60px;
        .content{
            grid-column:1/13;
        }
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
    }
    @media(max-width: 640px){
        padding: 20px;
        padding-top: 40px;
        .grid{
            row-gap: 20px;
        }
    }

    @media(max-width: 540px){
        .content{
            grid-template-columns: 1fr;
        }
    }
`