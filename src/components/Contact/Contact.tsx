import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { EMAIL_JS } from "../../constants/constants";

export function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const maxNameLength = 150;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const form = useRef<HTMLFormElement>(null);

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

  function handleOnSubmit(event: any): void {
    event.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          EMAIL_JS.SERVICE_ID,
          EMAIL_JS.TEMPLATE_ID,
          form.current,
          EMAIL_JS.PUBLIC_KEY
        )
        .then(
          (_) => {
            setSuccess(true);
            setError(false);
          },
          (_) => {
            setError(false);
            setSuccess(false);
          }
        );
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="lg:w-3/4 mx-auto h-screen text-center"
    >
      <div className="lg:opacity-0 text-white bg-[#1F1F1F] p-5 rounded-lg delay-[300ms] duration-[500ms] transition-all transform  border border-[#BB86FC]">
        <h1 className="text-2xl mb-2 italic text-[#BB86FC]">Contact</h1>
        <p className="mb-1">
          If you are interested in my profile, you can contact me through the
          form below or reach me at my social networks.
        </p>
        <div className="flex gap-5 justify-center mb-5">
          <a href="https://www.linkedin.com/in/samuel-s%C3%A1nchez-toca-2a2a16280/" >
            <AiFillLinkedin className="text-4xl hover:text-[#BB86FC]"/>
          </a>
          <a href="https://github.com/sanchezhs">
            <AiFillGithub className="text-4xl hover:text-[#BB86FC]"/>
          </a>
        </div>
        <form
          ref={form}
          onSubmit={handleOnSubmit}
          method="POST"
          className="group"
          noValidate
        >
          <div className="flex flex-col gap-5 justify-center items-center ">
            <div className="lg:w-1/2 w-full">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required={true}
                onChange={(event) => {
                  if (event.target.value.length > maxNameLength) {
                    event.target.value = event.target.value.slice(
                      0,
                      maxNameLength
                    );
                  }
                }}
                className="w-full bg-[#1F1F1F] border border-[#664B86] text-white p-2 rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 w-full text-left">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required={true}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="w-full bg-[#1F1F1F] border border-[#664B86] text-white p-2 rounded-lg peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              />
              <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid email address
              </span>
            </div>
            <div className="lg:w-1/2 w-full">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required={true}
                className="w-full h-48 bg-[#1F1F1F] border border-[#664B86] text-white p-2 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="uppercase text-gray-300 lg:w-24 w-full transition-colors duration-300 hover:text-white border border-[#BB86FC] hover:bg-[#664B86] focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-2 group-invalid:pointer-events-none group-invalid:opacity-30"
            >
              Send
            </button>
            {success && (
              <span className="mt-2 text-sm text-green-500">
                Your message has been sent successfully.
              </span>
            )}
            {error && (
              <span className="mt-2 text-sm text-red-500">
                Failed to send your message, please try again.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

// service_yos4npc
