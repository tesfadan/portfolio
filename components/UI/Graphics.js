import styled from 'styled-components';


export default function Graphics() {
    return <Container>
        <img src="/assets/images/tesfa.jpg" alt="Tesfa Demissie" />
    </Container>
}


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: " ";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #289fc4;
        z-index: 2;
        mix-blend-mode: hard-light;

        /* background:#759DA6; */
        opacity:0.3;
        mix-blend-mode: overlay;
    }
`