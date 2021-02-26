import styled from 'styled-components'
import colors from '../../styles/Colors';
import Graphics from '../UI/Graphics';

export default function About() {
    return (
        <Container id="about">
            <div className="grid">
                <div className="content">
                    <h2>About</h2>
                    <p>
                        Hello, I'm Tesfa, a front-end developer based in Winnipeg, Manitoba.
                    </p>
                    <p>
                        I knew I wanted to be a developer working on JavaScript assignments in my first year at
                        <a rel="noreferrer" target="_blank" href="https://www.rrc.ca/"> Red River College</a>, taking the Digital Media Design program.
                        I majored in <a rel="noreferrer" target="_blank" href="https://www.rrc.ca/creativearts/dmd/interaction-design-and-development/"> Web Design and Development </a> and had tremendous
                        opportunities to study under distinguished instructors.
                        As a student who enjoyed solving technical problems, I have
                        always gone above and beyond to polish my projects.
                        I am quite excited to kick start my career in the industry as I will be graduating shortly.
                    </p>
                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>
                    <ul>
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Ionic</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <img src="/assets/images/tesfaCrop.jpg" alt="Tesfa Demissie" />
            </div>
        </Container>
    );
}

export const Container = styled.div`
    min-height: 100vh;
    background: #021B22;
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
        grid-column:2/8;
    }
    img{
        grid-column: 9/13;
        border-radius:16px;
        position:relative;
        height:100%;
        width:100%;
        object-fit: cover;
        max-height: 520px;
        &:after{
            content:"";
            display: block;
            width:100%;
            height:100%;
            background:black;
            position:fixed;
            top: 0px;
            z-index:20;
        }
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
        width: 70%;
        display:flex;
        flex: 1 1 35%;
        flex-wrap: wrap;
    }


    @media(max-width: 1260px){
        min-height:unset;
        padding: 60px 60px;

        .content{
            grid-column:1/8;
        }
    }

    @media(max-width: 1020px){
        padding: 80px;
        .content{
            grid-column:2/12;
        }
        img{
            display: none;
        }
    }
    @media(max-width: 760px){
        padding: 80px 40px;
        .content{
            grid-column:1/13;
        }
        ul{
            width: 100%;
        }
        h2{
            font-size: 24px;
            margin-bottom: 24px;
        }
    }
    @media(max-width: 480px){
        padding: 40px 0px;
    }


    img{
        opacity: 0.9;
        animation: reveal 1s ease-in;
    }
    @keyframes reveal{
        from{
            opacity: 0;
            top: 20px;
        }
        to{
            opacity: 0.9;
            top: 0;
        }
    }
`;
