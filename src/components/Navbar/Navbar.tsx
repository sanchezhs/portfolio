import { useState } from "react";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOnClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#1F1F1F]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        {/*     <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a> */}
        <button
          onClick={handleOnClick}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#BB86FC]"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-15 h-15"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isDropdownOpen ? "" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="text-xl flex flex-col p-4 md:p-0 mt-4 border text-white rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 border-[#BB86FC]">
{/*             <li className="relative group hover:text-[#BB86FC]">
              <a href="#home">Home</a>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </li> */}
            <li className="relative group hover:text-[#BB86FC]">
              <a href="#about">About me</a>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </li>
            <li className="relative group hover:text-[#BB86FC]">
              <a href="#projects">Projects</a>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </li>
            <li className="relative group hover:text-[#BB86FC]">
              <a href="#contact">Contact</a>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

{
  /* <nav className="bg-[#1F1F1F] sticky">
<ul className="flex lg:flex-row lg:gap-10 sm:flex-col sm:gap-3 justify-center text-xl p-4 text-gray-300">
  <li className="lg:hidden flex items-center absolute right-5">
    <button onClick={handleOnClick}>
      <AiOutlineMenu />
    </button>
  </li>
  <li className="relative group hover:text-[#BB86FC] md:hidden">
    <a href="#home">Home</a>
    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
  </li>
  <li className="relative group hover:text-[#BB86FC]">
    <a href="#about">About me</a>
    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
  </li>
  <li className="relative group hover:text-[#BB86FC]">
    <a href="#education">Education</a>
    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
  </li>
  <li className="relative group hover:text-[#BB86FC]">
    <a href="#contact">Contact</a>
    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#664B86] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
  </li>
</ul>
</nav> */
}
