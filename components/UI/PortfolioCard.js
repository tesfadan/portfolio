import styled from 'styled-components'
import Image from "next/image"

export default function PortfolioCard({ ...props }) {
    const { name, description, image, tags, link, github, } = props;
    const Tag = ({ value }) => <li>{value}</li>;
    return (
        <Container>
            <div className="image">
                <Image src={image} layout="fill" />
            </div>

            <div className="content">
                <ul className="header">
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
    background-color:red;

    .links{
        display: flex;
    }
`;
