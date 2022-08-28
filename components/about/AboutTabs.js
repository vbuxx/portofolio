import { useState } from "react";
import tabsData from "../../datas/tabsData";
import TechStack from "./TechStack";

import Image from "next/image";
import EduTab from "./EduTab";
import ExpTab from "./ExpTab";
import CredentTab from "./CredentTab";

const AboutTabs = () => {
  const [showContent, setShowContent] = useState({
    tab: "about",
    content: tabsData[0].content,
  });

  const tabList = tabsData.map((data, id) => (
    <button
      key={id}
      disabled={showContent.tab === data.tab}
      className={
        `hover:text-black text-left ` +
        (showContent.tab === data.tab &&
          "font-bold border-b-2 border-violet-700 text-violet-700 disabled:hover:text-violet-700")
      }
      onClick={() =>
        setShowContent({
          tab: data.tab,
          content: data.content,
        })
      }
    >
      {data.title}
    </button>
  ));
  return (
    <div className="pt-6">
      <div className="sticky top-0 bg-white max-h-16 z-50">
        <div className="flex space-x-2 md:space-x-6 border-b font-medium border-gray-400 text-gray-500">
          {tabList}
        </div>
      </div>
      <p className="pt-5 leading-normal font-[15px] text-black">
        {showContent.content}
      </p>
      <div>
        {showContent.tab == "about" && <TechStack />}
        {showContent.tab == "educations" && <EduTab />}
        {showContent.tab == "experiences" && <ExpTab />}
        {showContent.tab == "credentials" && <CredentTab />}
      </div>
    </div>
  );
};

export default AboutTabs;
