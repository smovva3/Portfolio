import Lottie from "lottie-react";
import education from "../assets/lottie/Education.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Edu_prop from "./Edu_prop";
import {
  uh, pvpsit
} from "../constants/Constant";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (

    <>
      <section
        id="education"
        className="EXPERIENCE p-5 mx-20  font-['Poppins']  max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-10">
          <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
            Education
          </h1>

          <div
            className="EDUCATION flex gap-7 justify-between flex-row-reverse max-sm:flex-col"
            data-aos="fade-right"
          >
            <Edu_prop
              image={uh}
              title="University of Houston"
              degree="Masters"
              period="August 2022 - May 2024"
              major="Computer Science">

            </Edu_prop>

            <Edu_prop
              image={pvpsit}
              title="PVP Siddhartha Institute of Technology"
              degree="Bachelors"
              major="Information Technology">

            </Edu_prop>

            <Lottie
              animationData={education}
              loop={true}
              className="max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"
            />

          </div>
        </div>
      </section>
    </>
  );
};
export default Education;
