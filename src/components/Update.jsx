import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  console.log(data);

  const handleupdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get("title");
    const photo = form.get("photo");
    const type = form.get("type");
    const amount = form.get("amount");
    const description = form.get("description");
    const date = form.get("date");

    const formData = {
        title,
        photo,
        type,
        amount,
        description,
        date
      };

    console.log(formData);
    fetch(`http://localhost:5000/campain/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.modifiedCount > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'User added succesfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <NavBar />
      <div className="min-h-screen flex justify-center items-center">
        <div className="card rounded-none bg-base-100 w-full max-w-lg shrink-0 p-10">
          <h2 className="text-2xl font-semibold text-center">
            Update Campaign
          </h2>
          <form onSubmit={handleupdate} className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Campaign title
                </span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="Campaign title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Thumbnail
                </span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Campaign type
                </span>
              </label>
              <select
                name="type"
                required
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Select Anyone
                </option>
                <option>personal issue</option>
                <option>startup</option>
                <option>business</option>
                <option>creative ideas</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Minimum donation amount
                </span>
              </label>
              <input
                name="amount"
                type="number"
                placeholder="donation amount"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Deadline
                </span>
              </label>
              <input
                name="date"
                type="date"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                required
                className="textarea textarea-bordered"
                placeholder="description"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Email : {data?.email}
                </span>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Name : {data?.name}
                </span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Update</button>
            </div>
          </form>

          <div className="pt-2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Update;
