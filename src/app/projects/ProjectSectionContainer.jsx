import React from 'react';

function ProjectSectionContainer({children, heading, desc, className }) {
    if (!desc) return null;
  return (
    <div className={className}>
      <h2>{heading}</h2>
      <p>{desc}</p>
    {children}
    </div>
  );
}

export default ProjectSectionContainer;
