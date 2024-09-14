import React, { useRef, useState, useEffect } from "react";
import Pdf from "../../assets/masudResume.pdf";
import { animated, useSpring } from "@react-spring/web";
import { ReactTyped } from "react-typed";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHandPointRight,
  faLocationDot,
  faPhone,
  faEnvelope,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  // for springJS count incressing
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 5000,
      config: { mass: 1, tension: 10, friction: 10 },
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  // for AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  // Message js for sending email
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w6pmvun", "template_3ibghkq", form.current, {
        publicKey: "5yT62KuDQh1IExIzb",
      })
      .then(
        () => {
          // alert("Message Sent Successfully");

          setStatusMessage("Message Sent Successfully.");
          setIsError(false);
          form.current.reset();

          setTimeout(() => {
            setStatusMessage(null);
          }, 7000);
        },
        (error) => {
          // alert("Message Sent Failed");
          setStatusMessage("Message Failed to Send. Please try again.");
          setIsError(true);

          setTimeout(() => {
            setStatusMessage(null);
          }, 7000);
        }
      );
  };
  return (
    <>
      {/* Home page ======================================== */}
      <div id="home" className="mx-auto w-full max-w-7xl">
        <aside className="lg:flex lg:justify-between items-center lg:items-start overflow-hidden mx-2 pt-16">
          <div className="flex flex-col lg:mt-28 items-center lg:items-start">
            <h3 className="text-[#FFC107]">HELLO!</h3>
            <h1 className="text-center py-4 text-6xl font-bold">
              I'm <span className="text-[#FFC107]">Masud </span>
              <span className="lg:flex pt-4 text-[#FFC107]">Alam</span>
            </h1>
            {/* <h2 className="text-3xl font-semibold py-2">Web Developer</h2> */}
            <div className="">
              <ReactTyped
                strings={[
                  "Web Developer",
                  "Freelancer Artist",
                  "Database Management",
                ]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
              >
                <input
                  className="text-[#dedad6] bg-transparent text-2xl lg:text-3xl text-center lg:text-start font-semibold py-2"
                  type="text"
                />
              </ReactTyped>
            </div>

            {/* <FontAwesomeIcon icon={faInstagram} /> */}
            <div className=" space-x-8 my-6 px-2">
              <Link
                className="py-2 px-8 rounded-full outline outline-2 outline-offset-2 bg-[#FFC107] hover:bg-[#FFA000] text-[#021542] hover:text-[#F0F0F0]"
                to="https://github.com/masudalamktr54"
              >
                Github
              </Link>

              <Link
                className="py-2 px-8 rounded-full outline outline-2 outline-offset-2 hover:bg-[#FFA000]  text-[#F0F0F0] hover:text-[#021542]"
                to="https://www.linkedin.com/in/masud-alam-45a0211b6/"
              >
                LinkdIn
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center mt-16 lg:mt-0">
            <img
              className="h-[380px] lg:h-[640px] opacity-80"
              src="./src/assets/masudPic-1.png"
              alt="main image"
            />
          </div>
        </aside>
      </div>

      {/* About Page ============================================= */}

      <div id="about" className="font-normal mt-20">
        <section className="lg:flex lg:mx-32">
          <div className="text-gray-400">
            <div
              data-aos="fade-up"
              className=" flex justify-center lg:justify-between lg:space-x-6"
            >
              {/* image part */}
              <div className="hidden lg:block my-5 relative ">
                <div className="flex justify-center items-center p-5 relative -z-10  bg-[#F0F0F0] rounded-full">
                  <div className="flex justify-center items-center p-20 bg-[#FFC107] rounded-full overflow-hidden"></div>
                </div>

                <div className=" absolute z-20 left-[26px] -top-10 h-[221px] w-[151px] rounded-full overflow-hidden">
                  <img
                    className="  h-[480px] w-[150px] object-cover object-center "
                    src="./src/assets/masud2ndImg.png"
                    alt="About image"
                  />
                </div>
              </div>

              {/* text part */}
              <div data-aos="fade-up" className="leading-10 mt-3 lg:mt-8 ">
                <p>Name: Masud Alam</p>
                <p>Job Role: Website Developer</p>
                <p>Address: New Delhi, India</p>
              </div>
            </div>

            <div data-aos="fade-up" className="space-y-6 mt-8 lg:mt-0 mx-3">
              <p>Skills</p>

              <div className="space-y-2">
                <p>HTML</p>
                <div className="w-[295px] lg:w-[450px] h-3 bg-gray-400 absolute"></div>
                <div className="w-[285px] lg:w-[430px] h-3 bg-[#FFC107] bg-opacity-80 top-0 left-0 relative "></div>
              </div>
              <div className="space-y-2">
                <p>CSS</p>
                <div className="w-[295px] lg:w-[450px] h-3 bg-gray-400 absolute"></div>
                <div className="w-[285px] lg:w-[430px] h-3 bg-[#FFC107] bg-opacity-80 top-0 left-0 relative "></div>
              </div>
              <div className="space-y-2">
                <p>Tailwind CSS</p>
                <div className="w-[295px] lg:w-[450px] h-3 bg-gray-400 absolute"></div>
                <div className="w-[285px] lg:w-[430px] h-3 bg-[#FFC107] bg-opacity-80 top-0 left-0 relative "></div>
              </div>
              <div className="space-y-2">
                <p>Javascript</p>
                <div className="w-[295px] lg:w-[450px] h-3 bg-gray-400 absolute"></div>
                <div className="w-[280px] lg:w-[420px] h-3 bg-[#FFC107] bg-opacity-80 top-0 left-0 relative "></div>
              </div>
              <div className="space-y-2">
                <p>React</p>
                <div className="w-[295px] lg:w-[450px] h-3 bg-gray-400 absolute"></div>
                <div className="w-[275px] lg:w-[410px] h-3 bg-[#FFC107] bg-opacity-80 top-0 left-0 relative "></div>
              </div>
              <div className="space-y-2">
                <p>MongoDB</p>
                <div className="w-[295px] lg:w-[450px] h-3 bg-gray-400 absolute"></div>
                <div className="w-[270px] lg:w-[390px] h-3 bg-[#FFC107] bg-opacity-80 top-0 left-0 relative "></div>
              </div>
              <div data-aos="fade-up" className="space-y-2">
                <p>Git</p>
                <div className="w-[295px] lg:w-[450px] h-3 bg-gray-400 absolute"></div>
                <div className="w-[265px] lg:w-[380px] h-3 bg-[#FFC107] bg-opacity-80 top-0 left-0 relative "></div>
              </div>
              <div data-aos="fade-up" className="space-y-2">
                <p>Figma</p>
                <div className="w-[295px] lg:w-[450px] h-3 bg-gray-400 absolute"></div>
                <div className="w-[260px] lg:w-[330px] h-3 bg-[#FFC107] bg-opacity-80 top-0 left-0 relative "></div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="lg:flex-1 lg:ml-20">
            <div className="flex flex-col items-center lg:flex-none lg:items-start mt-10 lg:mt-0 ">
              <h2 className="text-7xl lg:text-9xl font-extrabold text-gray-600 text-opacity-30 absolute -z-50">
                About
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold top-0 left-0 lg:ml-6 relative z-10">
                About Me
              </h3>
            </div>

            <div className="mx-3 lg:ml-6 mt-10 relative z-10">
              <p>
                I am a passionate web developer with hands-on experience in
                building responsive and visually appealing websites using HTML,
                CSS, Tailwind, Bootstrap, and Material UI. Proficient in
                Javascript and React for frontend development, and familiar with
                a variety of programming languages including C, C++, and Java.
                With a solid understanding of SQL and mongoDB databases, I am
                eager to bring my skills and creativity to contribute to
                innovative web development projects.
              </p>
            </div>

            <div data-aos="fade-up" className="mt-10 mx-3 lg:ml-6 space-y-6">
              <div>
                <span className="font-bold lg:inline-block w-[20%] ">
                  Profile:
                </span>
                <span> Frontend Developer & Freelancer Artist</span>
              </div>
              <div>
                <span className="font-bold lg:inline-block w-[20%]">
                  Domain:
                </span>
                <span> Software Developement</span>
              </div>
              <div>
                <span className="font-bold lg:inline-block w-[20%]">
                  Education:
                </span>
                <span> Bachelor of Computer Applications</span>
              </div>
              <div>
                <span className="font-bold lg:inline-block w-[20%]">
                  Language:
                </span>
                <span> English, Hindi, Bengali</span>
              </div>
              <div data-aos="fade-up">
                <span className="font-bold lg:inline-block w-[20%]">
                  Other Skills:
                </span>
                <span className="inline-flex w-[60%] overflow-auto">
                  Creativity, and attention to detail, with a good understanding
                  of art basics. Able to use technical tools, communicate well,
                  manage time effectively, and adapt to different tasks easily
                </span>
              </div>
              <div>
                <span className="font-bold lg:inline-block w-[20%]">
                  Interest:
                </span>
                <span>Traveling, Travel Photography, Reading.</span>
              </div>
            </div>
          </div>
        </section>

        <div data-aos="fade-up" className="flex justify-center mt-10">
          <Link
            to="https://www.linkedin.com/in/masud-alam-45a0211b6/"
            className="py-5 lg:py-6 px-10 uppercase font-medium text-xs tracking-[2px] rounded-full outline outline-2 outline-offset-2 bg-[#FFC107] hover:bg-[#FFA000] text-[#021542] hover:text-[#F0F0F0]"
          >
            linkdIN
          </Link>
        </div>
      </div>

      {/* Resume ============================================= */}
      {/* resume section */}
      <section className="mt-10">
        <div data-aos="fade-up">
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
        <div data-aos="fade-up" className="my-10">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center">
            Experience
          </h2>
          <div className="h-1 w-[80%] mx-auto mt-3 rounded-md bg-gradient-to-r from-[#dedad6] from-2% via-[#c6f700] to-[#ffc107] opacity-70"></div>
        </div>

        <div className="lg:flex lg:justify-center  m-4 lg:mx-auto">
          <div
            data-aos="flip-right"
            className=" lg:h-[450px] lg:w-[500px] my-2 lg:mx-2 p-4 bg-[#0d1d42] rounded-xl"
          >
            <h2
              data-aos="fade-up"
              className="text-2xl lg:text-3xl font-semibold"
            >
              Projects
            </h2>
            <div
              data-aos="fade-up"
              className="my-5 text-lg font-medium leading-10"
            >
              <h2>1. Mamta Memorial Academy</h2>
              <h2>2. Flipkart UI Clone</h2>
              <h2>3. Abstract Clone</h2>
            </div>
            <p data-aos="fade-up">
              I developed an e-learning web app using HTML, CSS, TailwindCSS,
              JavaScript, and various libraries. The app offers an intuitive
              user interface and responsive design, enabling seamless access to
              educational content while enhancing the overall learning
              experience for users.
            </p>
          </div>

          <div
            data-aos="flip-left"
            className="lg:h-[450px] lg:w-[500px] my-2 lg:mx-2 p-4 bg-[#0d1d42] rounded-xl"
          >
            <h2
              data-aos="fade-up"
              className="text-2xl lg:text-3xl font-semibold"
            >
              Skills
            </h2>
            <div
              data-aos="fade-up"
              className="flex justify-around my-5 text-lg font-medium leading-10"
            >
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
            <p data-aos="fade-up">
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
              src="./src/assets/mountainImage-1.jpg"
              alt="Mountain Image"
            />

            {/* <video
              className=" w-full h-[450px] rounded-xl lg:rounded-none object-cover object-center opacity-70"
              src="./src/assets/mountainVideo.mp4"
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

      {/* Contact Page ============================================= */}
      <section>
        <div>
          <div data-aos="fade-up" className="flex flex-col items-center mt-10">
            <h2 className="text-7xl lg:text-9xl font-extrabold text-gray-600 text-opacity-30 absolute -z-50">
              Contact
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold top-0 text-center relative z-10">
              Contact
            </h3>
          </div>

          <div
            data-aos="fade-up"
            className=" text-center leading-8 mx-3 lg:mx-32 lg:px-32 mt-10 relative z-10"
          >
            <p>Below are the details to reach out to me!</p>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:flex lg:justify-evenly m-4">
          <div data-aos="fade-up" className="flex flex-col items-center mt-24">
            <FontAwesomeIcon
              className="text-3xl text-[#FFC107] py-8 px-9  bg-[#021542] rounded-full"
              icon={faLocationDot}
            />
            <h3 className="text-xl uppercase my-5">Address</h3>
            <h3>New Delhi, India</h3>
          </div>

          <div data-aos="fade-up" className="flex flex-col items-center mt-24">
            <FontAwesomeIcon
              className="text-3xl text-[#FFC107] py-8 px-9  bg-[#021542] rounded-full"
              icon={faPhone}
            />
            <h3 className="text-xl uppercase my-5">Contact Number</h3>

            <address>
              <Link to={"tel:+917654425454"}>+91765-442-5454</Link>
            </address>
          </div>

          <div data-aos="fade-up" className="flex flex-col items-center mt-24">
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

          <div data-aos="fade-up" className="flex flex-col items-center mt-24">
            <Link to={Pdf} target="_blank">
              <FontAwesomeIcon
                className="text-3xl text-[#FFC107] py-8 px-9  bg-[#021542] rounded-full"
                icon={faCircleArrowDown}
              />
            </Link>
            <Link to={Pdf} target="_blank" className="text-xl uppercase my-4">
              Download Resume
            </Link>
            <Link to={Pdf} target="_blank">
              Resume Link
            </Link>
          </div>
        </div>
      </section>

      {/* Message me page */}
      <section>
        <div
          data-aos="fade-up"
          className="text-center mt-20 mb-6 lg:my-20 text-3xl"
        >
          <h3>Have a Question?</h3>
        </div>

        {/* Success/Error Message */}
        {statusMessage && (
          <div
            className={`${
              isError ? "text-red-500" : "text-green-500"
            } my-5 text-lg lg:text-2xl underline underline-offset-8 font-semibold text-center`}
          >
            {statusMessage}
          </div>
        )}

        <div data-aos="fade-up" className="contact-form">
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            method="get"
            class="form-example flex flex-col justify-center items-center space-y-3 lg:space-y-5"
          >
            <div className="form-example flex flex-col">
              <label className="required" htmlFor="name">
                Name{" "}
              </label>
              <input
                className="bg-[#021542] w-72 lg:w-[500px] border-b-2 px-2 py-1 rounded-md"
                placeholder="Enter your name"
                type="text"
                name="from_name"
                id="name"
                required
              />
            </div>
            <div className="lg:flex space-y-3 lg:space-y-0 lg:space-x-4">
              <div className="form-example flex flex-col">
                <label className="required" htmlFor="email">
                  Email{" "}
                </label>
                <input
                  className="bg-[#021542] w-72 lg:w-[240px] border-b-2 px-2 py-1 rounded-md"
                  placeholder="abc@gmail.com"
                  type="email"
                  name="from_email"
                  id="email"
                  required
                />
              </div>
              <div className="form-example flex flex-col">
                <label htmlFor="Phone">Phone Number </label>
                <input
                  className="bg-[#021542] w-72 lg:w-[240px] border-b-2 px-2 py-1 rounded-md"
                  placeholder="+91 1234567890"
                  type="tel"
                  name="from_phone_number"
                  id="Phone"
                />
              </div>
            </div>
            <div className="form-example flex flex-col">
              <label htmlFor="subject">Subject </label>
              <input
                className="bg-[#021542] w-72 lg:w-[500px] border-b-2 px-2 py-1 rounded-md"
                type="text"
                name="from_subject"
                id="subject"
              />
            </div>
            <div className="form-example flex flex-col">
              <label className="required" htmlFor="Massege">
                Massege{" "}
              </label>
              <textarea
                className="bg-[#021542] w-72 lg:w-[500px] border-b-2 px-2 py-1 rounded-md"
                placeholder="Write here..."
                id="Message"
                name="from_message"
                rows="5"
                cols="25"
                required
              ></textarea>
            </div>
            <div className="form-example">
              <input
                className="py-3 lg:py-4 px-10 mt-2 lg:mt-7 uppercase font-semibold text-sm tracking-[2px] rounded-full outline outline-2 outline-offset-2 bg-[#FFC107] hover:bg-[#FFA000] text-[#021542] hover:text-[#F0F0F0]"
                type="submit"
                name="Send Message"
                id="Send-Message"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
