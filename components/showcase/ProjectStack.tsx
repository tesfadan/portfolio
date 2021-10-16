import React from 'react';
import styled from 'styled-components'
import { Project } from '../types';

export default function ProjectStack({ project }: { project: Project }) {
    return (
        <Container className="sectionItem projectStack">
            <h3>Tools & Tech</h3>
            <ul>
                {project.tags.length > 1 ? project.tags.split(",").map((tag, index) => <li value={tag} key={`${project.name}-tag-${tag}`}>{tag}</li>) : <li>Default Tag</li>}
            </ul>
        </Container>
    );
}


export const Container = styled.div`
    ul{
        display:flex;
        flex: 1 1 35%;
        flex-wrap: wrap;
        margin-left: -6px;
    }
    li{
        background: #67ADFF20;
        padding: 4px 15px;
        border-radius: 32px;
        margin-right: 16px;
        margin-bottom: 16px;
    }

    h3{
        font-size: 16px;
        margin-bottom: 26px;
    }
`