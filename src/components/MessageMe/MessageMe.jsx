import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function MessageMe() {
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
      <section>
        <div className="text-center mt-20 mb-6 lg:my-20 text-3xl">
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

        <div className="contact-form">
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

export default MessageMe;
