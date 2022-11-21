import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <section
      className="my-32"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="py-6">
              The Doctor's Portal helps health organization that seeks quality
              of care excellence by providing Tools that lets physicians and
              practices to measure themselves against a set of Indices set by
              the organization, tools to optimize their practices and being
              compliant to the organization guidelines and statistics.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
