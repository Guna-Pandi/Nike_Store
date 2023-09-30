import React from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";

const sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <div className=" nike-container gap">
      <Title title={title} />
      <div
        className={`grid justify-items-center items-center lg:gap-5 mt-7  gap-7 ${
          ifExists
            ? "grid-cols-3 xl:grid-cols-2  sm:grid-cols-1"
            : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "
        }`}>
        {items?.map((item, i) => (
          <Item {...item} key={i} ifExists={ifExists} />
        ))}
      </div>
    </div>
  );
};

export default sales;
