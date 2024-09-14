import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <section>
        <div>
          <div className="flex flex-col items-center mt-10">
            <h2 className="text-7xl lg:text-9xl font-extrabold text-gray-600 text-opacity-30 absolute -z-50">
              Contact
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold top-0 text-center relative z-10">
              Contact
            </h3>
          </div>

          <div className=" text-center leading-8 mx-3 lg:mx-32 lg:px-32 mt-10 relative z-10">
            <p>Below are the details to reach out to me!</p>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:flex lg:justify-evenly m-4">
          <div className="flex flex-col items-center mt-24">
            <FontAwesomeIcon
              className="text-3xl text-[#FFC107] py-8 px-9  bg-[#021542] rounded-full"
              icon={faLocationDot}
            />
            <h3 className="text-xl uppercase my-5">Address</h3>
            <h3>New Delhi, India</h3>
          </div>

          <div className="flex flex-col items-center mt-24">
            <FontAwesomeIcon
              className="text-3xl text-[#FFC107] py-8 px-9  bg-[#021542] rounded-full"
              icon={faPhone}
            />
            <h3 className="text-xl uppercase my-5">Contact Number</h3>

            <address>
              <Link to={"tel:+917654425454"}>+91765-442-5454</Link>
            </address>
          </div>

          <div className="flex flex-col items-center mt-24">
            <FontAwesomeIcon
              className="text-3xl text-[#FFC107] py-8 px-9  bg-[#021542] rounded-full"
              icon={faEnvelope}
            />
            <h3 className="text-xl uppercase my-5">Email Address</h3>
            <address>
              <Link to={"mailto:masudalamktr54@gmail.com"}>
                masudalamktr54@gmail.com
              </Link>
            </address>
          </div>

          <div className="flex flex-col items-center mt-24">
            <FontAwesomeIcon
              className="text-3xl text-[#FFC107] py-8 px-9  bg-[#021542] rounded-full"
              icon={faCircleArrowDown}
            />
            <h3 className="text-xl uppercase my-5">Download Resume</h3>
            <Link to={"#"}>Resume Link</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
