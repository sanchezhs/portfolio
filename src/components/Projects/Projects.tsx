import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import DesktopImg from "../../assets/projects/arch.png";
import QuantumSolverImg from "../../assets/projects/quantum.png";
import PortfolioImg from "../../assets/projects/portfolio.png";

export type Project = {
  title: string;
  description: string;
  techsUsed: string[];
  image: string;
};

export function Projects() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-30px" }
    );
    observer.observe(ref.current!);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting && ref.current) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("lg:opacity-0");
      });
    }
  }, [isIntersecting]);

  // Projects
  const projects: Project[] = [
    {
      title: "Personal Desktop",
      description:
        "My desktop is running Arch Linux with XMonad as my window manager. I have configured my desktop to be as minimal as possible, with a focus on productivity and efficiency. Most of the configuration is written in Haskell and Bash scripts. I love the ability to fully customize my desktop to my liking.",
      techsUsed: ["Linux", "Haskell", "Bash Scripting"],
      image: DesktopImg,
    },
    {
      title: "Quantum Solver",
      description:
        "This was my final grade project, a website that solves Integer Lineal Problems using QAOA, a quantum algorithm based on quantum gates computers. The website was built using Django and React, and the quantum part was done using Qiskit.",
      techsUsed: ["Django", "React", "Python", "Qiskit"],
      image: QuantumSolverImg,
    },
    {
      title: "Portfolio",
      description:
        "This is my portfolio, a website built using React and TailwindCSS. I wanted to build a website that was simple, minimal, and easy to navigate. I also wanted to learn TailwindCSS, so I decided to use it for this project.",
      techsUsed: ["React", "TailwindCSS"],
      image: PortfolioImg,
    },
  ];
  
  return (
    <section ref={ref} id="projects" className="lg:w-3/4 mx-auto">
      <div className="lg:opacity-0 text-white bg-[#1F1F1F] p-5 rounded-lg delay-[300ms] duration-[500ms] transition-all transform  border border-[#BB86FC]">
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-3 lg:mb-0 mb-10">
          <h1 className="text-2xl mb-2 italic text-[#BB86FC] col-span-5 text-center">
            Main Projects
          </h1>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}