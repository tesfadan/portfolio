import styled from 'styled-components'

export default function About() {
    return <Container id="about">
        <div className="grid">
            <div className="content">
                <h2>About</h2>
                    <p>
                        I am a frontend developer with a keen 
                        interest in clean and modern UI & UX. I have 
                        worked on several projects, including web 
                        and mobile app development. My passion is 
                        for building beautiful interfaces that 
                        provide an optimal user experience.
                    </p>
                <p>
                    Here are a few technologies I've used lately:
                    </p>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>Git</li>
                    <li>Next</li>
                    <li>Ionic</li>
                    <li>Firebase</li>
                </ul>
            </div>
        </div>
    </Container>
}


export const Container = styled.div`
    min-height: 100vh;
    background: #02141a;
    color:#E2E5E9;
    display:flex;
    align-items: center;
    padding: 80px 0px;
    font-size: 16px;
    z-index:10;
    background-image: linear-gradient(180deg, #34EBF705, #A500F316);

    h2{
        grid-column:2/8;
    }
    p{
        color: #c5cdd8;
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 16px;
    }
    a{
        color: #5cb3fa;
        font-weight: 600;
        &:hover{
            color: #3e98ff;
        }
    }
    .content{
        grid-column:3/9;
        padding-right: 60px;
    }
    
    li{
        color: inherit;
        border: 1px solid #3e98ff;
        box-sizing: border-box;
        border-radius: 3px;
        padding: 8px 16px;
        width:max-content;
        margin-right: 16px;
        margin-bottom: 16px;
        font-size: inherit;
        user-select: none;
        line-height:24px;
    }
    ul{
        display:flex;
        flex: 1 1 35%;
        flex-wrap: wrap;
    }


    @media(max-width: 1260px){
        padding: 60px 60px;

        .content{
            grid-column:3/10;
        }
    }

    @media(max-width: 1020px){
        /* min-height:unset; */
        padding: 80px;
        .content{
            grid-column:3/11;
            padding-right: 0px;
        }
    }

    @media(max-width: 860px){
        .content{
            grid-column:2/12;
        }
    }
    @media(max-width: 760px){
        padding: 80px 40px;
        .content{
            grid-column:2/12;
        }
        ul{
            width: 100%;
        }
        h2{
            font-size: 24px;
            margin-bottom: 24px;
        }
    }

    @media(max-width: 640px){
        .content{
            grid-column:1/13;
        }
    }
    @media(max-width: 480px){
        padding: 40px 0px;
    }
`;
