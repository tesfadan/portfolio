import styled from 'styled-components';
import colors from '../../styles/Colors';

export default function PortfolioCard({ ...props }) {
    const { name, description, image, tags, link, sourceCode, flip } = props;
    const Tag = ({ value }) => <li className="label">{value}</li>;
    return (
        <Container flip={flip} className={flip ? `flip` : ''}>
            <div className="image">
                <img src={image} height="200" width="500" alt={name} />
            </div>

            <div className="content reveal">
                <ul className="tags">
                    {tags.split(",").map((tag, index) => <Tag value={tag} key={`${name}-tag-${tag}`} />)}
                </ul>
                <div className="main">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <ul className="links">
                    <li>
                        <a rel="noreferrer" href={link} target="_blank">
                            <img src="/assets/icons/open.svg" height="18" width="18" alt="Open Project" />
                            <span className="screenReaderOnly">
                                Open Project
                            </span>
                        </a>
                    </li>
                    {sourceCode != null ?
                        <li>
                            <a rel="noreferrer" href={sourceCode} target="_blank">
                                <img src="/assets/icons/github.svg" height="18" width="18" alt='View Source Code' />
                                <span className="screenReaderOnly">
                                    View Source Code
                            </span>
                            </a>
                        </li> : null
                    }
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

    .image{
        grid-column: 1/9;
        grid-row: 1;
        background: ${colors.primary};
        border-radius:2px;
        display:flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: #cbe5e6;
        img{
            height: 400px;
            width: auto;
            object-fit: contain;
            transition: 0.1s ease-in;
            max-width: 100%;
            &:hover{
            transition: 0.2s;
            transform:scale(1.1)
        }
        }
    }

    .content{
        border-radius:2px;
        grid-column: 8/13;
        grid-row: 1;
        margin: 40px 0px;
        padding: 40px;
        background: ${colors.white};
        z-index: 3;
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
        li{
            display:flex;
        }
        a{
            border: 1px solid transparent;
            padding: 4px 10px;
            margin-right: 10px;
            border-radius: 4px;

            &:hover,
            &:focus {
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
        .image{
            grid-column: 1/13;
            padding: 60px;

        }
        .content{
            grid-column: 1/13;
            grid-row: 2;
            margin: 0px;
        }

        &.flip{
            .image{
                grid-column: 1/13;
                padding: 60px;
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
        .image{
            padding: 20px;
        }
        .content{
            padding: 20px;
        }
        .main{
            padding-right: 60px;
        }
    }
`;
