import Link from "next/link"
import styled from 'styled-components'


export default function Error() {
    return <Container className="section">
        <div className="grid">
            <div className="error">
                <h1>404</h1>
                <p>Oops... It looks like this page does not exist or has moved.</p>
                <Link href="/">Home</Link>
            </div>
        </div>
    </Container>
}


const Container = styled.div`
    .error{
        grid-column: 1/end;
        display: flex;
        flex-flow: column;
        align-items: center;
        text-align: center;
    }
`