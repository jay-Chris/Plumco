// Projects.jsx
// Portfolio section showcasing completed projects
// Demonstrates work quality and builds customer confidence

const Projects = () => {
  // Array of completed project data
  const projects = [
    {
      id: 1,
      title: 'Commercial Kitchen Plumbing',
      category: 'Commercial',
      image: '🏢',
      description: 'Complete plumbing system installation for restaurant kitchen',
    },
    {
      id: 2,
      title: 'Bathroom Renovation',
      category: 'Residential',
      image: '🛁',
      description: 'Full bathroom remodel with new fixtures and tile work',
    },
    {
      id: 3,
      title: 'Water Heater Installation',
      category: 'Residential',
      image: '💧',
      description: 'Energy-efficient water heater replacement and connection',
    },
    {
      id: 4,
      title: 'Pipe Replacement Project',
      category: 'Commercial',
      image: '🔧',
      description: 'Large-scale pipe replacement for office building',
    },
    {
      id: 5,
      title: 'Garden Fountain Installation',
      category: 'Residential',
      image: '⛲',
      description: 'Custom outdoor fountain plumbing and landscaping integration',
    },
    {
      id: 6,
      title: 'Emergency Sewage Repair',
      category: 'Emergency',
      image: '🚨',
      description: 'Rapid response and professional sewage line repair',
    },
  ];

  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">
            View examples of our completed work and satisfied clients
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className="filter-btn"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Image Area */}
              <div className="project-image">
                {project.image}
              </div>

              {/* Project Info */}
              <div className="project-info">
                <span className="project-category">
                  {project.category}
                </span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href="#" className="project-link">
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
