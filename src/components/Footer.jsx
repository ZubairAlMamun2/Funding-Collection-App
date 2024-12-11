import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-5 mt-5 mx-auto bg-base-200">
      <footer>
        <div className="grid grid-cols-2">
            <div className="col-span-2 justify-center md:col-span-1">
                <h2 className="text-xl font-semibold">Contuct Us</h2>
                <h2>Email: donate@gmail.com</h2>
                <h2>Phone: +8801384584</h2>
                <div>
                    <h2 className="text-xl font-semibold mt-2">Media Links</h2>
                    <div className="flex gap-3 ml-2">
                        <a href="https://www.facebook.com/"  target="blank"><FaFacebookSquare className="w-8 h-8" /></a>
                        <a href="https://www.youtube.com/" target="blank"><FaYoutube className="w-8 h-8" /></a>
                        <a href="https://www.twitter.com/" target="blank"><FaTwitterSquare  className="w-8 h-8"/></a>
                        
                        
                    </div>
                </div>
            </div>
          <form className="col-span-2 md:col-span-1"> 
            <h6 className="footer-title">Subscribe Us</h6>
            <fieldset className="form-control ">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered "
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
      <p className="text-center mt-2 font-semibold">Copyright © {new Date().getFullYear()} - All right reserved</p>
    </div>
  );
};

export default Footer;
