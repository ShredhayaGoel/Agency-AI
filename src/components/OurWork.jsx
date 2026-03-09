import React from "react";
import Tittle from "./Tittle";
import assets from "../assets/assets";

const OurWork = () => {
  const workdata = [
    {
      tittle: "Mobile app Marketing",
      description:
        "we turn bold ideas into powerful digital solutions that connect, engage...",
      image: assets.work_mobile_app,
    },
    {
      tittle: "Dashboard Management",
      description: "We help you execute and deliver your plans...",
      image: assets.work_dashboard_management,
    },
    {
      tittle: "Fitness App Promottion",
      description:
        "We help you create a marketing strategy that drives results...",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <div
      id="work"
      className=" flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Tittle
        tittle="Our latest work"
        desc="From strategy to execution , we craft  digital solutions that move your business forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workdata.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img
              src={work.image}
              alt={work.tittle}
              className="w-full rounded-xl"
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.tittle}</h3>

            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
