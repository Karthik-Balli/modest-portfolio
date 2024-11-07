"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  WebDev,
  MLTrainee,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          
          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2"
            data-aos="zoom-in-up"
          >
            {/* Innovate Internship */}
            <Exp_prop
              img={WebDev}
              title="Innovate Interns"
              subtitle="Full Stack Web Developer"
              date="FEB 2024 - APR 2024"
              para="- Learned about the basics of Front-End development, React, and UI/UX design."
            />

            {/* Shasha Prayathi Internship*/}
            <Exp_prop
              img={MLTrainee}
              title="Shasha Prayati Technologies"
              subtitle="Machine Learning Trainee"
              date="AUG 2023 - NOV 2023"
              para="- Learned about various machine learning models and done a minor Project."
            />

            {/* -----------Experience can be Added below */}
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
