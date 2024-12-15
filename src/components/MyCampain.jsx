import React, { useContext, useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import Swal from "sweetalert2";

const MyCampain = () => {
  const loadeddata = useLoaderData();
  const { user } = useContext(AuthContext);
  const filtereddata = loadeddata.filter((value) => value.email == user.email);
  const [data, setData] = useState(filtereddata);

  const handlesort=()=>{
   
        const newarr = data.sort((a, b) => a.amount - b.amount);
          setData(newarr);
          console.log(data)
     
       
  }
  
  
  // console.log(loadeddata,filtereddata)
  const handledelete = (_id) => {
    // console.log(_id);
    fetch(`http://localhost:5000/campain/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.deletedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'User added succesfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          const filtereddata = data.filter((user) => user._id !== _id);
          setData(filtereddata);
        }
      });
  };


  // console.log(data) 
 
  return (
    <div className="w-11/12 mx-auto">
      <NavBar />
      <div className=" min-h-[60vh]">
        <div className="flex justify-center p-2 m-2"><button className="btn btn-primary" onClick={
          handlesort}> sort</button></div>
      <table className="w-100px md:w-full ">
        <tbody className="border">
          <tr>
            <th className="border md:m-2 md:p-2">Title</th>
            <th className="border md:m-2 md:p-2">Type</th>
            <th className="border md:m-2 md:p-2">Amount</th>
            <th className="border md:m-2 md:p-2">Date</th>
          </tr>
          {data.map((item, i) => (
            <tr className="border md:m-2 md:p-2" key={i++}>
              <td className="border md:m-2 md:p-2">{item.title}</td>
              <td className="border md:m-2 md:p-2">{item.type}</td>
              <td className="border md:m-2 md:p-2">{item.amount}</td>
              <td className="border md:m-2 md:p-2">{item.date}</td>
              <td className="border md:m-2 md:p-2">
                <button
                  className="md:btn text-red-500 btn-primary m-1"
                  onClick={() => {
                    handledelete(item._id);
                  }}
                >
                  
                  delete
                </button>
                <Link to={`/update/${item._id}`} className="md:btn text-red-500 btn-primary m-1">
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Footer />
    </div>
  );
};

export default MyCampain;
