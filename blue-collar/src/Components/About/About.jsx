import React, { useEffect } from "react";
import "./About.css";
import gsap from "gsap";
import "gsap/ScrollTrigger";

const About = () => {
  useEffect(() => {
    let cursor = document.querySelector(".cursor");
    let cursorScale = document.querySelectorAll(".cursor-scale");
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    cursorScale.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
      });
      link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
        if (link.classList.contains("small")) {
          cursor.classList.remove("grow");
          cursor.classList.add("grow-small");
        }
      });
    });

  }, []);

  // Empty dependency array to run the effect only once on mount

  return (
    <div className="About">
      <div className="cursor"></div>

      <header className="header">
        <div className="header-row">
          <nav className="nav">
            <ul className="cursor-scale small">
              <li>
                <a href="#">Back</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero-text">
        <div className="hero-text-content">
          <h1 className="cursor-scale">ABOUT us</h1>
          <h2 className="cursor-scale small">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            asperiores cumque sed dolor expedita ipsa sit officiis vero
            doloribus commodi, recusandae sint aperiam aspernatur totam veniam
            maiores ab libero nostrum quod, eveniet veritatis quis modi
            mollitia. Commodi et enim libero!
          </h2>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-wrapper">
          <ul className="footer-nav cursor-scale small">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
          <p className="cursor-scale small">All Rights Reserved.</p>
        </div>
      </footer>

      {/* Your additional React components/content can go here */}
    </div>
  );
};

export default About;
