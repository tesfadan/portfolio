import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import colors from '../../styles/Colors';

export default function Hero() {
    return (
        <Container id="home">
            <div className="grid">
                <h1>Hello! I'm Tesfa Demissie, a Product Designer passionate about intuitive and visually stunning digital products.</h1>
                <p>My design philosophy is centred on understanding the user's needs and delivering solutions that can truly improve their lives. I strive to create products that are not only functional and user-friendly, but also beautiful.</p>
                <a href=''>Learn more</a>
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