const projects = [
    { title: 'Project 1', description: 'E-commerce website' },
    { title: 'Project 2', description: 'Portfolio website' },
    { title: 'Project 3', description: 'Blog platform' },
  ];
  
  function Projects() {
    return (
      <section>
        <h2>Our Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Projects;
  