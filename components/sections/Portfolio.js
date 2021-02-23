import styled from 'styled-components'
import colors from '../../styles/Colors';

export default function Portfolio() {
    return (
        <Container>
            <div className="grid">
                <h2>Portfolio</h2>
            </div>
        </Container>
    );
}


const Container = styled.div`
    display:flex;
    justify-content:center;
    padding: 80px 0px;
    background: ${colors.till};
    min-height: 100vh;
    .grid{
        grid-gap: 80px;
    }
    h2{grid-column-start: 4}
`