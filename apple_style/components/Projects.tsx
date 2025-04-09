'use client';

export default function Projects() {
  return (
    <section id="projects" className="bg-apple-gray">
      <div className="apple-section">
        <div className="text-center mb-16">
          <h2 className="apple-heading">Projects I've Worked On</h2>
          <p className="apple-subheading max-w-3xl mx-auto">
            Highlighting some of my key technical projects and contributions
          </p>
        </div>
        
        <div className="space-y-24">
          {/* Project 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-semibold text-apple-dark mb-4">Nasari AI</h3>
              <p className="text-lg text-gray-600 mb-6">
                I am developing a machine learning model to assist medical professionals
                in detecting brain tumors, using YOLOv8 as the base object detection model.
                This project allows me to refine my skills in data annotation, model training,
                and evaluation, aiming to enhance diagnostic accuracy and support healthcare 
                professionals in early tumor detection.
              </p>
              <a 
                href="https://ai.nasari.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="apple-button inline-flex items-center"
              >
                Check it out
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white p-4 rounded-2xl shadow-apple">
                <img 
                  src="https://via.placeholder.com/800x600?text=Nasari+AI" 
                  alt="Nasari AI" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="bg-white p-4 rounded-2xl shadow-apple">
                <img 
                  src="https://via.placeholder.com/800x600?text=GSU+Hub" 
                  alt="Grambling State Hub" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            <div className="order-2">
              <h3 className="text-3xl font-semibold text-apple-dark mb-4">Grambling State Hub (gsuhub)</h3>
              <p className="text-lg text-gray-600 mb-6">
                GSU Hub is a comprehensive platform I created for Grambling State University students. 
                It serves as a marketplace where students can buy and sell items, find tutoring services, 
                and connect with resources on campus. This project demonstrates my full-stack development 
                skills and dedication to improving the student experience.
              </p>
              <a 
                href="https://gsuhub.com/about" 
                target="_blank" 
                rel="noopener noreferrer"
                className="apple-button inline-flex items-center"
              >
                Check it out
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 