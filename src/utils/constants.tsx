import icons from "./icons";

export const years_of_experience = new Date().getFullYear() - 2020;

export const aboutDescription = [
  <>
    I am a Fullstack software developer with{" "}
    <strong>{years_of_experience}+</strong> years experience in both Web and
    Native App development. My secondary skill is UI/UX Designer.
  </>,
  <>
    I strive to build awesome web and mobile applications, with great
    functionality through carefully crafted code and user-centric design. Am
    focused in dependable development, safety-critical development, real-time
    data sync in development, high-performance development.
  </>,
];

export const email = "tandommy122@gmail.com";
export const phone = "+254798441351";
export const technologies = [
  "go",
  "django",
  "react",
  "vue",
  "angular",
  "react native",
  "flutter",
];

export const socials = {
  // fiverr: {
  //   icon: icons.fiverr,
  //   link: "https://www.fiverr.com/s/3ERAZB",
  // },
  resume: {
    icon: icons.download,
    link: "/Dominic Kiptanui - Resume.pdf",
  },
  portfolio: {
    icon: icons.download,
    link: "/Dominic Kiptanui - Resume.pdf",
  },
  whatsapp: {
    icon: icons.whatsapp,
    link: `https://wa.me/${phone}`,
  },
  linkedin: {
    icon: icons.linkedin,
    link: "https://www.linkedin.com/in/dominic-kiptanui-56a799181/",
  },
  mail: {
    icon: icons.email,
    link: email,
    prefix: "mailto:",
  },
  github: {
    icon: icons.github,
    link: "https://github.com/BwambokTanui",
  },
  endorse: {
    icon: icons.endorse,
    link: "https://paypal.me/dominicbwambok",
  },
} as const;

type SocialsMap = {
  icon: string;
  link: string;
  prefix?: string;
  key: string;
};
export const socialsMap: SocialsMap[] = (() => {
  const data: SocialsMap[] = [];

  for (const key in socials) {
    if (key === "resume" || key === "portfolio") continue;

    data.push({ key, ...socials[key as keyof typeof socials] });
  }

  return data;
})();

export const APPBAR = {
  defaultHeight: 50,
};
