import { useEffect, useState } from "react";
import {
  Tape,
  AboutMe,
  Contact,
  Navbar,
  Separator,
  Skills,
  Projects,
  Footer
} from "./components/index";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const button = (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-[#BB86FC] text-[#1F1F1F] p-3 rounded-full shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );

  return (
    <>
      <Navbar />
      <main>
        <Tape />
        <AboutMe />
        <Separator />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <Contact />
        {showButton && button}
        <Footer />
      </main>
    </>
  );
}

export default App;
