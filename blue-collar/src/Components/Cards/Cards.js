import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Cards.css";

export default function Cards() {
  const slideRef = useRef(null);

  const handleNext = () => {
    if (slideRef.current) {
      const lists = slideRef.current.querySelectorAll(".item");
      slideRef.current.appendChild(lists[0]);
    }
  };

  const handlePrev = () => {
    if (slideRef.current) {
      const lists = slideRef.current.querySelectorAll(".item");
      slideRef.current.prepend(lists[lists.length - 1]);
    }
  };

  return (
    <div className="Section">
      <div className="cursor"></div>
      <div className="Card">
        <div id="slide" ref={slideRef}>
          <div
            className="item"
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/615603432/photo/plumber.jpg?s=2048x2048&w=is&k=20&c=T5rYfyOF78vMTmfJ2Cmdulxxwu6xv8CEkYv3jbXzsiE=")`,
            }}
          >
            <div className="content">
              <div className="name">Plumber</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button className="btn btn-light cursor-scale">Book Now</button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/694475844/photo/painting-the-walls.jpg?s=2048x2048&w=is&k=20&c=mOFFYA0VOgBx2neoxWWtaMQI1d4a3pUNThLPHXy05BE=")`,
            }}
          >
            <div className="content">
              <div className="name">Painter</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button href="#" className="btn btn-light cursor-scale ">
                Book Now
              </button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/1434211817/photo/man-an-electrical-technician-working-in-a-switchboard-with-fuses.jpg?s=2048x2048&w=is&k=20&c=yXv5qeb_clBztZcIDiHTDpTPIsf0mVe-GEJWWzPMJOk=")`,
            }}
          >
            <div className="content">
              <div className="name">Electrician</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button href="#" className="btn btn-light cursor-scale ">
                Book Now
              </button>
            </div>
          </div>
          
          <div
            className="item"
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/1369759603/photo/indian-carpenter-making-wood-design-by-using-carpentry-tools-at-workplace-concept-of-skilled.jpg?s=2048x2048&w=is&k=20&c=lxmx0t4kpkEWFsqcb-Ir7F-Y-W5lSVunybgs_AbUc0U=")`,
            }}
          >
            <div className="content">
              <div className="name">Carpenter</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button href="#" className="btn btn-light cursor-scale ">
                Book Now
              </button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url("https://plus.unsplash.com/premium_photo-1682126104327-ef7d5f260cf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          >
            <div className="content">
              <div className="name">Pest Control</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button href="#" className="btn btn-light cursor-scale ">
                Book Now
              </button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url("https://source.unsplash.com/1600x600/?sunset")`,
            }}
          >
            <div className="content">
              <div className="name">LUNDEV</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button href="#" className="btn btn-light cursor-scale">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="buttons px-5">
          <button className="cursor-scale small" id="prev" onClick={handlePrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="cursor-scale small" id="next" onClick={handleNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
