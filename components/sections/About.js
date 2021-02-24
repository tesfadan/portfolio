import styled from 'styled-components'
import colors from '../../styles/Colors';
import Graphics from '../UI/Graphics';

export default function About() {
    return (
        <Container id="about">
            <div className="grid">
                <div className="graphics">
                    <Graphics />

                </div>
                <div className="content">
                    <h2>About</h2>
                    <p>
                        Hello, I'm Tesfa, a front-end developer based in Winnipeg, Manitoba.
                    </p>
                    <p>
                        I knew I wanted to be a developer working on JavaScript assignments
                        in my first year at <a rel="noreferrer" target="_blank" href="https://www.rrc.ca/"> Red River College</a>,
                        taking the Digital Media Design program. I majored in <a rel="noreferrer" target="_blank"
                            href="https://www.rrc.ca/creativearts/dmd/interaction-design-and-development/">
                            Web Design and Development </a>
                        and had tremendous opportunities to study under distinguished instructors.
                        As a student who enjoyed solving technical problems, I have always
                        gone above and beyond to polish my projects. I am quite excited to
                        kick start my career in the industry as I will be graduating shortly.
                    </p>
                    <p>
                        I am currently looking to join a small to medium-sized company,
                        ideally working as a front-end developer.
                    </p>
                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>

                    <div className="techStack">
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>React Native</li>
                        </ul>

                        <ul>
                            <li>HTML & SCSS</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    );
}


const Container = styled.div`
    display:flex;
    justify-content:center;
    padding-bottom: 40px;
    margin-top: -200px;
    padding-top: 100px;
    background: ${colors.white};
    z-index: 10;
    position:relative;

    .graphics{
        grid-column: 1/end;
        position: relative;
        background: #326BFF;
        border-radius: 3px;
        height: 542px;
        margin-bottom: 60px;
        overflow: hidden;

    }
    .content{
        grid-column: 4/11;
    }
    a{
        color: ${colors.primaryDark};
        transition: 0.1s ease-in;
        &:hover{
            color: ${colors.primaryLight}
        }
    }

    .techStack{
        display:flex;
    }

    li{
        margin-right: 80px;
        position:relative;
        right: -4px;
        color: ${colors.black};
        margin-bottom: 10px;
        line-height: 30px;
        &:before{
            display: block;
            content: "￫";
            left: -18px;
            position: absolute;
            font-size: 18px;
            top: -2px;
            color: ${colors.primary}
        }
    }

`