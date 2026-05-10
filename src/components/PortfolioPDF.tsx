import { forwardRef } from "react";
import { projectList } from "../utils/projects";

type Project = (typeof projectList)[number];

const descriptions: Record<string, string> = {
  shyro: "A cross-platform mobile application developed with Flutter and Hasura GraphQL backend, delivering real-time data sync and a seamless user experience across iOS and Android devices.",
  inspireTs: "A feature-rich mobile application built with Flutter, powered by a Django REST API backend, designed to provide users with an intuitive and responsive interface.",
  eFarm: "An e-commerce farming mobile application developed with React Native and FastAPI, connecting farmers directly with buyers through a streamlined marketplace experience.",
  kipsHomes: "A property listing and discovery application built with FlutterFlow and Firebase, enabling users to browse, search, and connect with real estate listings effortlessly.",
  ddrumist: "A full-stack auto care web application built with Next.js, Supabase, and TailwindCSS, providing users with a modern platform for vehicle service management and appointments.",
};

const PortfolioPDF = forwardRef<HTMLDivElement, { projects: Project[] }>(
  ({ projects }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          width: "794px",
          padding: "50px 50px 40px",
          backgroundColor: "#ffffff",
          fontFamily: "Poppins, Arial, sans-serif",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 30,
            paddingBottom: 20,
            borderBottom: "3px solid #FF4B58",
          }}
        >
          <h1
            style={{
              color: "#FF4B58",
              fontSize: 32,
              margin: "0 0 4px",
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            Dominic Bwambok
          </h1>
          <p
            style={{
              color: "#637381",
              fontSize: 15,
              margin: 0,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Portfolio Projects
          </p>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.key}
            style={{
              display: "flex",
              alignItems: "center",
              height: "200px",
              marginBottom: index < projects.length - 1 ? 20 : 0,
              paddingBottom: index < projects.length - 1 ? 20 : 0,
              borderBottom:
                index < projects.length - 1 ? "1px solid #E0E0E0" : "none",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                marginRight: 24,
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={project.images[0]}
                alt={project.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                  border: "1px solid #F0F0F0",
                }}
              />
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  color: "#1A1A2E",
                  fontSize: 22,
                  margin: "0 0 8px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {project.name}
              </h2>
              <p
                style={{
                  color: "#FF4B58",
                  fontSize: 13,
                  margin: "0 0 14px",
                  letterSpacing: 1.5,
                  fontWeight: 600,
                }}
              >
                {project.techs.join(" / ").toUpperCase()}
              </p>
              <p
                style={{
                  color: "#555555",
                  fontSize: 14,
                  lineHeight: 1.7,
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
            marginTop: 25,
            paddingTop: 15,
            borderTop: "1px solid #E0E0E0",
            color: "#999999",
            fontSize: 11,
          }}
        >
          Generated on{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          &mdash; dominicbwambok@gmail.com
        </div>
      </div>
    );
  }
);

PortfolioPDF.displayName = "PortfolioPDF";

export default PortfolioPDF;
