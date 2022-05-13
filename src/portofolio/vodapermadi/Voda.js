import React from "react";
import NavbarVoda from "./NavbarVoda";
import voda from "../../assets/vodapermadi2.jpg";
import instagram from "../../assets/Brands/Vector-1.png";
import github from "../../assets/Brands/Vector-3.png";
import whatsapp from "../../assets/Brands/Vector-2.png";
import js from "../../assets/Brands/js.png";
import react from "../../assets/Brands/react.png";
import laravel from "../../assets/Brands/laravel.png";
import php from "../../assets/Brands/php.png";
import python from "../../assets/Brands/python.png";
import bootstrap from "../../assets/Brands/bootstrap.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Voda = () => {
  AOS.init();

  return (
    <div className="putih">
      <NavbarVoda />
      <div className="container py-5 mt-2">
        <div className="row items-center justify-content-center">
          <div className="col-md-4 text-center">
            <p>
              <img src={voda} style={{ width: "250px" }} className="gs shadow" />
            </p>
          </div>
          <div className="col-md-6 my-5">
            <p>
              <h1>Hello! I’m Philipus Voda Permadi</h1>
              <h5>
                I'm 16 years old, I study at SMK Negeri 7 Pontianak and in this
                team I work as frontend developer.
              </h5>
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* What i Do */}

        <div className="row justify-content-center items-center text-center color2 pts text-white px-3 shadow">
          <div className="col-md-12 text-center mb-3">
            <p>
              <h1>What I do</h1>
            </p>
          </div>
          <div className="col-md-4 mt-2">
            <p>
              <h5 data-aos={"fade-right"}>
                So, The front end is what users see on the appearance of a
                website.The front end is often referred to as the "client-side"
              </h5>
            </p>
          </div>
          <div className="col-md-5 mt-2">
            <p>
              <h5 data-aos={"fade-left"}>
                Front End Developers <br /> play a role in developing the
                appearance of the site using programming languages ​​such as CSS
                , HTML, and Javascript.
              </h5>
            </p>
          </div>
        </div>

        {/* skill */}

        <div className="row justify-content-center items-center text-center pts">
          <div className="col-md-12 text-center mb-3">
            <p>
              <h1 data-aos={"fade-down"}>Skills</h1>
            </p>
          </div>
          <div className="col-md-3 mb-3">
            <img
              src={js}
              alt="js"
              className="mx-2 shadow imgvoda1"
              style={{width : "100px"}}
              data-aos={"zoom-out"}
            />
            <h5 data-aos={"fade-up"}>Javascript</h5>
          </div>
          <div className="col-md-3 mb-3">
            <img
              src={react}
              alt="js"
              style={{ width: "100px", borderRadius : "50%" }}
              className="mx-2 shadow"
              data-aos={"zoom-out"}
            />
            <h5 data-aos={"fade-up"}>React Js</h5>
          </div>
          <div className="col-md-3 mb-3">
            <img
              src={php}
              alt="js"
              style={{ width: "100px" }}
              className="mx-2"
              data-aos={"zoom-out"}
            />
            <h5 data-aos={"fade-up"}>php</h5>
          </div>
          <div className="col-md-3 mb-3">
            <img
              src={laravel}
              alt="js"
              style={{ width: "220px" }}
              className="mx-2 shadow"
              data-aos={"zoom-out"}
            />
            <h5 data-aos={"fade-up"}>Laravel</h5>
          </div>
          <div className="col-md-3 mb-3">
            <img
              src={python}
              alt="js"
              style={{ width: "100px" }}
              className="mx-2"
              data-aos={"zoom-out"}
            />
            <h5 data-aos={"fade-up"}>python</h5>
          </div>
          <div className="col-md-3 mb-3">
            <img
              src={bootstrap}
              alt="js"
              style={{ width: "100px", borderRadius: "50%" }}
              className="mx-2 shadow"
              data-aos={"zoom-out"}
            />
            <h5 data-aos={"fade-up"}>bootstrap</h5>
          </div>
        </div>

        {/* contact */}

        <div className="row color2 justify-content-center text-white">
          <div className="col-md-8 my-3 px-5">
            <p>
              <h1 className="text-center mt-4" data-aos={"fade-down"}>Leave the message</h1>
            </p>
            <p>
              <input
                type="text"
                placeholder="Name"
                className="form-control mb-3"
                data-aos={"fade-right"}
              />
              <input
                type="text"
                placeholder="email"
                className="form-control mb-3"
                data-aos={"fade-left"}
              />
              <input
                type="text"
                placeholder="message"
                className="form-control mb-3 pb-5"
                data-aos={"fade-right"}
              />
              <button className="btn btn-primary">send</button>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <p>Contact me if you have any questions</p>
          </div>
          <div className="col-md-6 mt-4 py-5">
            <p>
              <a href="https://www.instagram.com/cuma_voda/">
                <img src={instagram} style={{ width: "30px" }} className="" />
              </a>
              <a href="https://github.com/vodapermadi">
                <img src={github} style={{ width: "30px" }} className="mx-2" />
              </a>
              <a href="https://wa.me/6282140633352">
                <img src={whatsapp} style={{ width: "30px" }} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voda;
