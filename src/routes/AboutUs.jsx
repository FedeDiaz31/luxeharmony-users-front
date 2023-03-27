import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import clockIcon from "../assets/img/clock-48.png";
import listIcon from "../assets/img/list-48.png";
import sourceCodeIcon from "../assets/img/source-code-48.png";

import personImage from "../assets/img/person.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function GridAbout() {
  return (
    <Box sx={{ width: "100%" }} className="container mx-auto ">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} md={3}>
          <Item className="flex flex-col ">
            <img src={personImage} alt="" className="max-w-sm block mb-4" />
            <h2 className="block text-left text-xl">Nombre del personaje </h2>
            <h2 className="block text-left mb-2 text-xl">
              Subtitulo del personaje
            </h2>
            <p className="text-left my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nemo aut reprehenderit error quaerat asperiores
              molestias ut, voluptate beatae et!
            </p>
            <div className="flex">
              <TwitterIcon className="inline" />
              <LinkedInIcon className="inline" />
            </div>
          </Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item className="flex flex-col ">
            <img src={personImage} alt="" className="max-w-sm block mb-4" />
            <h2 className="block text-left text-xl">Nombre del personaje </h2>
            <h2 className="block text-left mb-2 text-xl">
              Subtitulo del personaje
            </h2>
            <p className="text-left my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nemo aut reprehenderit error quaerat asperiores
              molestias ut, voluptate beatae et!
            </p>
            <div className="flex">
              <TwitterIcon className="inline" />
              <LinkedInIcon className="inline" />
            </div>
          </Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item className="flex flex-col ">
            <img src={personImage} alt="" className="max-w-sm block mb-4" />
            <h2 className="block text-left text-xl">Nombre del personaje </h2>
            <h2 className="block text-left mb-2 text-xl">
              Subtitulo del personaje
            </h2>
            <p className="text-left my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nemo aut reprehenderit error quaerat asperiores
              molestias ut, voluptate beatae et!
            </p>
            <div className="flex">
              <TwitterIcon className="inline" />
              <LinkedInIcon className="inline" />
            </div>
          </Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item className="flex flex-col ">
            <img src={personImage} alt="" className="max-w-sm block mb-4" />
            <h2 className="block text-left text-xl">Nombre del personaje </h2>
            <h2 className="block text-left mb-2 text-xl">
              Subtitulo del personaje
            </h2>
            <p className="text-left my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nemo aut reprehenderit error quaerat asperiores
              molestias ut, voluptate beatae et!
            </p>
            <div className="flex">
              <TwitterIcon className="inline" />
              <LinkedInIcon className="inline" />
            </div>
          </Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item className="flex flex-col ">
            <img src={personImage} alt="" className="max-w-sm block mb-4" />
            <h2 className="block text-left text-xl">Nombre del personaje </h2>
            <h2 className="block text-left mb-2 text-xl">
              Subtitulo del personaje
            </h2>
            <p className="text-left my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem nemo aut reprehenderit error quaerat asperiores
              molestias ut, voluptate beatae et!
            </p>
            <div className="flex">
              <TwitterIcon className="inline" />
              <LinkedInIcon className="inline" />
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

function Cards() {
  return (
    <div className="container mx-auto columns-1 laptop:columns-3 my-10 ">
      <div className="bg-bgPrimaryColor laptop:rounded shadow-md py-4 mb-12 laptop:p-4">
        <img
          src={clockIcon}
          alt="icono"
          className="text-xs relative w-16 -translate-y-12 laptop:-translate-y-18 ml-2 bg-[#963aec] p-1 rounded brightness-75"
        />
        <h3 className="mt-1 text-xl font-bold">Titulo de la tarjeta</h3>
        <p className="brightness-100 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          modi incidunt maiores, ea enim libero voluptatem voluptas odit fugiat
          possimus id natus impedit nam provident praesentium iure voluptates
          dolorum aperiam.
        </p>
      </div>
      <div className="bg-bgPrimaryColor laptop:rounded shadow-md py-4 mb-12 laptop:p-4">
        <img
          src={listIcon}
          alt="icono"
          className="relative w-16 -translate-y-12 laptop:-translate-y-12 ml-2 bg-[#963aec] p-1 rounded brightness-75"
        />
        <h3 className="mt-1 text-xl font-bold">Titulo de la tarjeta</h3>
        <p className="brightness-100 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          modi incidunt maiores, ea enim libero voluptatem voluptas odit fugiat
          possimus id natus impedit nam provident praesentium iure voluptates
          dolorum aperiam.
        </p>
      </div>
      <div className="bg-bgPrimaryColor laptop:rounded shadow-md py-4 mb-24 laptop:p-4 ">
        <img
          src={sourceCodeIcon}
          alt="icono"
          className="text-textPrimary  relative w-16 -translate-y-12 laptop:-translate-y-12 ml-2 bg-[#963aec] p-1 rounded brightness-75"
        />
        <h3 className="mt-1 text-xl font-bold">Titulo de la tarjeta</h3>
        <p className="brightness-100 pb-4">
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
      className="w-screen  laptop:bg-contain  translate-y-16 bg-auto bg-no-repeat text-start pb-24"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl laptop:text-6xl text-textPrimary opacity-100 pt-12 pb-6">
          Sobre este proyecto
        </h1>
        <p className="text-textPrimary  leading-5 text-sm pb-12 pt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam et quae,
          ipsam sint amet corporis illum quam officiis voluptas ullam labore
          distinctio maiores veritatis a dolores. A veniam possimus praesentium
          aliquid ducimus pariatur ad officiis eum dignissimos fugit harum
        </p>
      </div>
      <Cards />
      <h3 className="text-5xl text-center font-bold">Equipo</h3>
      <p className="text-2xl leading-5  pb-12  pt-2  w-11/12 laptop:w-4/5 text-center mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam et quae,
        ipsam sint amet corporis illum quam officiis voluptas ullam labore
        distinctio maiores veritatis a dolores. A veniam possimus praesentium
        aliquid ducimus pariatur ad officiis eum dignissimos fugit harum
      </p>
      <GridAbout />
    </div>
  );
}

export default AboutUs;
