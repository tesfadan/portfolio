import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from "styled-components";
import Head from "next/head";
import content from '../../src/content/aboutContent';
import ReactMarkdown from "react-markdown"

 const About = () => {
    const [highlight, setHighlight] = useState({
        section: "",
        content: ""
    });


    return <>
        <Head>
        </Head>
        <Container className="section" onBlur={()=>setHighlight({section:"", content:""})}>
            <div className="grid">
                <aside>
                    <div className="nav">
                    <h1>About</h1>
                        <ul>
                            {content.map(data => <li key={`li-${data.section}`}><AnchorLink onClick={()=>setHighlight(data)} href={`#${data.section}`}>{data.section}</AnchorLink></li>)}
                        </ul>
                    </div>
                </aside>
                <div className="content">
                        {content.map(data => 
                        <>
                        <span className="block-section" id={data.section} />
                        <ReactMarkdown className={highlight.section === data.section ? "highlight" : "" } key={`p-${data.section}`}>{data.content}</ReactMarkdown>
                        {/* <p  key={`p-${data.section}`} id={data.section}>{data.content}</p> */}
                        </>
                        )}

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

    .block-section{
    }

    .content a{
        font-size: inherit;
    }

    .highlight{
        /* animation: highlightDarkMode 2000ms ease forwards; */
        position: relative;
        &::before{
            display: block;
            content: "";
            background: inherit;
            position: absolute;
            left: -16px;
            right: -16px;
            top: -8px;
            bottom: -8px;
            z-index: -2;
        }
    }

    /* IPAD */
    @media (max-width: 834px) {
        .nav{
            top: 44px;
        }
        p{
            /* font-size: 20px; */
        }
        li{
            margin-bottom: 20px;
        }
        li a{
            font-size: 16px;
        }
        .content{
            grid-column: 2/7;
            margin-left: 56px;
        }
    }

    /* LG MOBILE */
    @media (max-width: 640px) {
        h1{
            font-size: 24px;
        }
        p{
            /* font-size: 16px; */
        }
        .grid{
            // max-width: 520px;
            max-width: 428px;
            padding: 0px 16px;
            column-gap: 4px;
        }
        .nav{
            position: relative;
            top: unset;
        }

        aside, .content{
            grid-column: 1/7;
            margin-left: 0px;
            ul{
                display: flex;
                flex-flow: row;
                display: none;
            }
            li{
                margin-right: 20px;
            }
        }
        aside{
            /* position: sticky; */
            /* top: 0px; */
        }
    }
`