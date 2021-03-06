import React from 'react';
import styled from 'styled-components'

export default function MoreProjects({ Projects }) {
    return (
        <Container className="sectionItem more">
            <h4>More Projects</h4>
            <ul>
                {Projects.map(project =>
                    <li>
                        <img src={`/assets/images/projects/${project.image}Icon.png`} />
                        <div>
                            <span>{project.name}</span>
                            <label>{project.label}</label>
                        </div>
                    </li>
                )}
            </ul>
        </Container>
    );
}

export const Container = styled.div`
    margin-top: 88px;
    li{
        padding: 8px;
        background: #C4C4C408;
        border:  1px solid #24263550;
        border-radius:12px;
        display:flex;
        margin-bottom: 16px;
        img{
            opacity: 0.85;
        }
        div{
            display:flex;
            flex-flow:column;
            margin-left: 18px;
            justify-content:center;
        }
        span{
            margin-bottom: -6px;
            font-weight: 500;
        }
        label{
            font-size: 12px;
            opacity: 0.8;
        }
    }
`