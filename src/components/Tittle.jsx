import React from "react";

const Tittle = ({ tittle, desc }) => {
  return (
    <div>
      <h2 className="text-3xl font-medium sm:text-5xl text-gray-800 dark:text-white">
        {tittle}
      </h2>
      <p className=" max-w-lg text-center text-gray-600 dark:text-white/75 mb-5 mt-5 ">
        {desc}
      </p>
    </div>
  );
};

export default Tittle;
