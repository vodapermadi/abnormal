import React from "react";
import voda from "../assets/vodapermadi.jpeg";
import sabrina from "../assets/sabrinautami.jpg";
import NavbarComponent from "../component/NavbarComponent.js"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavbarComponent/>
    <div className="container text-center my-4 text-white">
      <h1>ABNORMAL</h1>
      <h5 className="mb-2">
        Hello! this is our team and
        <br /> its members, please choose one to see our full profile.
      </h5>
      <div className="row my-5">
        <div className="col">
          <img
            src={voda}
            alt="vodapermadi"
            style={{ width: "200px" }}
            className="img rounded mt-2"
          />
          <p className="">
            <Link className="my-3 btn text-white imgp" to={`/portofolio/vodapermadi`} >Philipus Voda Permadi</Link>
          </p>
        </div>
        <div className="col">
          <img
            src={sabrina}
            alt="vodapermadi"
            style={{ width: "200px" }}
            className="img rounded"
          />
          <p>
            <Link to={`/portofolio/sabrinautami`} className="my-3 btn text-white imgs">Sabrina Utami</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
