import React from "react";
import Container from "./Container";

const Subscribe = () => {
  return (
    <section className="bg-[#222132] py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center text-white">
          {/* Left: Text */}
          <div className="mb-6 md:mb-0 md:max-w-[648px] pl-4">
            <h3 className="text-lg md:text-2xl font-bold mb-2">
              Get an update every week
            </h3>
            <p className="text-sm text-gray-400">
              We ensure that your product is delivered in the safest possible <br/> manner,
              at the correct location at the right time.
            </p>
          </div>

          {/* Right: Form */}
          <div className="md:max-w-[50%] w-full">
            <p className="text-orange-600 text-xs uppercase mb-2 font-bold">
              Subscribe to Newsletter
            </p>
            <form className="flex w-full max-w-md ">
              <input
                type="email"
                placeholder="Enter your mail"
                className="flex-grow px-4 py-3 rounded-l bg-[#222132] text-gray-600 outline-none rounded border-gray-300 bordar"
                required
              />
              <button
                type="submit"
                className="bg-orange-600 px-5 py-3 rounded-r text-white font-medium rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
