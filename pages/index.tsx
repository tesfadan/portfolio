import styled from "styled-components"

export default function Home() {

  
  return <>
      <Container className="section">
        <div className="container">
            <div className="content">
              <h1>
                Hello! I'm Tesfa Demissie, a Product Designer passionate about intuitive and visually stunning digital products.
              </h1>
              <p>
                My design philosophy is centred on understanding the user's needs and delivering solutions that can truly improve their lives. I strive to create products that are not only functional and user-friendly, but also beautiful.
              </p>
              <a>
                Learn more
              </a>
            </div>
        </div>
      </Container>
  </>
}

const Container = styled.div`
    .content{
      grid-column: 1/7;
    }
`