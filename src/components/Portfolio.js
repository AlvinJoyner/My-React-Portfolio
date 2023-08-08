import React from "react";
import Project from "./project";


const projects= [
    {
        id: 0,
    title: "",
    languages: "HTML, CSS, JavaScript",
    image: "",
    description: "",
    repo: "",
    live: "",
    }
]


function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      {/* Render the Project component and pass the projects array as a prop */}
      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;