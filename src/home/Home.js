import React from "react";
import voda from "../assets/vodapermadi.jpeg";
import sabrina from "../assets/sabrinautami.jpg";
import NavbarComponent from "../component/NavbarComponent.js"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavbarComponent/>
    <div className="container text-center my-4 px-5 home2 rounded text-white py-5">
      <h1>ABNORMAL</h1>
      <h5>
        Hello! this is our team and
        <br /> its members, please choose one to see our full profile.
      </h5>
      <div className="row py-4">
        <div className="col home3 py-5 mx-2 my-3 rounded-lg">
          <img
            src={voda}
            alt="vodapermadi"
            style={{ width: "215px", height : "315px", border : "10px solid #E8F9FD"}}
            className="img rounded"
          />
          <p>
            <Link className="mt-2 btn text-white imgp fs-5 shadow" to={`/portofolio/vodapermadi`} >Philipus Voda Permadi</Link>
          </p>
        </div>
        <div className="col home3 py-5 mx-2 my-3">
          <img
            src={sabrina}
            alt="sabrina"
            style={{ width: "215px", height: "315px", border : "10px solid #E8F9FD" }}
            className="img rounded"
          />
          <p>
            <Link to={`/portofolio/sabrinautami`} className="my-3 btn text-white imgs fs-5">Sabrina Utami</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
