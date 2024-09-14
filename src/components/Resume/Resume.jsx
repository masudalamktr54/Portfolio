import React from "react";
import { useEffect } from "react";
import Pdf from "../../assets/masudResume.pdf";
import { animated, useSpring } from "@react-spring/web";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import mountainImg from "../../assets/mountainImage-1.png";
import mountainVideo from "../../assets/mountainVideo.mp4";

function Resume() {
  // for springJS count incressing
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 3000,
      config: { mass: 1, tension: 10, friction: 10 },
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  // for AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <section className="mt-10">
        <div>
          <div className="flex flex-col items-center mt-10">
            <h2 className="text-7xl lg:text-9xl font-extrabold text-gray-600 text-opacity-30 absolute -z-50">
              Resume
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold top-0 text-center relative z-10">
              Resume
            </h3>
          </div>

          <div className=" text-center leading-8 mx-3 lg:mx-32 lg:px-32 mt-10 relative z-10">
            <p>
              I am a web developer with experience in Javascript and React. I
              specialize in creating visually appealing websites using HTML,
              CSS, Tailwind, Bootstrap, and Material UI. I have a solid
              foundation in programming languages such as C, C++, and Java,
              along with a good understanding of SQL and mongoDB. I am eager to
              apply my skills and contribute to exciting web development
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section>
        <div className="my-10">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center">
            Experience
          </h2>
          <div className="h-1 w-[80%] mx-auto mt-3 rounded-md bg-gradient-to-r from-[#dedad6] from-2% via-[#c6f700] to-[#ffc107] opacity-70"></div>
        </div>

        <div className="lg:flex lg:justify-center  m-4 lg:mx-auto">
          <div className="lg:h-[450px] lg:w-[500px] my-2 lg:mx-2 p-4 bg-[#0d1d42] rounded-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold">Projects</h2>
            <div className="my-5 text-lg font-medium leading-10">
              <h2>1. Mamta Memorial Academy</h2>
              <h2>2. Flipkart UI Clone</h2>
              <h2>3. Abstract Clone</h2>
            </div>
            <p>
              I developed an e-learning web app using HTML, CSS, TailwindCSS,
              JavaScript, and various libraries. The app offers an intuitive
              user interface and responsive design, enabling seamless access to
              educational content while enhancing the overall learning
              experience for users.
            </p>
          </div>

          <div className="lg:h-[450px] lg:w-[500px] my-2 lg:mx-2 p-4 bg-[#0d1d42] rounded-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold">Skills</h2>
            <div className="flex justify-around my-5 text-lg font-medium leading-10">
              <div>
                <h2>
                  <FontAwesomeIcon icon={faHandPointRight} /> HTML
                </h2>
                <h2>
                  <FontAwesomeIcon icon={faHandPointRight} /> CSS
                </h2>
                <h2>
                  <FontAwesomeIcon icon={faHandPointRight} /> Tailwind CSS
                </h2>
                <h2>
                  <FontAwesomeIcon icon={faHandPointRight} /> JavaScript
                </h2>
              </div>
              <div>
                <h2>
                  <FontAwesomeIcon icon={faHandPointRight} /> React
                </h2>
                <h2>
                  <FontAwesomeIcon icon={faHandPointRight} /> MongoDB
                </h2>
                <h2>
                  <FontAwesomeIcon icon={faHandPointRight} /> Git
                </h2>
                <h2>
                  <FontAwesomeIcon icon={faHandPointRight} /> Figma
                </h2>
              </div>
            </div>
            <p>
              I have a strong foundation in web development, proficient in HTML,
              CSS, TailwindCSS, and JavaScript. I also have experience working
              with React for dynamic user interfaces, MongoDB for database
              management, Git for version control, and Figma for UI/UX design.
            </p>
          </div>
        </div>
      </section>

      {/* Education section */}
      <section>
        <div data-aos="fade-up" className="my-10">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center">
            Education
          </h2>
          <div className="h-1 w-[80%] mx-auto mt-3 rounded-md bg-gradient-to-r from-[#dedad6] from-2% via-[#c6f700] to-[#ffc107] opacity-70"></div>
        </div>

        <div className="lg:flex lg:justify-center  m-4 lg:mx-auto">
          <div
            data-aos="flip-right"
            className="lg:h-[250px] lg:w-[500px] my-2 lg:mx-2 p-4 bg-[#0d1d42] rounded-xl"
          >
            <h2
              data-aos="fade-up"
              className="text-2xl text-[#ffc107] font-extrabold"
            >
              2018 - 2022
            </h2>
            <div data-aos="fade-up" className="my-3 leading-10">
              <h2 className="text-2xl font-normal">
                Bachelor of Computer Applications
              </h2>
              <h2 className="uppercase tracking-[8px] text-sm my-4">
                Purnea University
              </h2>
              <h2 className="my-2">Grade: First Class distinction.</h2>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="lg:h-[250px] lg:w-[500px] my-2 lg:mx-2 p-4 bg-[#0d1d42] rounded-xl"
          >
            <h2
              data-aos="fade-up"
              className="text-2xl text-[#ffc107]  font-extrabold"
            >
              2023 - 2025
            </h2>
            <div data-aos="fade-up" className="my-3 leading-10">
              <h2 className="text-2xl font-normal">
                Master of Computer Applications
              </h2>
              <h2 className="uppercase tracking-[8px] text-sm my-4">
                SAM Global University
              </h2>
              <h2 className="my-2">Persuing...</h2>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="flex justify-center mt-10">
          <Link
            to={Pdf}
            target="_blank"
            className="py-5 lg:py-6 px-10 uppercase font-medium text-xs tracking-[2px] rounded-full outline outline-2 outline-offset-2 bg-[#FFC107] hover:bg-[#FFA000] text-[#021542] hover:text-[#F0F0F0]"
          >
            Download CV
          </Link>
        </div>
      </section>

      {/* Github section */}
      <section className="lg:my-14 lg:relative">
        <div className="lg:flex lg:justify-center m-4 lg:absolute z-10 -inset-10">
          <div
            data-aos="flip-right"
            className="h-[150px] lg:w-[500px] flex flex-col justify-center items-center my-2 lg:mx-2 p-4 bg-[#0d1d42] rounded-xl"
          >
            <h2 className="text-2xl text-[#ffc107] font-extrabold">
              <Number n={5} />
            </h2>
            <h2 data-aos="fade-up">Achievements</h2>
          </div>

          <div
            data-aos="flip-right"
            className="h-[150px] lg:w-[500px] flex flex-col justify-center items-center my-2 lg:mx-2 p-4 bg-[#0d1d42] rounded-xl"
          >
            <h2 className="text-2xl text-[#ffc107]  font-extrabold">
              <Number n={15} />
            </h2>
            <h2 data-aos="fade-up">Artworks</h2>
          </div>
        </div>

        <div className="m-4 lg:mx-0">
          <div data-aos="fade-up">
            <img
              className=" w-full h-[450px] rounded-xl lg:rounded-none object-cover object-center opacity-70"
              src={mountainImg}
              alt="Mountain Image"
            />

            {/* <video
              className=" w-full h-[450px] rounded-xl lg:rounded-none object-cover object-center opacity-70"
              src={mountainVideo}
              alt="Mountain Video"
              autoPlay
              loop
              muted
            ></video> */}
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col space-y-8 justify-center items-center text-center relative z-10  left-1 lg:left-2 -inset-72 lg:-inset-56"
          >
            <h2 className="tracking-[3px] text-4xl  font-extrabold ">
              Here's my{" "}
              <Link
                to="https://github.com/masudalamktr54"
                target="_blank"
                className="py-3 lg:py-4 px-10 uppercase font-semibold text-sm tracking-[2px] rounded-full outline outline-2 outline-offset-2 bg-[#FFC107] hover:bg-[#FFA000] text-[#021542] hover:text-[#F0F0F0]"
              >
                Github
              </Link>
            </h2>

            <h3 className="text-2xl font-semibold">
              I love to code & create awesome artworks.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
