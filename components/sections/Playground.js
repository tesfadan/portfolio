import styled from 'styled-components'
import PlaygroundProjects from '../../content/PlaygroundProjects';
import colors from '../../styles/Colors';
import PlaygroundCard from '../UI/PlaygroundCard';
import { useState } from 'react';
import { Button } from '../UI/Button';


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
                    <Button className="button" onClick={e => setShowMore(!showMore)}>{!showMore ? 'Show More' : 'Show Less'}</Button>
                </div>
            </div>
        </Container >
    );
}

const Container = styled.div`
    background: #02141a;
    color:#E2E5E9;
    display:flex;
    align-items: center;
    padding: 80px 0px;
    font-size: 16px;
    z-index:10;
    background-image: linear-gradient(180deg, #021BFF03, #021BFF03);
    button{
        padding: 12px 18px;
    }
    h2{
        color: inherit;
        margin-bottom:32px;
        grid-column:3/8;
        margin-bottom: 64px;
        grid-row: 1;
    }
    .content{
        grid-row: 2;
        grid-column: 2/12;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 80px;
    }
    .more{
        grid-column: 1/13;
        grid-row: 3;
        display:flex;
        justify-content:center;
        height:max-content;

        /* margin-bottom:60px; */

    }

    @media(max-width: 1260px){
        padding: 32px 52px;
        padding-bottom: 64px;
        .content{
            grid-column: 1/13;
        }
    }
    @media(max-width: 760px){
        h2{
            font-size: 24px;
            margin-bottom: 32px;
            grid-column:2/13;
        }
    }
    @media(max-width: 710px){
        padding-bottom: 52px;
        .content{
            grid-column: 2/12;
            grid-template-columns: 1fr;
            margin-bottom: 52px;
        }
    }
    @media(max-width: 640px){
        .content{
            grid-column: 1/13;
        }
    }
    @media(max-width:480px){
        padding:32px 0px;
        padding-bottom: 48px;
    }
`