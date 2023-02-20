import React from 'react';
import Head from "next/head";
import styled from "styled-components"
import Link from 'next/link';

export default () => {
    return (
        <>
            <Container className="section">
            <div className="grid">
                <div className="content">
                    <div className="intro">
                        <h1>Portfolio</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Malesuada ultricies ipsum id volutpat venenatis eu. Tortor massa leo tristique amet cras sem viverra facilisi. Amet ultricies urna ridiculus mauris maecenas neque nunc hendrerit. Et gravida eli.</p>
                    </div>
                    <div className="portfolioCard">
                        <div className="cover card">
                        </div>
                        <div className="details">
                            <p>Designing for Education: Creating a Scalable Design System for a Cutting-Edge EdTech Platform</p>
                            <Link href=""><a>Case Study</a></Link>
                        </div>
                    </div>

                    <div className="portfolioCard">
                        <div className="cover card">
                        </div>
                        <div className="details">
                            <p>Designing for Education: Creating a Scalable Design System for a Cutting-Edge EdTech Platform</p>
                            <Link href=""><a>Case Study</a></Link>
                        </div>
                    </div>

                    <div className="portfolioCard">
                        <div className="cover card">
                        </div>
                        <div className="details">
                            <p>Designing for Education: Creating a Scalable Design System for a Cutting-Edge EdTech Platform</p>
                            <Link href=""><a>Case Study</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </>
    );
}

const Container = styled.div`
    .content{
      grid-column: 1/7;
    }
    .intro{
        margin-bottom: 72px;
    }
    .portfolioCard{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        align-items: center;
        margin-bottom: 44px;
    }
    .cover{
        width: 100%;
        height: 272px;
    }
    .details{
        width: 100%;
        p{
            margin-bottom: 20px;
        }
    }
`