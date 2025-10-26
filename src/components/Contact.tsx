import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { DataContext } from "../context/DataContext";

export default function Contact() {
  const data = useContext(DataContext);

  return (
    <section
      id="contact"
      className="min-h-screen bg-lime-300 flex flex-col  items-center justify-center"
    >
      <Fade cascade duration={1000}>
        <div className="flex flex-col p-5 rounded-lg bg-black text-lime-300 gap-5">
          {data?.contact.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-5xl hover:underline hover:underline-offset-2 decoration-lime-300 font-bold md:text-7x lg:text-8xl"
            >
              {item.name}
            </a>
          ))}
        </div>
      </Fade>
    </section>
  );
}
