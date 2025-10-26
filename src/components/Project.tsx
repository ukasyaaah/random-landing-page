import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { DataContext } from "../context/DataContext";
import ParticlesBg from "particles-bg";

export default function Project() {
  const data = useContext(DataContext);

  return (
    <>
      <div
        id="project"
        className="h-screen  relative flex flex-col  mx-auto items-center justify-center"
      >
        <ParticlesBg type="cobweb" color="#bbf451" bg={true} />

        <Fade cascade duration={1000}>
          <div className="flex flex-col selected-section p-5 rounded-lg bg-lime-300 text-black gap-5">
            {data?.project.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-5xl hover:underline hover:underline-offset-2 decoration-black font-bold md:text-7x lg:text-8xl"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Fade>
      </div>
    </>
  );
}
