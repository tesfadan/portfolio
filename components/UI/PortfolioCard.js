import styled from 'styled-components';
import colors from '../../styles/Colors';

export default function PortfolioCard({ ...props }) {
    const { name, description, image, tags, link, sourceCode, flip } = props;
    const Tag = ({ value }) => <li className="label">{value}</li>;
    return (
        <Container flip={flip} className={flip ? `flip` : ''}>
            <div className="image">
                <img src={image} height="200" width="500" />
            </div>

            <div className="content">
                <ul className="tags">
                    {tags.split(",").map(tag => <Tag value={tag} />)}
                </ul>
                <div className="main">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <ul className="links">
                    <li>
                        <a href={link} target="_blank">
                            <img src="/assets/icons/open.svg" height="18" width="18" />
                        </a>
                    </li>
                    {sourceCode != null ?
                        <li>
                            <a href={sourceCode} target="_blank">
                                <img src="/assets/icons/github.svg" height="18" width="18" />
                            </a>
                        </li> : null
                    }
                </ul>
            </div>
        </Container>
    );
}

export const Container = styled.div`
    grid-column: 1/end;
    display: inherit;
    grid-template-columns: inherit;
    gap: inherit;
    &:hover{
       .image ::before, .image ::after{
            opacity: 0;
        }

        .image img{
            transform:scale(1.01)
        }
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
        &::before, &::after{
            display: block;
            content:" ";
            width: 100%;
            height: 100%;
            position:absolute;
            opacity: 1;
            transition: 0.5s ease-in;
        }
        &::before{
            background:black;
            mix-blend-mode: saturation;
            z-index: 2
        }
        &::after{
            background:#3092EC;
            mix-blend-mode: hard-light;
            z-index: 3;
        }

        img{
            max-height: 430px;
            height: 100%;
            object-fit: contain;
            transition: 0.5s ease-in;
        }
    }


    .content{
        border-radius:2px;
        grid-column: 8/end;
        grid-row: 1;
        margin: 40px 0px;
        padding: 40px;
        background: ${colors.white};
        z-index: 3;
    }

    &.flip{
        .image{
            grid-column: 5/end;
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
`;
