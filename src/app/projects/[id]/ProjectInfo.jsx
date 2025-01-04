import React from "react";

function ProjectInfo({project}) {
  return <>      <h2>{project.title}</h2>
  <p>{project.description}</p>

  <div className="info-boxed">
    <ul>
      <li>
        <span>location</span>
        {project.location}
      </li>
      <li>
        <span>client</span>
        {project.client}
      </li>
      <li>
        <span>date</span>
        {project.date}
      </li>
      <li>
        <span>type</span>
        {project.type}
      </li>
      <li>
        <span>Service</span>
        {project.services}
      </li>
    </ul>
  </div></>;
}

export default ProjectInfo;
