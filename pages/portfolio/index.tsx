import React, { useEffect } from 'react';
import About from '../../components/sections/About';
import Head from "next/head";

export default function PortfolioPage() {
    const potfolio = {
        v1: "https://framer.com/share/Tesfa-Demissie-Portfolio--j7ycSoVIBT77QKZZGeIb/JBFKuBX0h?highlights=0"
      }
  
    useEffect(() => {
      window.location.replace(potfolio.v1);
      console.log("forwarding")
    }, []);


    const meta = {
        title: "Tesfa Demissie: Product Designer & Frontend Developer - UI Design & Development Portfolio",
        content: "As a product designer and frontend developer with expertise in UI design and frontend development, I am passionate about crafting intuitive and engaging user experiences. My portfolio showcases my ability to combine design and technical skills to bring creative solutions to life. I am eager to bring my skills to an innovative company where I can continue to grow and make a meaningful impact.",
        imagePath: "/assets/images/tesfadan.com.png" 
    }

    return (
        <>
             <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.content} />
                <meta name="twitter:image" content={meta.imagePath} />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.content} />
                
                 <meta property="og:site_name" content={meta.title} />
                <meta property="og:description" content={meta.content} />
                <meta property="og:image" content={meta.imagePath} />
                <meta property="og:image:secure_url" content={meta.imagePath} />
      </Head>
        </>
    );
}
