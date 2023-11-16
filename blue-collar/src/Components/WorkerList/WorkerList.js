import React from "react";
import "./WorkerList.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useEffect } from "react";
import gsap from "gsap";
import "gsap/ScrollTrigger";


export default function WorkerList() {
  const gradientStyle = {
    // background: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",

    background: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",

    // background: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"
  };

  // const fontSize = {
  //   fontSize: "100px",
  // };

  const styles = {
    cardImgTop: {
      borderRadius: "50px",
      padding: "20px",
    },
    card: {
      borderRadius: "30px",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
    },
    cardBody: {
      padding: "25px",
      marginTop: "-15px",
    },
    btnPrimary: {
      borderRadius: "50px",
      width: "120px",
    },

    heading: {
      // color: "rgb(0, 91, 228)",
      color: "black",
    },

    h1Heading: {
      black: "black",
      padding: "20px",
    }
  };


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
    <div style={gradientStyle}>
      <div className="cursor"></div>
      <div className="container py-5">
        <h1 style={styles.h1Heading} className="text-center workerListTitle cursor-scale">
          Worker List
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-4">
          <div className="col py-4 px-4 " >
            <div className="card" style={styles.card}>
              <img
                src="https://source.unsplash.com/600x400/?worker"
                className="card-img-top"
                style={styles.cardImgTop}
                alt="..."
              />
              <div className="card-body" style={styles.cardBody}>
                <h5 className="card-title" style={styles.heading}>
                  Name
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Phone
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Rating
                </h5>
                {/* <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dignissimos accusantium amet similique velit iste.
              </p> */}
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <h3 style={styles.heading}>4.5</h3>
                <button className="btn btn-dark cursor-scale small" style={styles.btnPrimary}>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col py-4 px-4">
            <div className="card" style={styles.card}>
              <img
                src="https://source.unsplash.com/600x400/?worker"
                className="card-img-top"
                style={styles.cardImgTop}
                alt="..."
              />
              <div className="card-body" style={styles.cardBody}>
                <h5 className="card-title" style={styles.heading}>
                  Name
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Phone
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Rating
                </h5>
                {/* <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dignissimos accusantium amet similique velit iste.
              </p> */}
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <h3 style={styles.heading}>4.5</h3>
                <button className="btn btn-dark cursor-scale small" style={styles.btnPrimary}>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col py-4 px-4">
            <div className="card" style={styles.card}>
              <img
                src="https://source.unsplash.com/600x400/?worker"
                className="card-img-top"
                style={styles.cardImgTop}
                alt="..."
              />
              <div className="card-body" style={styles.cardBody}>
                <h5 className="card-title" style={styles.heading}>
                  Name
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Phone
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Rating
                </h5>
                {/* <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dignissimos accusantium amet similique velit iste.
              </p> */}
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <h3 style={styles.heading}>4.5</h3>
                <button className="btn btn-dark cursor-scale small" style={styles.btnPrimary}>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col py-4 px-4">
            <div className="card" style={styles.card}>
              <img
                src="https://source.unsplash.com/600x400/?worker"
                className="card-img-top"
                style={styles.cardImgTop}
                alt="..."
              />
              <div className="card-body" style={styles.cardBody}>
                <h5 className="card-title" style={styles.heading}>
                  Name
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Phone
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Rating
                </h5>
                {/* <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dignissimos accusantium amet similique velit iste.
              </p> */}
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <h3 style={styles.heading}>4.5</h3>
                <button className="btn btn-dark cursor-scale small" style={styles.btnPrimary}>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col py-4 px-4">
            <div className="card" style={styles.card}>
              <img
                src="https://source.unsplash.com/600x400/?worker"
                className="card-img-top"
                style={styles.cardImgTop}
                alt="..."
              />
              <div className="card-body" style={styles.cardBody}>
                <h5 className="card-title" style={styles.heading}>
                  Name
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Phone
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Rating
                </h5>
                {/* <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dignissimos accusantium amet similique velit iste.
              </p> */}
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <h3 style={styles.heading}>4.5</h3>
                <button className="btn btn-dark cursor-scale small" style={styles.btnPrimary}>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col py-4 px-4">
            <div className="card" style={styles.card}>
              <img
                src="https://source.unsplash.com/600x400/?worker"
                className="card-img-top"
                style={styles.cardImgTop}
                alt="..."
              />
              <div className="card-body" style={styles.cardBody}>
                <h5 className="card-title" style={styles.heading}>
                  Name
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Phone
                </h5>
                <h5 className="card-title" style={styles.heading}>
                  Rating
                </h5>
                {/* <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dignissimos accusantium amet similique velit iste.
              </p> */}
              </div>
              <div className="mb-5 d-flex justify-content-around">
                <h3 style={styles.heading}>4.5</h3>
                <button className="btn btn-dark cursor-scale small" style={styles.btnPrimary}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}