import Link from "next/link"
import styled from 'styled-components'
import { LinkButton } from "../components/UI/Button"


export default function Error() {
    return <Container >
        <div className="grid">
            <div className="error">
                <h1>404</h1>
                <p>Oops... It looks like this page does not exist or has moved.</p>
                <Link href="/" >
                    <LinkButton>Go Back Home</LinkButton>
                </Link>
            </div>
        </div>
    </Container>
}


const Container = styled.div`
    height: 100vh;
    background:#02141a;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    background-image: linear-gradient(180deg, #A500F304, #34EBF705);
    background-image: linear-gradient(180deg, #1a236510, #34EBF705);
    text-align:center;
    h1{
        font-weight: 600;
        font-size: 64px;
        line-height: 64px;
        margin-bottom:24px;
        color: #e2e7ec;
        letter-spacing: -1px;
        position:relative;
        left:-12px;
    }
    p{
        font-size: 18px;
        color: #c5cdd8;
        font-weight: 500;
    }
    a{
        display: inline-block;
        margin-top: 32px;
        text-align:center;
        position:relative;
        width:max-content;
        color: #e2e7ec;
        font-weight: 500;
    }
    .error{
        display:flex;
        text-align:center;
        flex-flow: column;
        flex-wrap: wrap;
        justify-content:center;
        align-items: center;
        position:relative;
        top: -64px;
        grid-column: 1/end;
        padding: 0px 32px;
    }
    @media(max-width:480px){
        .error{
            padding: 0px;
        }
    }
`