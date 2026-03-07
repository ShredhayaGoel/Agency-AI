import React from "react";
import assets from "../assets/assets";
import Tittle from "./Tittle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicedata = [
    {
      title: "Advertising",
      description:
        "we turn bold ideas intoo powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing ",
      description:
        "we turn bold ideas intoo powerful digital solutions that connect, engage...",
      icon: assets.content_icon,
    },
    {
      title: "Content writing  ",
      description:
        "we turn bold ideas intoo powerful digital solutions that connect, engage...",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "we turn bold ideas intoo powerful digital solutions that connect, engage...",
      icon: assets.social_icon,
    },
  ];
  return (
    <div
      id="services"
      className=" relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hiddenn"
      ></img>

      <Tittle
        tittle="How can we help   ?"
        desc="We offer a wide range of digital marketing services to help your business grow and succeed in the online space."
      ></Tittle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {servicedata.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
