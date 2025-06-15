import React from "react";
import ResumeFields from "../config/ResumeFields";
import {Link, useParams} from "react-router-dom";

function Tab({activeTab}) {
  const tabs = Object.keys(ResumeFields);
  console.log(useParams())
  console.log(tabs);
  return (
    <div className="flex w-full gap-2 overflow-y-auto md:gap-3">
      {tabs.map((tab) => (
        <Link
          key={tab}
          className={`tabs relative cursor-pointer rounded-md px-4 py-1.5 text-sm capitalize md:text-base 2xl:text-lg ${
            activeTab === tab
              ? "bg-gray-300 text-black"
              : "bg-gray-100 hover:bg-grey-600"
          }`}
          // to={`/editor/?tab=${tab}`}
          to={`/editor/${tab}`}
          >
          {tab}
        </Link>
      ))}
    </div>
  );
}

export default Tab;
