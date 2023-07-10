import { Skill } from "../../assets/languages";

function SkillCard({ src }: { src:  Skill}) {
  return (
    <div className="hover:border-[#3700B3] transition-colors duration-300 p-1.5 flex items-center justify-center rounded-full bg-[#664B86] border border-gray-300 lg:w-32 gap-1">
      <img className="w-7 h-7" src={src.icon} alt="" />
      <span className="text-sm font-medium text-gray-300 mr-1">
        {src.name}
      </span>
    </div>
  );
}

export default SkillCard;
