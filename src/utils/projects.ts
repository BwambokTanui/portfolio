import shyro from "../assets/shyro/shyro.png";
import twosister from "../assets/twosister/twosister.png";
import eFarm from "../assets/e-farm/e-farm.png";
import kipsHomes from "../assets/kipshomes/KipsHomes.png";
import ddrumist from "../assets/ddrumist/ddrumist.png";

const projects = {
  shyro: {
    name: "Shyro",
    techs: ["flutter", "hasura"],
    images: [shyro],
  },
  inspireTs: {
    name: "Inspired Ts",
    techs: ["flutter", "django"],
    images: [twosister],
  },
  eFarm: {
    name: "E-Farm",
    techs: ["React Native", "FastAPI"],
    images: [eFarm],
  },
  kipsHomes: {
    name: "Kips-Homes",
    techs: ["FlutterFlow", "Firebase"],
    images: [kipsHomes],
  },
  ddrumist: {
    name: "Ddrumist",
    techs: ["Next.js", "Supabase", "TailwindCSS"],
    images: [ddrumist],
  },
};

const projectList = Object.entries(projects).map(([key, val]) => ({
  ...val,
  key,
}));

export { projectList };
export default projects;
