import { forwardRef } from "react";
import { projectList } from "../utils/projects";

const descriptions: Record<string, string> = {
  shyro: "A cross-platform mobile application developed with Flutter and Hasura GraphQL backend, delivering real-time data sync and a seamless user experience across iOS and Android devices.",
  inspireTs: "A feature-rich mobile application built with Flutter, powered by a Django REST API backend, designed to provide users with an intuitive and responsive interface.",
  eFarm: "An e-commerce farming mobile application developed with React Native and FastAPI, connecting farmers directly with buyers through a streamlined marketplace experience.",
  kipsHomes: "A property listing and discovery application built with FlutterFlow and Firebase, enabling users to browse, search, and connect with real estate listings effortlessly.",
  ddrumist: "A full-stack auto care web application built with Next.js, Supabase, and TailwindCSS, providing users with a modern platform for vehicle service management and appointments.",
};

const PortfolioPDF = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      style={{
        padding: "50px 45px",
        backgroundColor: "#ffffff",
        fontFamily: "Poppins, Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 45,
          paddingBottom: 25,
          borderBottom: "3px solid #FF4B58",
        }}
      >
        <h1
          style={{
            color: "#FF4B58",
            fontSize: 30,
            margin: "0 0 4px",
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          Dominic Bwambok
        </h1>
        <p
          style={{
            color: "#637381",
            fontSize: 14,
            margin: 0,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Portfolio Projects
        </p>
      </div>

      {projectList.map((project, index) => (
        <div
          key={project.key}
          style={{
            display: "flex",
            marginBottom: index < projectList.length - 1 ? 30 : 0,
            paddingBottom: index < projectList.length - 1 ? 30 : 0,
            borderBottom:
              index < projectList.length - 1 ? "1px solid #DFE3E8" : "none",
            pageBreakInside: "avoid",
          }}
        >
          <div
            style={{
              width: "38%",
              marginRight: 25,
              flexShrink: 0,
            }}
          >
            <img
              src={project.images[0]}
              alt={project.name}
              style={{
                width: "100%",
                borderRadius: 8,
                border: "1px solid #F4F6F8",
              }}
            />
          </div>
          <div style={{ width: "62%" }}>
            <h2
              style={{
                color: "#212B36",
                fontSize: 20,
                margin: "0 0 6px",
                fontWeight: 600,
              }}
            >
              {project.name}
            </h2>
            <p
              style={{
                color: "#FF4B58",
                fontSize: 11,
                margin: "0 0 14px",
                letterSpacing: 1.5,
                fontWeight: 500,
              }}
            >
              {project.techs.join(" / ").toUpperCase()}
            </p>
            <p
              style={{
                color: "#637381",
                fontSize: 13,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {descriptions[project.key] || ""}
            </p>
          </div>
        </div>
      ))}

      <div
        style={{
          textAlign: "center",
          marginTop: 35,
          paddingTop: 15,
          borderTop: "1px solid #DFE3E8",
          color: "#919EAB",
          fontSize: 11,
        }}
      >
        Generated on {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })} &mdash; dominicbwambok@gmail.com
      </div>
    </div>
  );
});

PortfolioPDF.displayName = "PortfolioPDF";

export default PortfolioPDF;
