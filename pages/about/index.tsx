import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from "styled-components";
import Head from "next/head";


 const About = () => {
    const [content, setContent] = useState([
        {
            section: "Summary",
            content: "Hello, I'm [Your Name], a passionate product designer with extensive experience in both UX and UI design. I thrive on the challenge of crafting engaging experiences that deliver real value to the end user. My background in design, paired with my strong technical skills, enables me to approach projects from a holistic perspective and deliver innovative solutions that meet business objectives."
        },
        {
            section: "Background",
            content: "Hello, I'm [Your Name], a passionate product designer with extensive experience in both UX and UI design. I thrive on the challenge of crafting engaging experiences that deliver real value to the end user. My background in design, paired with my strong technical skills, enables me to approach projects from a holistic perspective and deliver innovative solutions that meet business objectives."
        },
        {
            section: "Education",
            content: "Hello, I'm [Your Name], a passionate product designer with extensive experience in both UX and UI design. I thrive on the challenge of crafting engaging experiences that deliver real value to the end user. My background in design, paired with my strong technical skills, enables me to approach projects from a holistic perspective and deliver innovative solutions that meet business objectives."
        },
        {
            section: "Experience",
            content: "Hello, I'm [Your Name], a passionate product designer with extensive experience in both UX and UI design. I thrive on the challenge of crafting engaging experiences that deliver real value to the end user. My background in design, paired with my strong technical skills, enables me to approach projects from a holistic perspective and deliver innovative solutions that meet business objectives."
        }
    ])

    return <>
        <Head>
        </Head>
        <Container className="section">
            <div className="grid">
                <aside>
                    <div className="nav">
                    <h1>About</h1>
                        <ul>
                            {content.map(data => <li key={`li-${data.section}`}><AnchorLink href={`#${data.section}`}>{data.section}</AnchorLink></li>)}
                        </ul>
                    </div>
                </aside>
                <div className="content">
                        {content.map(data => <p  key={`p-${data.section}`} id={data.section}>{data.content}</p>)}
                </div>
            </div>
        </Container>
    </>
}

export default About;

const Container = styled.div`
    .content{
      grid-column: 3/7;
    }
    .nav{
        position: sticky;
        top: 72px;
    }
    li{
        margin-bottom: 28px;
    }
    p{
        margin-bottom: 24px;
    }
`