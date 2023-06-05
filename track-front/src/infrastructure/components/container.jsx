import React from "react";

const Container = ({ children, totalTimeSpent }) => {
  return (
    <div className="m-auto border  border-gray-300 p-2 mt-16 bg-gray-50">
      <div className="text-end mb-2"><p>total hours : {totalTimeSpent}</p></div>
      {children}
    </div>
  );
};

export default Container;
