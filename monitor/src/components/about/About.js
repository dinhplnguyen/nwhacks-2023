// CSS
import "./About.css";
import { UilLinkedin, UilGithub, UilEnvelope } from '@iconscout/react-unicons'

import Navbar from "../navbar/Navbar";

import React from "react";
import { gsap } from "gsap";
const { useLayoutEffect, useRef } = React;



function About() {

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
          <div class="about__row">
          <h1 className="about__title"> Our Team </h1>
          </div>
          <div class="about__row">

            <div class="about__column">
              <div class="about__card">
                <div class="img-container">
                  <img src="https://raw.githubusercontent.com/dinhplnguyen/nwhack-2023/main/misc/profile-img-1.png?token=GHSAT0AAAAAAB5XG2PHYNYFOPWIQN5WXNZWY6NFNCA" />
                </div>
                <h3>Dinh Phi Long Nguyen</h3>
                <p>King/Lord</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="about__column">
              <div class="about__card">
                <div class="img-container">
                  <img src="https://raw.githubusercontent.com/dinhplnguyen/nwhack-2023/main/misc/profile-img-2.png?token=GHSAT0AAAAAAB5XG2PGU2C4VXTBWNAGGQLYY6NFNUQ" />
                </div>
                <h3>Jeff Kim</h3>
                <p>Developer</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="about__column">
              <div class="about__card">
                <div class="img-container">
                  <img src="https://raw.githubusercontent.com/dinhplnguyen/nwhack-2023/main/misc/profile-img-3.png?token=GHSAT0AAAAAAB5XG2PG5X2K75AEI4AL54QGY6NFOHQ" />
                </div>
                <h3>Rafi Meher</h3>
                <p>Designer</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" >
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="about__column">
              <div class="about__card">
                <div class="img-container">
                  <img src="https://raw.githubusercontent.com/dinhplnguyen/nwhack-2023/main/misc/profile-img-4.png?token=GHSAT0AAAAAAB5XG2PG5B24QEKKYAPRZ4QGY6NFOIA" />
                </div>
                <h3>Zeke Eteve</h3>
                <p>Developer</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" >
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </about>
    </>
  );
}

export default About;