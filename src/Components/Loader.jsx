import React from "react";
import {CgSpinner} from "react-icons/cg";

function Loader() {
  return (
    <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center">
      <CgSpinner className="text-5xl animate-spin text-pink-500 md:text-6xl" />
    </div>
  );
}

export default Loader;
