import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { AuthContext } from "../provider/Authprovider";
import Swal from "sweetalert2";

const Details = () => {
  const campaindata = useLoaderData();
  const { user } = useContext(AuthContext);
  const email= user.email;
  const DonatedData={campaindata,email}
    const handleclick=()=>{
        fetch(`http://localhost:5000/donatedcampaign`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(DonatedData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if(data.acknowledged){
                Swal.fire({
                  title: 'Success!',
                  text: 'User added succesfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
              }
            });
    }
 

  console.log(DonatedData);

  return (
    <div className="w-11/12 mx-auto">
      <NavBar />
      <div className="flex justify-center">
        <div className="card bg-base-300 w-96 shadow-xl">
          <figure>
            <img
              src={campaindata.photo}
              alt="CAmpain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{campaindata.title}</h2>
            <p>{campaindata.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={()=>{
                    handleclick()
              }}>Donate</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
