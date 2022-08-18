import Image from "next/image";
import skills from "../../datas/skills";

const TechStack = () => {
  const skillsList = skills.map((skill, id) => (
    <div key={id}>
      <div id="skills-title" className="font-semibold text-gray-500 mb-4">
        {skill.title}
      </div>
      <div id="skills-list" className="space-y-2">
        {skill.lists.map((skillList, id) => (
          <div key={id} className="flex space-x-2 items-center">
            <div className="relative w-5 h-5">
              <Image
                id="skills-icon"
                src={skillList.icon}
                layout="fill"
                className="drop-shadow-lg"
                alt="icon"
              />
            </div>

            <p id="skills-name">{skillList.name}</p>
          </div>
        ))}
      </div>
    </div>
  ));
  return (
    <>
      <h3 className="my-6 pt-4 font-bold border-t border-gray-300">
        Tech Stack
      </h3>
      <div className="grid grid-cols-2 gap-6">{skillsList}</div>
    </>
  );
};

export default TechStack;
