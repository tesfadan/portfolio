import React, { useEffect } from 'react';
import About from '../../components/sections/About';

export default function PortfolioPage() {
    const potfolio = {
        v1: "https://framer.com/share/Tesfa-Demissie-Portfolio--j7ycSoVIBT77QKZZGeIb/JBFKuBX0h?highlights=0"
      }
  
      useEffect(() => {
      window.location.replace(potfolio.v1);
    }, []);

    return (
        <>
        </>
    );
}
