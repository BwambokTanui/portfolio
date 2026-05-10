import shyro from "../assets/shyro/shyro.png";
import twosister from "../assets/twosister/twosister.png";
import eFarm from "../assets/e-farm/e-farm.png";
import kipsHomes from "../assets/kipshomes/KipsHomes.png";

/*
 * To add a new project:
 * 1. Create a folder in src/assets/<project-name>/
 * 2. Add your screenshot there
 * 3. Import the image below
 * 4. Add an entry to the `projects` object
 */

// import newProjectImg from "../assets/new-project/new-project.png";

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
  // newProject: {
  //   name: "My New Project",
  //   techs: ["React", "Node"],
  //   images: [newProjectImg],
  // },
};

const projectList = Object.entries(projects).map(([key, val]) => ({
  ...val,
  key,
}));

export { projectList };
export default projects;
