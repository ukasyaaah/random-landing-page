import ParticlesBg from "particles-bg";
import type Data from "../types/data";

export default function Header({ data }: { data: Data }) {
  return (
    <>
      <div className="flex flex-col relative mx-auto  text-white flex-wrap h-screen justify-center items-center gap-y-4 ">
        <ParticlesBg type="circle" bg={true} />
        <nav>
          <ul className="flex  text-lg absolute top-2 -left-1/2 -right-1/2   max-w-sm mx-auto  items-center justify-center font-bold  gap-3 p-5 ">
            <li className=" text-white hover:text-red-500">
              <a href="/">Home</a>
            </li>
            <li className=" text-white hover:text-red-500">
              <a href="/about">About</a>
            </li>
            <li className=" text-white hover:text-red-500">
              <a href="/resume">Resume</a>
            </li>
            <li className=" text-white hover:text-red-500">
              <a href="/portfolio">Portfolio</a>
            </li>
          </ul>
        </nav>

        <h1 className="text-5xl md:text-8xl lg:text-9xl  text-center mx-4 font-bold">
          {data?.name}
        </h1>
        <h1 className="text-md md:text-lg lg:text-xl  text-center mx-4 font-bold">
          {data?.description}
        </h1>

        <div className="flex flex-wrap  gap-3">
          <button className="bg-red-500 px-5 py-3 rounded-lg">
            <a href={data?.project}>Project</a>
          </button>
          <button className="bg-red-500 px-5 py-3 rounded-lg">
            <a href={data?.github}>Github</a>
          </button>
        </div>
      </div>
    </>
  );
}
