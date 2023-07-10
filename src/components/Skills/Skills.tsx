import { useEffect, useRef, useState } from "react";
import SkillCard from "./SkillCard";
import { myLanguages, myTechnologies } from "../../assets/languages/index";

export function Skills() {
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

  return (
    <section ref={ref} className="lg:w-3/4 mx-auto">
      <div className="lg:opacity-0 text-white bg-[#1F1F1F] p-5 rounded-lg delay-[300ms] duration-[500ms] transition-all transform  border border-[#BB86FC]">
        <div className="lg:grid lg:grid-cols-2 gap-5">
          {/* Languages */}
          <div className="grid grid-cols-3 gap-3 lg:mb-0 mb-10 justify-items-center">
            <h1 className="text-2xl mb-2 italic text-[#BB86FC] col-span-3">
              Languages
            </h1>
            {myLanguages.map((language, index) => (
              <SkillCard key={index} src={language} />
            ))}
          </div>
          {/* Technologies */}
          <div className="grid grid-cols-3 gap-3 lg:mb-0 mb-10 justify-items-center">
            <h1 className="text-2xl mb-2 italic text-[#BB86FC] col-span-3">
              Technologies
            </h1>
              {myTechnologies.map((technology, index) => (
                <SkillCard key={index} src={technology} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
