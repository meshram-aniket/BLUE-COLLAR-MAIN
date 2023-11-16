import React from "react";
import "./Home.css";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <section>
      <div className="containers" id="containers">
        <nav>
          <img src="" alt="" />
          <ul>
            <li>
              <a href="" className="cursor-scale small Nav">
                Home
              </a>
            </li>
            <li>
              <a href="" className="cursor-scale small Nav">
                About
              </a>
            </li>
            <li>
              <a href="" className="cursor-scale small Nav">
                Contact
              </a>
            </li>
            <li>
              <a
                href=""
                className="cursor-scale small Nav"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Login/Register
              </a>
            </li>
          </ul>

          {/* logo  */}
          <img src="" alt="" />
          
        </nav>

        <div className="text-box">
          <h2>Lorem ipsum </h2>
          <h1>Blue Collar</h1>
          <h3 style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </div>

        <Marquee direction="right" speed={100} delay={5}>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
          <div className="word">
            <h3>Blue collar</h3>
          </div>
        </Marquee>

        {/* <div className="translator">
          <div className="word">
            <p>Blue Collar</p>
          </div>
          <div className="word">
            <p>Blue Collar</p>
          </div>
          <div className="word">
            <p>Blue Collar</p>
          </div>
          <div className="word">
            <p>Blue Collar</p>
          </div>
          <div className="word">
            <p>Blue Collar</p>
          </div>
        </div> */}
      </div>

      {/* home page gsap cdn   */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
    </section>
  );
}
