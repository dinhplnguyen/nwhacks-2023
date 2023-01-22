// CSS
import "./About.css";
import { UilLinkedin, UilGithub, UilEnvelope } from '@iconscout/react-unicons'

import Navbar from "../navbar/Navbar";

import React from "react";
import { gsap } from "gsap";
const { useLayoutEffect, useRef } = React;

const image1  = "https://raw.githubusercontent.com/dinhplnguyen/nwhack-2023/main/misc/profile-img-1.png?token=GHSAT0AAAAAAB5XG2PHKUY7ZWX4BYQYL36YY6NSKAA";
const image2  = "https://raw.githubusercontent.com/dinhplnguyen/nwhack-2023/main/misc/profile-img-2.png?token=GHSAT0AAAAAAB5XG2PHFMSEJEOB6QWP7JJAY6NSWBQ";
const image3  = "https://raw.githubusercontent.com/dinhplnguyen/nwhack-2023/main/misc/profile-img-3.png?token=GHSAT0AAAAAAB5XG2PGNXOHQFKFDCXUJJ5QY6NSKAQ";
const image4  = "https://raw.githubusercontent.com/dinhplnguyen/nwhack-2023/main/misc/profile-img-4.png?token=GHSAT0AAAAAAB5XG2PGNAPXQYFOATEXSETKY6NSKBA";


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
                  <img src= {image1} />
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
                  <img src= {image2} />
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
                  <img src= {image3} />
                </div>
                <h3>Rafi Meher</h3>
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

            <div class="about__column">
              <div class="about__card">
                <div class="img-container">
                  <img src= {image4} />
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