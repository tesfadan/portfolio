import styled from 'styled-components'

export default function Contact() {
    return <>
        <div id="contact" />
        <Container>
            <div className="grid">
                <div className="content">
                    <h2>Get in Touch</h2>
                    <p>Feel free to email me or connect with me on social media if you would like to chat.</p>
                    <a className="email" href="mailto:tesfadaniel1@gmail.com" >tesfadaniel1@gmail.com</a>
                    <ul>
                        <li><a href="https://twitter.com/tesfadan">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/tesfadan/">Linkedin</a></li>
                    </ul>

                    <div className="credit">
                        <p>Designed & Developed by Tesfa Demissie</p>
                        <a rel="noreferrer" href="https://github.com/tesfadan/portfolio" className="underline">View Source Code</a>
                    </div>
                </div>
            </div>
        </Container>
    </>
}

const Container = styled.div`
        padding: 180px 0px;
        /* position: sticky; */
        background: #021B22;
        color:#E2E5E9;
        display:flex;
        align-items: center;
        font-size: 16px;
        /* bottom: 0px; */
        z-index: 1;
        background:#010e11;
        background-image: linear-gradient(45deg, #1f4cc916, #34EBF705);

        .content{
            grid-column: 3/8;
            color:#aeb9c7;
        }
        a{
            transition: 0.1s ease-in-out;
            font-weight: 600;
            position:relative;
            &:after, &:before{
                display: block;
                content: " ";
                width: 0%;
                height: 2px;
                border-radius: 2px;
                position:absolute;
                bottom:0px;
            }

            &:before{
                background:#3e98ff;
                z-index:2;
                transition: 0.3s ease-in-out;
            }

            &:after{
                background:#E2E5E9;
                transition: 0.15s ease-out;
            }

            &:hover{
                color: #E2E5E9;
                ::before{
                    width: 100%;
                }
                ::after{
                    width: 100%;
                }
            }
        }

        .email{
            color:#E2E5E9;
        }
        ul{
            display:flex;
            margin-top:16px;
        }
        li{
            margin-right: 32px;
        }
        .credit{
            margin-top:32px;
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