import React from "react";
import NavbarSabrina from "./NavbarSabrina";
import sabrina from "../../assets/sabrinautami2.jpg";
import instagram from "../../assets/Brands/Vector-1.png";
import telegram from "../../assets/Brands/Vector.png";
import whatsapp from "../../assets/Brands/Vector-2.png";
import figma from "../../assets/Brands/figma.png";
import vscode from "../../assets/Brands/vscode.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Sabrina = () => {
  AOS.init();

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
        <div className="row justify-content-center items-center text-center color1 pts text-white px-3">
          <div className="col-md-12 text-center mb-3">
            <p>
              <h1>What I do</h1>
            </p>
          </div>
          <div className="col-md-4 mt-2">
            <p>
              <h5 data-aos={"fade-right"}>
                So, UI Designer has the responsibility to design an attractive
                appearance both in terms of shape, color, and writing
              </h5>
            </p>
          </div>
          <div className="col-md-4 mt-2">
            <p>
              <h5 data-aos={"fade-left"}>
                If UX Designer is a type of work that is related to how to
                increase the satisfaction of application users and site visitors
              </h5>
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center items-center text-center">
        <div className="col-md-12 my-3 px-5 text-center">
          <p>
            <h1 data-aos={"fade-down"}>Tools</h1>
          </p>
        </div>
        <div className="col-md-3 mb-3">
          <img
            src={figma}
            style={{ borderRadius: "50%", width: "100px" }}
            data-aos={"zoom-out"}
          />
          <h5 data-aos={"fade-up"}>Figma</h5>
        </div>
        <div className="col-md-3 mb-3">
          <p>
            <img
              src={vscode}
              style={{ borderRadius: "50%", width: "100px" }}
              data-aos={"zoom-out"}
            />
            <h5 data-aos={"fade-up"}>VScode</h5>
          </p>
        </div>
      </div>
      <div className="row color1 justify-content-center text-white">
        <div className="col-md-8 my-3 px-5">
          <p>
            <h1 className="text-center mt-4" data-aos={"fade-down"}>
              Leave the message
            </h1>
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
            <button className="btn buttonsabrina text-white">send</button>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <p>Contact me if you have any questions</p>
          </div>
          <div className="col-md-6 py-5 mt-4">
            <p>
              <a href="https://www.instagram.com/sabrinaaau_/">
                <img src={instagram} style={{ width: "30px" }} />
              </a>
              <a href="/">
                <img
                  src={telegram}
                  style={{ width: "30px" }}
                  className="mx-2"
                />
              </a>
              <a href="https://wa.me/621545454765">
                <img src={whatsapp} style={{ width: "30px" }} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sabrina;
