import React from "react";
import { useEffect } from "react";
import gsap from "gsap";

// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';  //Import Bootstrap JS

export default function Footer() {
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
  return (
    <>
      {/* <div className="cursor"></div> */}
      {/* Footer */}
      <footer className=" text-center text-lg-start bg-dark text-muted">
        <div className="cursor"></div>
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span className="cursor-scale small">
              Get connected with us on social networks:
            </span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f cursor-scale small" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter cursor-scale small" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google cursor-scale small" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram cursor-scale small" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin cursor-scale small" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github cursor-scale small" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="footer">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4 cursor-scale">
                  <i className="fas fa-gem me-3" />
                  Company name
                </h6>
                <p className="cursor-scale small">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 cursor-scale">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset cursor-scale small">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset cursor-scale small">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset cursor-scale small">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset cursor-scale small">
                    Laravel
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 cursor-scale ">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset cursor-scale small">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset cursor-scale small">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset cursor-scale small">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset cursor-scale small">
                    Help
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 cursor-scale ">
                  Contact
                </h6>
                <p className="cursor-scale small">
                  <i className="fas fa-home me-3 cursor-scale small" /> New
                  York, NY 10012, US
                </p>
                <p className="cursor-scale small">
                  <i className="fas fa-envelope me-3 cursor-scale small" />
                  info@example.com
                </p>
                <p className="cursor-scale small">
                  <i className="fas fa-phone me-3 cursor-scale small" /> + 01
                  234 567 88
                </p>
                <p className="cursor-scale small">
                  <i className="fas fa-print me-3 cursor-scale small" /> + 01
                  234 567 89
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
          {/* <div className="cursor"></div> */}
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4 cursor-scale small "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a
            className="text-reset fw-bold cursor-scale small"
            href="https://mdbootstrap.com/"
          >
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}
