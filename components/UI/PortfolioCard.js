import Link from "next/link";
import React from "react";
import styled from 'styled-components';
import colors from '../../styles/Colors';

export default function PortfolioCard({ ...props }) {
    const { name, description, image, tags, link, sourceCode, flip, url } = props;
    const Tag = ({ value }) => <li className="label">{value}</li>;

    return (
        <Container flip={flip} className={flip ? `flip` : ''}>
            <picture className="image">
                <source type="image/webp" srcSet={`../assets/projects/${url}/${image}.webp`} />
                <source type="image/png" srcSet={`../assets/projects/${url}/${image}.png`} />
                <img src={image} height="200" width="500" alt={name} />
            </picture>

            <div className="content reveal">
                <ul className="tags">
                    {/* Only render the first three tags */}
                    {tags.split(",").map((tag, index) => index > 2 ? null : <Tag value={tag} key={`${name}-tag-${tag}`} />)}
                </ul>
                <div className="main">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <ul className="links">
                    <Link href={`/projects/${url}`}>
                        <a rel="noreferrer" >
                            View Project
                            {/* <img src="/assets/icons/arrow.svg" height="18" width="18" alt="Open Project" /> */}
                        </a>
                    </Link>
                </ul>
            </div>
        </Container>
    );
}

export const Container = styled.div`
    grid-column: 1/13;
    display: inherit;
    grid-template-columns: inherit;
    gap: inherit;

    margin-bottom: 80px;
    padding-bottom: 20px;
    h3{
        color: #E2E5E9;
    }

    p{
        font-size: 16px;
        line-height: 28px;
        color: #aeb9c7;
    }

    .image{
        grid-column: 1/9;
        grid-row: 1;
        background: ${colors.primary};
        border-radius:2px;
        display:flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: #24263560;
        border:  1px solid #242635;

        img{
            height: 360px;
            width: auto;
            object-fit: contain;
            transition: 0.1s ease-in;
            max-width: 100%;
            opacity: 0.7;
        }
    }

    &:hover {
            img{
                opacity: 0.9;
                transition: 0.2s;
                transform:scale(1.005);
            }
        }

    .content{
        border-radius:2px;
        grid-column: 8/13;
        grid-row: 1;
        margin: 40px 0px;
        padding: 32px 40px;
        z-index: 3;
        background: #171b25;
        border:  1px solid #24263590;
    }

    &.flip{
        .image{
            grid-column: 5/13;
        }
        .content{
            grid-column: 1/6;
        }
    }

    .tags{
        li{
            margin-right: 16px;
            margin-bottom: 40px;
            color: #aeb9c7; 
        }
        display:flex;
    }
    
    .main{
        margin-bottom: 60px;
        padding-right: 40px;
    }


    .links{
        display: flex;
        position:relative;
        left: -10px;
        bottom: -10px;

        a{
            border: 1px solid transparent;
            padding: 4px 10px;
            margin-right: 10px;
            border-radius: 4px;
            display:flex;
            flex-flow: row;
            align-items: center;

            img{
                margin:0px 12px;
            }
            color: #aeb9c7; 
            &:hover,
            &:focus {
                color: #e8eaec; 
                transform: translateY(-3px);
                border: 1px solid ${colors.tillDark}
            }
            transition: 0.125s ease-in;
        }
    }


    /* responsive code goes here  */
    @media(max-width: 1230px){
        .image{
            grid-column: 1/8;

            img{
                height: 320px;
            }
        }
        .content{
            grid-column: 7/13;
        }

        &.flip{
            .image{
                grid-column: 6/13;
            }
            .content{
                grid-column: 1/7;
            }
        }
        .main{
            padding-right: 0px;
        }
    }


    @media(max-width: 1010px){
        /* Font sizes should change here */
        .image img{
            height: 280px;
        }
    }
    @media(max-width: 780px){
        row-gap: 0px;
        grid-column: 2/12;
        margin-bottom: 60px;

        .image{
            grid-column: 1/13;
            padding: 60px;
            border-bottom: 0px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
        .content{
            grid-column: 1/13;
            grid-row: 2;
            margin: 0px;
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
        }

        &.flip{
            .image{
                grid-column: 1/13;
                /* padding: 60px; */
        }
        .content{
            grid-column: 1/13;
            grid-row: 2;
            margin: 0px;
        }
        }
    }

    @media(max-width: 640px){
        grid-column: 1/end;
        margin-bottom: 40px;
        .image{
            padding: 20px;
        }
        .content{
            padding: 20px;
        }
        .main{
            padding-right: 0px;
        }
    }
    @media(max-width:480px){
        margin-bottom: 8px;
    }
`;
