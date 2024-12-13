import React, { useContext, useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";

const MyDonation = () => {
  const donatedcampain = useLoaderData();
  const { user } = useContext(AuthContext);
  const filtereddata = donatedcampain.filter((value) => value.email == user.email);
  const [data, setdata] = useState(filtereddata);
  console.log(data);
  return (
    <div className="w-11/12 mx-auto">
      <NavBar />
      <div className="min-h-[60vh]">
      <div className="grid grid-cols-6 gap-5 ">
        {data.map((item,i)=>{
          return(<div  key={i} className="card bg-base-300  col-span-6 md:col-span-3 lg:col-span-2 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.campaindata.title}</h2>
              <p>{item.campaindata.description}</p>
              <p>{item.campaindata.amount}</p>
            </div>
          </div>)
        })}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyDonation;
