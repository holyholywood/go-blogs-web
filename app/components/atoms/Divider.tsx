import React from "react";

const Divider = ({ className }: { className?: string }) => {
  return <div className={`w-full h-[1px] bg-dark-light/25 rounded-full ${className}`}></div>;
};

export default Divider;
