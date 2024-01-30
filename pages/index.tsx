import Link from "next/link";
import styled from "styled-components";
import MiniGame from "../src/components/MiniGame";
import Head from "next/head";
import { useState } from "react";

export default function Home() {  
  const [content] = useState({
    heading: "I'm Tesfa Demissie, a Product Designer who loves crafting sleek, user-friendly digital products.",
    blurb: "Putting user needs first, I focus on crafting products that aren't just functional – they're visually appealing too. It's all about striking the perfect balance."
  })

  
  return <>
      <Head>
      </Head>
      <Container className="section">
        <div className="grid">
            <div className="content">
              <h1>{content.heading}</h1>
              <p>{content.blurb}</p>
              <Link href="/portfolio">View Portfolio</Link>
            </div>
        </div>
        <MiniGame />
      </Container>
  </>
}

const Container = styled.div`
  flex-flow: column;

  .content{
    grid-column: 1/7;
  }
  p{
    font-size: 28px;
    margin-bottom: 32px;
  }
  a{
    font-size: 24px;
  }

  /* IPAD */
  @media (max-width: 834px) {
    h1{
      /* margin-bottom: 20px; */
    }
    p{
      font-size: 24px;
    }
    a{
      font-size: 20px;
    }
  }

  /* LG MOBILE */
  @media (max-width: 640px) {
    min-height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
      font-size: 18px;
      /* margin-bottom: 20px; */
    }
    a{
      font-size: 16px;
    }
  }
`