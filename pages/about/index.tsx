import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from "styled-components";
import Head from "next/head";
import content from '../../src/content/aboutContent';


 const About = () => {

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