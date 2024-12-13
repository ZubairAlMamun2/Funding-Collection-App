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

//   console.log(DonatedData);
  const date=campaindata.date
 const pickedDate =Date.parse(date);
 const todaysDate = new Date();
    todaysDate.setHours(0, 0, 0, 0);
  const dateDifference = (pickedDate-Number(todaysDate));
  console.log(dateDifference)

  const handleclick=()=>{
    if(dateDifference>0){
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
                  text: 'Campain added succesfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
              }
            });
    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'Campain is not Running',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
}
//   console.log(date)
//   console.log(pickedDate)
  return (
    <div className="w-11/12 mx-auto">
      <NavBar />
      <div className="flex justify-center">
        <div className="card bg-base-300 min-w-96 shadow-xl">
          <figure className="p-5 w-full">
            <img className="h-56 border rounded-lg w-full"
              src={campaindata.photo}
              alt="CAmpain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{campaindata.title}</h2>
            <p>Desc: {campaindata.description}</p>
            <p>Type: {campaindata.type}</p>
            <p>Amount: {campaindata.amount}</p>
            <p>Date: {campaindata.date}</p>
            <p>Added By: {campaindata.name}</p>
            <p>User Email: {campaindata.email}</p>
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
