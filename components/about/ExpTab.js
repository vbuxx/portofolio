import React from "react";

const ExpTab = () => {
  return (
    <div>
      <div className="flex space-x-4">
        <img src="/icons/investree.png" alt="icon" className="h-[50px]"></img>

        <div>
          <div className="font-semibold text-black pb-1">
            Investree Virtual Internship Experience
          </div>
          <div className="border-l-2 border-gray-600 pl-2">
            <div className="text-sm">Backend Developer</div>
            <div className="text-sm text-gray-400">June 2022 - July 2022</div>
          </div>
          <div className="border-l-2 border-gray-600 pl-2">
            <div className="text-sm pt-1">Fullstack Developer</div>
            <div className="text-sm text-gray-400">May 2022 - June 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpTab;
