import React from 'react';

function ProjectSectionContainer({children, heading, desc, className }) {
    if (!desc) return null;
  return (
    <div className={className}>
      <div className='inner-container'>
      <h2>{heading}</h2>
      <p>{desc}</p>
      </div>
      
    {children}
    </div>
  );
}

export default ProjectSectionContainer;
