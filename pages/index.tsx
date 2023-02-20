import Link from "next/link";
import styled from "styled-components";
import MiniGame from "../src/components/MiniGame";
import Head from "next/head";

export default function Home() {

  
  return <>
      <Head>
      </Head>
      <Container className="section">
        <div className="grid">
            <div className="content">
              <h1>
                Hello! I'm Tesfa Demissie, a Product Designer passionate about intuitive and visually stunning digital products.
              </h1>
              <p>
                My design philosophy is centred on understanding the user's needs and delivering solutions that can truly improve their lives. I strive to create products that are not only functional and user-friendly, but also beautiful.
              </p>
              <Link href="/about"><a>Learn more</a></Link>
            </div>
        </div>
        <MiniGame />
      </Container>
  </>
}

const Container = styled.div`
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
`