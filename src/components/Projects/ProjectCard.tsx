import { AiOutlineCheck } from "react-icons/ai";
import { Project } from "./Projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <div className="lg:col-span-3 col-span-4 mb-5 ">
        <img src={project.image} alt={`${project.image}-project`} />
      </div>
      <div className="col-span-2 flex flex-col">
        <div>
          <h2 className="text-xl font-bold mb-5">{project.title}</h2>
        </div>
        <div>
          <p>{project.description}</p>
        </div>
        {/* Things used */}
        <div className="flex flex-row lg:gap-5 gap-2 mt-10 justify-center">
          {project.techsUsed.map((tech, index) => (
            <div
              key={index}
              className="border border-gray-300 w-fit p-3 rounded-xl bg-[#664B86]"
            >
              <AiOutlineCheck className="inline mr-1" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
