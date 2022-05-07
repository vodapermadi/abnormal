import React from "react";
import NavbarVoda from "./NavbarVoda";
import voda from "../../assets/sabrinautami2.jpg";
import instagram from "../../assets/Brands/Vector-1.png";
import telegram from "../../assets/Brands/Vector.png";
import whatsapp from "../../assets/Brands/Vector-2.png";
import js from "../../assets/Brands/js.png";
import react from "../../assets/Brands/react.png";
import laravel from "../../assets/Brands/laravel.png";
import php from "../../assets/Brands/php.png";

const Voda = () => {
  return (
    <div>
      <NavbarVoda />
      <div className="container py-5 mt-2">
        <div className="row items-center justify-content-center">
          <div className="col-md-4 text-center">
            <p>
              <img src={voda} style={{ width: "250px" }} className="gs" />
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
        <div className="row justify-content-center items-center text-center color1 pts text-white">
          <div className="col-md-12 text-center mb-3">
            <p>
              <h1>What I do</h1>
            </p>
          </div>
          <div className="col-md-4 mt-2">
            <p>
              <h5>
                So, The front end is what users see on the appearance of a
                website.The front end is often referred to as the "client-side"
              </h5>
            </p>
          </div>
          <div className="col-md-5 mt-2">
            <p>
              <h5>
                Front End Developers <br /> play a role in developing the
                appearance of the site using programming languages ​​such as CSS
                , HTML, and Javascript.
              </h5>
            </p>
          </div>
        </div>
        <div className="row justify-content-center items-center text-center pts text-white">
          <div className="col-md-12 text-center mb-3">
            <p>
              <h1>Skills</h1>
            </p>
          </div>
          <div className="col-md-3">
            <img
              src={js}
              alt="js"
              style={{ width: "100px" }}
              className="mx-2 mb-2"
            />
            <h5>Javascript</h5>
          </div>
          <div className="col-md-3">
            <img
              src={react}
              alt="js"
              style={{ width: "100px" }}
              className="mx-2 mb-2"
            />
            <h5>React Js</h5>
          </div>
          <div className="col-md-3">
            <img
              src={laravel}
              alt="js"
              style={{ width: "220px" }}
              className="mx-2 mb-2"
            />
            <h5>Laravel</h5>
          </div>
          <div className="col-md-3">
            <img
              src={php}
              alt="js"
              style={{ width: "100px" }}
              className="mx-2 mb-2"
            />
            <h5>php</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <p>Contact me if you have any questions</p>
          </div>
          <div className="col">
            <p>
              <img src={instagram} style={{ width: "30px" }} className="" />
              <img src={telegram} style={{ width: "30px" }} className="mx-2" />
              <img src={whatsapp} style={{ width: "30px" }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voda;
