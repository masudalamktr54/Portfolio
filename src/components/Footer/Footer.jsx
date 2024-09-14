import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      {" "}
      {/* social media section */}
      <section>
        <div className="lg:flex  lg:justify-center lg:items-center lg:space-x-10 mb-2  mt-36">
          <h3 className="text-lg text-center mb-6 lg:mb-0">Find me on</h3>
          <div className="flex justify-center items-center space-x-10">
            <Link to="https://www.linkedin.com/in/masud-alam-45a0211b6/">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-[#FFC107] text-2xl bg-[#021542] p-4  rounded-full"
              />
            </Link>
            <Link to="https://x.com/masudalamktr54">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-[#FFC107] text-2xl bg-[#021542] p-4  rounded-full"
              />
            </Link>
            <Link to="https://www.instagram.com/masudalamktr54/?hl=en">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#FFC107] text-2xl bg-[#021542] p-4  rounded-full"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
