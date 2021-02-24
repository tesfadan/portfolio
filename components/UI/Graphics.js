import styled from 'styled-components';


export default function Graphics() {
    return <Container>
        <img src="/assets/images/tesfa.jpg" alt="Tesfa Demissie" width="1200" height="584" />
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
        opacity:0.2;
        mix-blend-mode: overlay;
    }
`