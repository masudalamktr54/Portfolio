import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import masudSecondPic from "../../assets/masud2ndImg.png";

function About() {
  // for AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <div id="about" className="font-normal mt-20">
        <section className="lg:flex lg:mx-32">
          <div className="text-gray-400">
            <div className=" lg:flex justify-center lg:space-x-6">
              {/* image part */}
              <div className="my-5 relative flex justify-center ">
                <div className="flex justify-center items-center p-5 relative -z-10  bg-[#F0F0F0] rounded-full">
                  <div className="flex justify-center items-center p-20 bg-[#FFC107] rounded-full overflow-hidden"></div>
                </div>

                <div className=" absolute z-20 lg:left-[26px] -top-10 h-[221px] w-[151px] rounded-full overflow-hidden">
                  <img
                    className="h-[480px] w-[150px] object-cover object-center "
                    src={masudSecondPic}
                    alt="About image"
                  />
                </div>
              </div>

              {/* text part */}
              <div className="leading-10 mt-3 lg:mt-8 text-center lg:text-start ">
                <p>Name: Masud Alam</p>
                <p>Job Role: Website Developer</p>
                <p>Address: New Delhi, India</p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="space-y-6 mt-8 lg:mt-0">
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
                <div className="space-y-2">
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
          </div>

          <div className="lg:flex-1 lg:ml-20">
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

            <div className="mt-10 mx-3 lg:ml-6 space-y-6">
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
              <div>
                <span className="font-bold lg:inline-block w-[20%]">
                  Other Skills:
                </span>
                <span className="inline-flex w-[60%] overflow-auto">
                  Creativity, and attention to detail, with a good understanding
                  of art basics. Able to use technical tools, communicate well,
                  manage time effectively, and adapt to different tasks easily.
                </span>
              </div>
              <div>
                <span className="font-bold lg:inline-block w-[20%]">
                  Interest:
                </span>
                <span>Traveling, Travel Photography, Reading</span>
              </div>
            </div>
          </div>
        </section>

        <div data-aos="fade-up" className="flex justify-center mt-10">
          <Link
            to="https://www.linkedin.com/in/masud-alam-45a0211b6/"
            className="py-4 lg:py-5 px-10 uppercase font-medium text-xs tracking-[2px] rounded-full outline outline-2 outline-offset-2 bg-[#FFC107] hover:bg-[#FFA000] text-[#021542] hover:text-[#F0F0F0]"
          >
            linkdIN
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
