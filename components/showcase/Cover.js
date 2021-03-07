import React from 'react';
import styled from 'styled-components'


export default function Cover({ heading, subHeading, coverImage }) {
    return (
        <Container className="cover">
            <div className="title">
                <h1 className="name">{heading}</h1>
                <label>{subHeading}</label>
            </div>
            <img width="1200" height="336" src={coverImage} alt={`${heading} | ${subHeading}`} />
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
    min-height: 200px;
    /* min-height:336px; */
    background: linear-gradient(315deg, #14263420 0%, #1F436420 100%), #02141a;
    img{
        top: 0px;
        position:relative;
        height: 100%;
        object-fit:cover;
    }
    .title{
        position: absolute;
        z-index: 2;
        align-self:center;
        text-align:center;
        .name{
            margin-bottom: 18px;
            color: white;
            font-size: 32px;
            line-height: 32px;
        }
        label{
            color: #A1CDFF;
        }
    }

    @media(max-width: 1260px){
        border-radius: 0px;
        img{
            border-radius: unset;
        }
    }
`