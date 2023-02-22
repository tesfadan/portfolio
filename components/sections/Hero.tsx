import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import colors from '../../styles/Colors';

export default function Hero() {
    return (
        <Container id="home">
            <div className="grid">
                <div className="content">
                    <p className="new-blurb heading2">
                    My name is <a className="heading2" target="_blank" href="https://twitter.com/tesfadan">Tesfa Demissie</a> and I’m a Product Designer at <a className="heading2" target="_blank" href="https://combinevb.com">Combine Ventures</a> working on exciting startups. I spend <br /> most of my time thinking, designing & coding.
                    </p>
                    <p className="heading2">
                        Check out my <a target="_blank" href="/portfolio" className="heading2">design portfolio</a> here.
                    </p>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
   h1, p {
        grid-column: 1/7;
   }
   p{
    font-size: 28px;
   }
`;