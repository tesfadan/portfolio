import React from 'react';
import styled from 'styled-components'
import Link from "next/link"
import { Project } from '../types';

export default function MoreProjects({ Projects, thisProject }: { Projects: Project[], thisProject: string }) {
    return (
        <Container className="sectionItem more">
            <h3>More Projects</h3>
            <ul>
                {Projects.map(project => project.url === thisProject ? null :
                    <Link href={`/projects/${project.url}`}>
                        <li>
                            <img src={`/assets/projects/${project.url}/icon.png`} height="54" width="54" alt={project.name} />
                            <div>
                                <span>{project.name}</span>
                                <label>{project.label}</label>
                            </div>
                        </li>
                    </Link>
                )}
            </ul>
        </Container>
    );
}

export const Container = styled.div`
    margin-top: 88px;
    h3{
        font-size: 16px;
        margin-bottom: 26px;
    }

    li{
        padding: 8px;
        background: #C4C4C408;
        border:  1px solid #24263550;
        border-radius:12px;
        margin-bottom: 16px;
        display:flex;
        align-items:center;
        transition: 0.055s ease;
        cursor: pointer;
        label{
            cursor: pointer;
        }
        &:hover{
            background: #3e98ff10;
            border: 1px solid #A1CDFF20;
            img{opacity: 1;}
        }

        img{
            transition: inherit;
            opacity: 0.85;
        }
        div{
            display:flex;
            flex-flow:column;
            margin-left: 18px;
            height: max-content;
        }
        span{
            margin-bottom: -6px;
            margin-top: 4px;
            font-weight: 500;
        }
        label{
            font-size: 12px;
            opacity: 0.8;
        }
    }
`