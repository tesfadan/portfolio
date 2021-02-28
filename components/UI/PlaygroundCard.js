import styled from 'styled-components';
import colors from '../../styles/Colors';

export default function PlaygroundCard({ ...props }) {
    const { name, description, tags, link, sourceCode, unMount, onTransitionEnd, index } = props;
    const Tag = ({ value }) => <li className="label">{value}</li>;
    return (
        <Container onTransitionEnd={onTransitionEnd}>
            <div className="cardHeader">
                <ul className="tags">
                    {tags.split(",").map((tag, index) => <Tag value={tag} key={`${name}-tag-${tag}`} />)}
                </ul>
                <ul className="links">
                    {link != null ? <li>
                        <a rel="noreferrer" href={link} target="_blank">
                            <img src="/assets/icons/open.svg" height="18" width="18" alt="Open Project" />
                            <span className="screenReaderOnly">
                                Open Project
                            </span>
                        </a>
                    </li> : null}
                    {sourceCode != null ?
                        <li>
                            <a rel="noreferrer" href={sourceCode} target="_blank">
                                <img src="/assets/icons/github.svg" height="18" width="18" alt="View Source Code" />
                                <span className="screenReaderOnly">
                                    View Source Code
                            </span>
                            </a>
                        </li> : null}
                </ul>
            </div>
            <div className="main">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </Container>
    );
}

export const Container = styled.div`
    border-radius:4px;
    padding: 20px;
    padding-top: 18px;
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    animation: reveal 0.5s ease-in;
    background: #171b25;
    border:  1px solid #24263590;
    color: #aeb9c7; 
    h3{
        color: #E2E5E9;
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 12px;
    }

    p{
        font-size: 16px;
        line-height: 28px;
        color: #aeb9c7;
    }

    @keyframes reveal{
        from{
            opacity: 0;
            top: 40px;
        }
        to{
            opacity: 1;
            top: 0px;
        }
    }

    .cardHeader{
        display: flex;
        margin-bottom: 100px;
        width: 100%;
        justify-content: space-between;

    }
    .tags{
        li{
            margin-right: 16px;
        }
        display:flex;
    }
    .main{
        padding-right: 40px;
        align-self: flex-end;
    }

    p{
        margin-bottom: 0px;
    }


    .links{
        display: flex;
        position:relative;
        left: 12px;
        top: -4px;
        height: max-content;
        li{
            display:flex;
            margin-left: 10px;
            opacity: 0.9;
        }
        a{
            border: 1px solid transparent;
            padding: 4px 10px;
            border-radius: 4px;

            &:hover,
            &:focus {
                transform: translateY(-3px);
                border: 1px solid ${colors.tillDark}
            }
            transition: 0.125s ease-in;
        }
    }


    @media(max-width: 780px){
        .tags{
            display: none;
        }
        .links{
            left: -10px;
            li{
                margin-left: 0px;
                margin-right:10px;
            }

        }
        .main{
            padding-right: 0px;
        }
    }

`;
