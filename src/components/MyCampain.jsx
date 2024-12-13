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
  const [data, setdata] = useState(filtereddata);
  // console.log(loadeddata,filtereddata)
  const handledelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/campain/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.deletedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'User added succesfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          const filtereddata = data.filter((user) => user._id !== _id);
          setdata(filtereddata);
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <NavBar />
      <div className=" min-h-[60vh]">
      <table className="w-full ">
        <tbody className="border">
          <tr>
            <th className="border m-2 p-2">Title</th>
            <th className="border m-2 p-2">Type</th>
            <th className="border m-2 p-2">Amount</th>
            <th className="border m-2 p-2">Date</th>
          </tr>
          {data.map((item, i) => (
            <tr className="border m-2 p-2" key={i++}>
              <td className="border m-2 p-2">{item.title}</td>
              <td className="border m-2 p-2">{item.type}</td>
              <td className="border m-2 p-2">{item.amount}</td>
              <td className="border m-2 p-2">{item.date}</td>
              <td className="border m-2 p-2">
                <button
                  className="btn m-1"
                  onClick={() => {
                    handledelete(item._id);
                  }}
                >
                  {" "}
                  delete
                </button>
                <Link to={`/update/${item._id}`} className="btn m-1">
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
