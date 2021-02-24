// import { useState } from "react"
import About from "../components/sections/About"
import Hero from "../components/sections/Hero"
import Playground from "../components/sections/Playground"
import Portfolio from "../components/sections/Portfolio"
import Contact from "../components/sections/Contact"

export default function Home() {

  return (<>
    <Hero />
    <About />
    <Portfolio />
    <Playground />
    <div id="contact" />
    <Contact />
  </>
  )
}
