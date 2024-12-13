import React, { useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { Link, useLoaderData } from "react-router-dom";

const AllCampain = () => {
  const loadeddata = useLoaderData();
  const [data, setdata] = useState(loadeddata);
  // console.log(data)
  // const i=1;
  return (
    <div className="w-11/12 mx-auto">
      <NavBar />
      <div className=" min-h-[60vh]">
      <table className="w-full">
        <tbody className="border">
          <tr>
            <th className="border m-2 p-2">Serial</th>
            <th className="border m-2 p-2">Title</th>
          </tr>
          {data.map((item, i) => (
            <tr className="border m-2 p-2" key={i++}>
              <td className="border m-2 p-2">{i}</td>
              <td className="border m-2 p-2">{item.title}</td>
              <td className="border m-2 p-2"><Link to={`/campain/${item._id}`} className="btn btn-primary">
                See more
              </Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Footer />
    </div>
  );
};

export default AllCampain;
