import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Card
            name="Geography game"
            description="A geography game where you can find a challenge for you knowledge about the world. In this React base project you will find the world map and severeal continents and a score in base to your performance" projectPath={"https://main--geographey.netlify.app/"} 
            imgPath="/geographey-preview.png"
          />
          <Card
            name="Rock Paper Scissors"
            description="React based rock papers scissors against the computer. The assets and style are not mine, it belong to frontendmentor.io, credits to them" projectPath={"https://mateomor.github.io/Rock-paper-scissors/"}
            imgPath="/rps-preview.png"
          />
          <Card name="Fluid simulator" description="A C++ fluid simulator made in qt framework as an university project, simulation based in github.com/lucas-schuermann/mueller-sph. openGL implementations, UI and interactive functions was created by me and my classmate" projectPath={"https://github.com/MateoMor/Fluid-Simulator"} imgPath="/fluid-simulator.jpg" />
        </div>
        {/*<a
          href="hello"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
  </a>*/}
      </div>
    </div>
  );
};

export default Projects;
