import React from "react";
import credentials from "../../datas/credentials";

const CredentTab = () => {
  const imgList = credentials.map((credential, id) => (
    <img
      key={id}
      src={credential.src}
      alt="img"
      className="shadow-lg md:hover:scale-110 transition ease-in-out delay-100 duration-300"
    />
  ));
  return (
    <div className="grid grid-cols-1 mx-2 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {imgList}
    </div>
  );
};

export default CredentTab;
