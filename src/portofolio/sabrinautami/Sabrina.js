import React from "react";
import NavbarSabrina from "./NavbarSabrina";
import sabrina from "../../assets/sabrinautami2.jpg";
import instagram from "../../assets/Brands/Vector-1.png"
import telegram from "../../assets/Brands/Vector.png"
import whatsapp from "../../assets/Brands/Vector-2.png"

const Sabrina = () => {
  return (
    <div className="putih">
    <NavbarSabrina />
      <div className="container py-5 mt-2">
        <div className="row items-center justify-content-center">
          <div className="col-md-4 text-center">
            <p>
              <img src={sabrina} style={{ width: "250px" }} className="gs" />
            </p>
          </div>
          <div className="col-md-5 my-5">
            <p>
              <h1>Hello! I’m Sabrina Utami</h1>
              <h5>
                I'm 17 years old, I study at SMK Negeri 7 Pontianak and in this
                team I work as ui/ux designer.
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
                So, UI Designer has the responsibility to design an attractive
                appearance both in terms of shape, color, and writing
              </h5>
            </p>
          </div>
          <div className="col-md-4 mt-2">
            <p>
              <h5>
                If UX Designer is a type of work that is related to how to
                increase the satisfaction of application users and site visitors
              </h5>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <p>
            Contact me if you have any questions
            </p>
          </div>
          <div className="col">
            <p>
            <img src={instagram} style={{ width : "30px"}} className="" />
            <img src={telegram} style={{ width : "30px"}} className="mx-2" />
            <img src={whatsapp} style={{ width : "30px"}} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sabrina;
