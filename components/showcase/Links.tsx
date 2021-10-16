import React from 'react';
import { LinkButton } from '../UI/Button';
import styled from 'styled-components'
import { event } from '../../head/gtag';
import { Project } from "../types"

export default function Links({ project }: { project: Project }) {
    return (
        <Container className="sectionItem links">
            <h3>Final Product</h3>
            <ul>
                {project.links.map(
                    (link, index) => <li key={`link-${index}`}>
                        <LinkButton rel="noreferrer" href={link.link} target="_blank" small onClick={() => event({ action: "Link Clicked", category: "Showcase Links", label: "Showcase Link Clicked", value: link.link })}>
                            <img src={`/assets/icons/${link.label.includes('ode') ? 'github' : 'open'}.svg`} height="18" width="18" alt="Open Project" />
                            {link.label}
                        </LinkButton>
                    </li>
                )}
            </ul>
        </Container>
    );
}


export const Container = styled.div`
    h3{
        font-size: 16px;
        margin-bottom: 26px;
    }
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