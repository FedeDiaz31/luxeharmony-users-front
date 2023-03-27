import clockICon from "../assets/img/clock.svg";
import Card from "@mui/material/Card";

function Cards() {
  return (
    <div className="container mx-auto columns-1 laptop:columns-3 my-12 py-12">
      <div className="">
        <img
          src={clockICon}
          alt="icono"
          className="w-10 -my-10 -translate-y-10 ml-2 bg-[red] p-1 rounded brightness-75"
        />
        <h3 className="mt-6 text-xl font-bold">Titulo de la tarjeta</h3>
        <p className="brightness-100 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          modi incidunt maiores, ea enim libero voluptatem voluptas odit fugiat
          possimus id natus impedit nam provident praesentium iure voluptates
          dolorum aperiam.
        </p>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div
      id="aboutHeader"
      className="w-screen object-cover bg-start translate-y-16 bg-contain bg-no-repeat text-start"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl laptop:text-6xl text-textPrimary opacity-100 py-4">
          Sobre este proyecto
        </h1>
        <p className="text-textPrimary  leading-6  text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam et quae,
          ipsam sint amet corporis illum quam officiis voluptas ullam labore
          distinctio maiores veritatis a dolores. A veniam possimus praesentium
          aliquid ducimus pariatur ad officiis eum dignissimos fugit harum
        </p>
      </div>
      <Cards />
    </div>
  );
}

export default AboutUs;
