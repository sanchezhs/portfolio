import { useState } from "react";

export function Tape() {
  const nWhiteSpaces = 30;
  const initWord = " Welcome!";
  let tapeWord =
    " ".repeat(nWhiteSpaces) +
    " ".repeat(initWord.length) +
    " ".repeat(nWhiteSpaces);
  const [currentCell, setCurrentCell] = useState(
    tapeWord.length - nWhiteSpaces - initWord.length
  );
  const [tape, setTape] = useState(tapeWord.split(""));
  const [disableButton, setDisableButton] = useState(false);

  const animateHighlight = (cell: number, reverse = false) => {
    let animationId: number;

    const animate = () => {
      if (cell - 1 < 0 && reverse) return;
      if (cell === nWhiteSpaces + initWord.length || reverse) {
        cell--;
        animationId = requestAnimationFrame(() => animateReverse(cell, true));
      } else if (cell + 1 < tapeWord.length && !reverse) {
        cell++;
        setTimeout(() => {
          animationId = requestAnimationFrame(animate);
        }, 500);
      }
      setCurrentCell(cell);
      setTape((prevTape) => {
        const newTape = [...prevTape];
        newTape[cell] = initWord[cell - nWhiteSpaces];
        return newTape;
      });
    };

    const animateReverse = (cell: number, reverse: boolean) => {
      setCurrentCell(cell);
      if (cell === nWhiteSpaces + 1) {
        cancelAnimationFrame(animationId);
      } else if (cell > 0 && reverse) {
        cell--;
        setTimeout(() => {
          animationId = requestAnimationFrame(() => animateReverse(cell, true));
        }, 500);
      }
    };
    setCurrentCell(cell);
    setTape((prevTape) => {
      const newTape = [...prevTape];
      newTape[cell] = initWord[cell - nWhiteSpaces];
      return newTape;
    });
    animationId = requestAnimationFrame(animate);
  };

  const handleOnClick = () => {
    animateHighlight(currentCell);
    setDisableButton(true);
  };

  function xTranslationDiv() {
    return -25 * (currentCell - nWhiteSpaces - 1);
  }

  return (
    <section
      id="home"
      className="w-3/4 mx-auto flex flex-col items-center justify-center h-screen overflow-x-hidden"
    >
      <div>
        <div
          className="flex flex-row mb-2 transition-all duration-700"
          style={{
            transform: `translateX(${xTranslationDiv()}px)`,
          }}
        >
          {tape.map((letter, index) => (
            <div
              key={index}
              className={`font-serif text-lg font-medium h-10 w-10 border-solid border-2 flex items-center justify-center text-white ${
                index === currentCell ? "border-[#BB86FC]" : ""
              } ${index === tapeWord.length ? "border-r-0" : "border-r-1"} ${
                index === 0 ? "border-l-1" : "border-l-0"
              } `}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={handleOnClick}
        className="text-gray-300 uppercase hover:text-white border border-[#BB86FC] hover:bg-[#664B86] focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-2 mb-2
        disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={disableButton}
      >
        Start
      </button>
    </section>
  );
}
