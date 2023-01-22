// CSS
import "./Error.css";

import Navbar from "../navbar/Navbar";

import React from "react";
const { useRef } = React;

const errorGlass = "https://raw.githubusercontent.com/dinhplnguyen/nwhack-2023/main/misc/error.png?token=GHSAT0AAAAAAB5XG2PHAFMBMOAFMWLURYKIY6NSUPA";




function Error() {

  const app = useRef();

  
  return (
    <>
      <Navbar />
      <error ref={app}>
      <section>
          <div class="about__row">
          <h1 className="about__title"> Error </h1>
          </div>
          <div class="about__row">

            

           {/* <div class="about__column">
              <div class="about__card"> */}
                <div class="error-container">
                  <img src= {errorGlass} />
                </div>
              {/* </div>
            </div> */}
          </div>
        </section>
      </error>

      
    </>
  );
}

export default Error;