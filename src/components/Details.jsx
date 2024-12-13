import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { AuthContext } from "../provider/Authprovider";

const Details = () => {
  const loadeddata = useLoaderData();
  const { user } = useContext(AuthContext);

  console.log(loadeddata, user.email);
  return (
    <div className="w-11/12 mx-auto">
      <NavBar />
      <div className="flex justify-center">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={loadeddata.photo}
              alt="CAmpain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{loadeddata.title}</h2>
            <p>{loadeddata.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Donate</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
