import React from 'react';
import styled from 'styled-components'


export default function Cover({ name }) {
    return (
        <Container className="cover">
            <div className="title">
                <h2>{name}</h2>
                <label>Mobile App design & Development</label>
            </div>
            <img src="/assets/images/showcase/winnipeg.png" />
        </Container>
    );
}

export const Container = styled.div`
    grid-column: 1/end;
    display:flex;
    justify-content:center;
    align-items:center;
    height: max-content;
    border-radius:0px 0px 32px 32px;
    overflow:hidden;
    margin-bottom: 72px;
    .cover img{
        top: 0px;
        position:relative;
    }

    .title{
        position: absolute;
        z-index: 2;
        align-self:center;
        text-align:center;
        h2{
            margin-bottom: 18px;
            color: white;
        }
        label{
            color: #A1CDFF;
        }
    }
`