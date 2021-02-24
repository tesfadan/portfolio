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
                    <li>
                        <a href={link} target="_blank">
                            <img src="/assets/icons/open.svg" height="18" width="18" />
                        </a>
                    </li>
                    <li>
                        <a href={sourceCode} target="_blank">
                            <img src="/assets/icons/github.svg" height="18" width="18" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="main">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </Container>
    );
}

export const Container = styled.div`
    border-radius:4px;
    padding: 20px 26px;
    z-index: 3;
    border: 1px solid #44464d80;
    display: flex;
    flex-wrap: wrap;
    animation: reveal 0.5s ease-in;

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
        li{
            display:flex;
            margin-left: 10px;
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


`;
