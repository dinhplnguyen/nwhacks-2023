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
            <h1>Our Team</h1>
          </div>
          <div class="about__row">

            <div class="about__column">
              <div class="about__card">
                <div class="img-container">
                  <img src="profile-img-1.png" />
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
                  <img src="profile-img-2.png" />
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
                  <img src="profile-img-3.png" />
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
                  <img src="profile-img-3.png" />
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