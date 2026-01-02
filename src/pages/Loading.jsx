import React from "react";
import { LoaderIcon } from "react-hot-toast";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <span className="loading loading-spinner loading-xl text-sky-400"></span>
    </div>
  );
};

export default Loading;
