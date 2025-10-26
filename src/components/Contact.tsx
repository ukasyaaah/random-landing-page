import { Fade } from "react-awesome-reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen  bg-lime-300 block lg:flex  items-center justify-center"
    >
      <Fade cascade duration={1000}>
        <h3 className="text-3xl md:text-4xl text-black lg:text-5xl font-extrabold p-7 md:p-14 lg:p-22 ">
          Coming Soon
        </h3>
        {/* <h3 className="text-3xl md:text-4xl text-black lg:text-5xl font-extrabold ">
          Get in Touch
        </h3>
        <div className="bg-black max-w-md w-full flex flex-col text-lime-300 rounded-xl">
          <form
            action=""
            method="post"
            className="items-stretch justify-items-stretch    gap-4   m-10"
          >
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="border-2 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="border-2 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                id="message"
                className="border-2 p-2 rounded-lg"
              />
            </div>
            <button className="bg-lime-300 p-2 rounded-lg text-black">
              Send
            </button>
          </form>
        </div> */}
      </Fade>
    </section>
  );
}
