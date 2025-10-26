export default function Navbar() {
  return (
    <ul className="flex  fixed top-4 -left-1/2 -right-1/2 z-40  text-lg rounded-xl max-w-xs md:max-w-lg md:gap-9 bg-lime-300  mx-auto  justify-center font-bold  gap-3 p-3 ">
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
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}
