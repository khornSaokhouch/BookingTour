"use client";

import React from "react";
import useStore from "../../../store/countStore";

const page = () => {
  const { count, increaseCount, decreaseCount, category } = useStore();
  return (
    <div className="mt-52">
      {category?.map((item, index) => (
        <div key={index}>
          <div>
            {item.id}: {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
