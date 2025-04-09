'use client';

export default function FounderPortfolio() {
  const projects = [
    {
      id: 1,
      name: "Nasari Farm",
      description: "I founded nasari. This is a platform built to support small scale farmers by giving them access to larger markets. The platform also gave landowners the opportunity to rent out their land annually to commercial farmers for a fee.",
      image: "https://via.placeholder.com/600x400?text=Nasari+Farm",
      link: "https://www.nasari.com"
    },
    {
      id: 2,
      name: "Globin Suite",
      description: "I started globin as part of my efforts to build tools for disease diagnosis in remote areas. Globin suite is a set of AI models that are built to be lightweight to assist medical professionals in rural areas with the diagnosis of malaria and breast cancer.",
      image: "https://via.placeholder.com/600x400?text=Globin+Suite",
      link: "https://www.globinsuite.com"
    },
    {
      id: 3,
      name: "Rhizone",
      description: "Rhizone is a project I co-founded to advance the UN's SDG 4, ensuring inclusive and quality learning opportunities for all. It connects students with peer tutors, real-time Q&A, and discussion forums to foster collaborative learning.",
      image: "https://via.placeholder.com/600x400?text=Rhizone",
      link: "https://calm-beach-0265bc010.5.azurestaticapps.net/"
    }
  ];

  return (
    <section id="founder-portfolio" className="bg-apple-light">
      <div className="apple-section">
        <div className="text-center mb-16">
          <h2 className="apple-heading">My Founder Portfolio</h2>
          <p className="apple-subheading max-w-3xl mx-auto">
            Ventures and initiatives I've founded or co-founded
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-apple hover:shadow-apple-hover transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-apple-dark mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button inline-block"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 