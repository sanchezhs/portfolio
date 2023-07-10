import { useState, useRef, useEffect } from "react";
import WebDevelopment from "../../assets/web.svg";
import MachineLearning from "../../assets/ml.svg";
import DataScience from "../../assets/data.svg";
import Quantum from "../../assets/qc.svg";

export function AboutMe() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-10px" }
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
    // <section ref={ref} className="w-3/4 mx-auto h-screen"> // This is the original code
    <section id="about" ref={ref} className="lg:w-3/4  mx-auto">
      <div className="lg:opacity-0 text-white delay-[200ms] duration-[500ms] transition-all transform bg-[#1F1F1F] p-5 rounded-lg border border-[#BB86FC]">
        <div className="lg:grid lg:grid-cols-2 gap-5">
          {/* About me */}
          <div className="sm:mb-10">
            <h1 className="text-2xl mb-2 italic text-[#BB86FC] text-center">About Me</h1>
            <p className="mb-4">
              I'm a Computer Engineer, I chose the specialization in computing, which
              provides me with a strong mathematical and theoretical foundation
              that is very useful for programming. I always have a project in
              mind that allows me to acquire new skills and is challenging, as I
              consider it important to stay active, learn, and adapt to new
              technologies.
            </p>
            <p className="mb-4">The main areas I'm interested in are:</p>
            <div className="md:grid md:grid-cols-4 gap-5 text-center flex flex-col items-center mb-10 lg:mb-0">
              <div className="hover:scale-110 transition-all duration-400 w-1/2 lg:w-full">
                <img className="w-15" src={WebDevelopment} />
                <p className="sm:text-sm lg:text-base">Web Development</p>
              </div>
              <div className="hover:scale-110 transition-all duration-400 w-1/2 lg:w-full">
                <img className="w-15" src={MachineLearning} />
                <p className="sm:text-sm lg:text-base">Machine Learning</p>
              </div>
              <div className="hover:scale-110 transition-all duration-400 w-1/2 lg:w-full">
                <img className="w-15" src={DataScience} />
                <p className="sm:text-sm lg:text-base">Data Science</p>
              </div>
              <div className="hover:scale-110 transition-all duration-400 w-1/2 lg:w-full">
                <img className="w-15" src={Quantum} />
                <p className="sm:text-sm  lg:text-base">Quantum Computing</p>
              </div>
            </div>
          </div>
          {/* Timeline */}
          <div>
            <h1 className="text-2xl mb-2 italic text-[#BB86FC] text-center">Timeline</h1>
            <ol className="relative border-l border-[#664B86]">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-[#BB86FC] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-300">
                  August 2021
                </time>
                <h3 className="text-lg font-semibold text-white">
                  C1 English Certificate
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Summer intensive course to obtain the C1 English Certificate
                  for Cambridge
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-[#BB86FC] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-300">
                  March 2023
                </time>
                <h3 className="text-lg font-semibold text-white">
                  Internship at Babel Sistemas de Informaci&oacute;n
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Four months internship as a Fullstack Software Developer
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-[#BB86FC] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  June 2023
                </time>
                <h3 className="text-lg font-semibold text-white">
                  Bachelor's Degree in Computer Engineering
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  At the University of Malaga with a specialization in Computer
                  Science and a average grade of 7.1 out of 10
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
