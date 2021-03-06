import React from 'react';
import { LinkButton } from '../UI/Button';
import styled from 'styled-components'

export default function Links({ project }) {
    return (
        <Container className="sectionItem links">
            <h4>Final Product</h4>
            <ul>
                <li>
                    <LinkButton rel="noreferrer" href={project.link} target="_blank" >
                        <img src="/assets/icons/open.svg" height="18" width="18" alt="Open Project" />
                    Download
                </LinkButton>
                </li>
                {<li>
                    <LinkButton rel="noreferrer" href={project.sourceCode} target="_blank">
                        <img src="/assets/icons/github.svg" height="18" width="18" alt='View Source Code' />
                        Source Code
                </LinkButton>
                </li>}
            </ul>
        </Container>
    );
}


export const Container = styled.div`
    ul{
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
    }
    a{
        display:flex;
        flex-flow: row;
        align-items:center;
        img{
            margin-right:12px;
        }
    }
`