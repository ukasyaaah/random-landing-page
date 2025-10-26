import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Fade } from "react-awesome-reveal";

export default function About() {
  const data = useContext(DataContext);

  return (
    <section
      id="about"
      className="min-h-screen bg-black flex flex-col items-center justify-center"
    >
      <Fade cascade duration={1000}>
        <h3 className="text-3xl md:text-4xl text-lime-300 lg:text-5xl font-extrabold p-7 md:p-14 lg:p-22 ">
          {data?.description}
        </h3>
      </Fade>
    </section>
  );
}
