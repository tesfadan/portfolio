import styled from 'styled-components'

export default function Credit() {
    return (
        <Container>
            <div className="grid">
                <div className="content">
                    <p>Designed & Developed by Tesfa Demissie</p>
                    <a rel="noreferrer" href="https://github.com/tesfadan/portfolio" className="underline" target="_blank">View Source Code</a>
                </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
    padding: 80px 0px;
    color:#E2E5E9;
    display:flex;
    align-items: center;
    font-size: 16px;
    bottom: 0px;
    background:#000303;
    background-image: linear-gradient(-180deg, #1f4cc916, #34EBF705);
    text-align:center;
    .content{
        display:flex;
        flex-flow: column;
        color:#aeb9c7;
        grid-column: 2/12;
    }
    p{
        margin-bottom: 6px;
    }
    a, p{
        font-size: 14px;
        width: max-content;
        align-self:center;
    }

    @media(max-width: 640px){
        padding: 44px 0px;

        p{
            margin-bottom: 2px;
        }
    }
`