import React from 'react';
import styled from 'styled-components'

export default function Menu() {
    return (
        <Container>
            MENU
        </Container>
    );
}


const Container = styled.div`
    display:flex;
    position: fixed;
    height: 100vh;
    width:300px;
    right:0px;
    top: 0px;
    background:red;
    z-index: 102;
`