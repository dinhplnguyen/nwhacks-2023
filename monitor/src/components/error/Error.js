// CSS
import "./Error.css";

import Navbar from "../navbar/Navbar";

import React from "react";
import { gsap } from "gsap";
const { useLayoutEffect, useRef } = React;



function Error() {

  const app = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.row', { opacity: 0, duration: 1.3, delay: 0.5, y: 30 })
      gsap.from('.about__column', { opacity: 0, duration: 1, delay: 0.8, y: 50 })

    }, app);
    return () => ctx.revert();
  }, []);


  return (
    <>
      <Navbar />
      <about ref={app}>
        <section>
          <div class="img-container">
            <img src="" />
          </div>
        </section>
      </about>
    </>
  );
}

export default About;