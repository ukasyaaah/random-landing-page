import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Header() {
  const data = useContext(DataContext);
  return (
    <>
      <div className="flex flex-col relative mx-auto  text-black flex-wrap h-screen justify-center items-center gap-y-4 ">
        <ParticlesBg type="cobweb" color="#bbf451" bg={true} />
        <nav className="fixed top-4 z-40 -left-1/2 -right-1/2 ">
          <ul className="flex   text-lg rounded-xl  max-w-sm bg-lime-300  mx-auto  items-center justify-center font-bold  gap-3 p-3 ">
            <li className=" text-black hover:text-lime-900">
              <a href="/">Home</a>
            </li>
            <li className=" text-black hover:text-lime-900">
              <a href="#about">About</a>
            </li>
            <li className=" text-black hover:text-lime-900">
              <a href="/resume">Resume</a>
            </li>
            <li className=" text-black hover:text-lime-900">
              <a href="/portfolio">Portfolio</a>
            </li>
          </ul>
        </nav>
        <Fade direction="up" cascade triggerOnce>
          <h1 className=" text-5xl md:text-8xl lg:text-9xl  text-center mx-4 font-bold">
            {data?.name}
          </h1>
          <h1 className="text-md md:text-lg lg:text-xl  text-center mx-4 font-bold">
            {data?.title}
          </h1>

          <div className="flex flex-wrap font-bold  gap-3">
            <button className="bg-lime-300 px-5 py-3 rounded-lg">
              <a href={data?.project}>Project</a>
            </button>
            <button className="bg-lime-300 px-5 py-3 rounded-lg">
              <a href={data?.github}>Github</a>
            </button>
          </div>
        </Fade>
      </div>
    </>
  );
}
