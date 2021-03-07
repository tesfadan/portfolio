import styled from 'styled-components'

export default function Contact() {
    return <>
        <div id="contact" />
        <Container>
            <div className="grid">
                <div className="content">
                    <h2>Get in Touch</h2>
                    <p>Feel free to email me or connect with me on social media if you would like to chat.</p>
                    <a className="email underline" href="mailto:tesfadaniel1@gmail.com" >tesfadaniel1@gmail.com</a>
                    <ul>
                        <li><a href="https://twitter.com/tesfadan" className="underline" target="_blank">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/tesfadan/" className="underline" target="_blank">Linkedin</a></li>
                    </ul>

                    {<div className="credit">
                        <p>Designed & Developed by Tesfa Demissie</p>
                        <a rel="noreferrer" href="https://github.com/tesfadan/portfolio" className="underline">View Source Code</a>
                    </div>}
                </div>
            </div>
        </Container>
    </>
}

const Container = styled.div`
        padding: 180px 0px;
        background: #021B22;
        color:#E2E5E9;
        display:flex;
        align-items: center;
        font-size: 16px;
        bottom: 0px;
        background:#010e11;
        background-image: linear-gradient(180deg, #021BFF03, #1f4cc916);


        .content{
            grid-column: 3/8;
            color:#aeb9c7;
        }

        .email{
            color:#E2E5E9;
            font-weight: 600;
        }
        ul{
            display:flex;
            margin-top:16px;
        }
        li{
            margin-right: 32px;
        }
        .credit{
           margin-top:44px;
        }

        @media(max-width: 760px){
            .content{
                grid-column: 3/11;
            } 
        }
        @media(max-width: 480px){
            padding: 180px 0px;
            .content{
                grid-column: 2/12;
            } 
        }

`
