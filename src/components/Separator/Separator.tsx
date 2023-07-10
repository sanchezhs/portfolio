import { useEffect, useRef, useState } from "react";

export function Separator() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '45px' }
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
    <section ref={ref} >
      <div className="lg:opacity-0 w-3/4 mx-auto justify-center items-center text-center text-white delay-[400ms] duration-[650ms] transition-all transform ">
        <div className="flex">
          <div className="w-px lg:h-[800px] h-[200px] bg-[#BB86FC] mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
