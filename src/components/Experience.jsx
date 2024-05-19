"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  tcs,
  uh,
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
            <Exp_prop
              img={uh}
              title="University of Houston"
              subtitle="Instructional Assistant"
              date="July 2023 - May 2024"
              para={["- Spearheaded the development of a user-friendly employment application utilizing React.js for the Center for Academic Support and Assessment, resulting in a 30% reduction in new hire processing time.", " - Designed and executed a responsive, multi-page web application utilizing React.js for the Center for Academic Support and Assessment."]}
            />
            <Exp_prop
              img={tcs}
              title="Tata Consultancy Services"
              subtitle="Systems Engineer"
              date="August 2021 - August 2022"
              para={["- Led the development and launch of a dynamic website tailored to client needs, resulting in a 20% increase in user engagement, leveraging React for frontend, Spring Boot for backend integration, and SQL for data management.", " - Developed REST APIs in Spring Boot to facilitate efficient data transfer between frontend and backend systems, ensuring seamless user experience."]}
            />

          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
