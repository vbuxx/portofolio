import React from "react";

const EduTab = () => {
  return (
    <>
      <div>
        <div className="font-semibold text-gray-500 dark:text-inherit mb-4">
          Formal Education
        </div>
        <div className="flex space-x-4 mb-4">
          <img src="/icons/UB.png" alt="icon" className="w-12 h-12"></img>
          <div>
            <div className="font-semibold text-black dark:text-inherit">
              Universitas Brawijaya
            </div>
            <div className="text-sm">Bachelor of Engineering</div>
            <div className="text-sm text-gray-400">2017 - 2021</div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-semibold text-gray-500 dark:text-inherit mb-4">
          Informal Education
        </div>
        <div className="flex space-x-4">
          <img
            src="/icons/digitalent.png"
            alt="icon"
            className="w-12 h-12"
          ></img>
          <div>
            <div className="font-semibold text-black dark:text-inherit">
              Digital Talent Scholarship 2022 by KOMINFO
            </div>
            <div className="text-sm">ReactJS for Web Development</div>
            <div className="text-sm text-gray-400">May 2022 - July 2022</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EduTab;
