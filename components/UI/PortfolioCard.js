import styled from 'styled-components'
import Image from "next/image"
import colors from '../../styles/Colors';

export default function PortfolioCard({ ...props }) {
    const { name, description, image, tags, link, github, } = props;
    const Tag = ({ value }) => <li className="label">{value}</li>;
    return (
        <Container>
            <div className="image">
                <Image src={image} layout="fill" />
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
                            <Image src="/assets/icons/open.svg" height="18" width="18" />
                        </a>
                    </li>
                    {github != null ?
                        <li>
                            <a href={github} target="_blank">
                                <Image src="/assets/icons/github.svg" height="18" width="18" />
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
    height: 200px;
    display: inherit;
    grid-template-columns: inherit;
    gap: inherit;

    .image{
        grid-column: 1/10;
        grid-row: 1;
        background: ${colors.primary};
        border-radius:2px;
    }
    .content{
        border-radius:2px;
        grid-column: 8/end;
        grid-row: 1;
        margin: 40px 0px;
        padding: 40px;
        background: ${colors.white};
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
                /* background-color: ${colors.till}; */
                border: 1px solid ${colors.tillDark}
            }
            transition: 0.125s ease-in;
        }
    }
`;
