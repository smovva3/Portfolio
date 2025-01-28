"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  plogo,
  tcs,
  uh,
  astek
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
              img={astek}
              title="Astek Solutions Inc."
              subtitle="Full Stack Developer"
              date="Jul 2024 - Present"
              para={["- Designed and implemented scalable Microservices architecture using ASP.NET Core, C#, and Microsoft Azure. Developed secure RESTful APIs with ASP.NET Identity and Azure Active Directory.", " - Built dynamic front-end interfaces with React.js, TypeScript, and Bootstrap, ensuring seamless integration with back-end services. Leveraged Entity Framework Core and LINQ for efficient data management and applied test-driven development (TDD) practices using xUnit and Moq."]}
            />
            <Exp_prop
              img={uh}
              title="University of Houston"
              subtitle="Instructional Assistant"
              date="Sep 2023 - May 2024"
              para={["- Developed a streamlined employment application using React.js, TypeScript, C#, and .NET, reducing new hire processing time by 30%. Designed a RESTful API with ASP.NET Core, driving a 40x increase in application submissions through improved frontend-backend interaction. Enhanced security by implementing authentication and role-based access control with ASP.NET Identity.", " - Ensured flawless functionality with thorough testing using React Testing Library and xUnit. Improved scalability and reduced API response times by 25% through caching strategies and asynchronous workflows."]}
            />
            <Exp_prop
              img={tcs}
              title="Tata Consultancy Services Ltd. "
              subtitle="Assistant Systems Engineer"
              date="Aug 2021 - Aug 2022"
              para={["- Developed iOS applications with Swift, integrating secure login systems, interactive data visualizations, and real-time synchronization to enhance usability and engagement. Spearheaded the creation of a responsive, client-focused website using React.js, ASP.NET Core, and SQL Server, resulting in a 20% increase in user activity.", " - Designed and optimized RESTful APIs with ASP.NET Core, improving database performance by fine-tuning schemas and reducing data retrieval time by 40%."]}
            />
            <Exp_prop
              img={plogo}
              title="Perfexion Info Tech Pvt. Ltd."
              subtitle="Software Associate "
              date="Apr 2020 - Jul 2021"
              para={["- Developed interactive user interfaces with React.js, TypeScript, and ASP.NET Core, delivering visually engaging and user-friendly experiences. Integrated RESTful APIs into front-end components for smooth data flow and real-time updates.", " - Enhanced usability with custom UI components and cross-browser compatibility while ensuring seamless .NET framework integration. Improved application responsiveness by resolving performance bottlenecks using advanced debugging and profiling tools."]}
            />

          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
