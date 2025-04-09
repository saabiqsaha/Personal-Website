'use client';

export default function About() {
  return (
    <section id="about" className="bg-apple-gray">
      <div className="apple-section">
        <div className="text-center mb-16">
          <h2 className="apple-heading">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center lg:col-span-1">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Mohammed Saabiq Saha" 
              className="rounded-full w-60 h-60 object-cover shadow-apple"
            />
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed">
              👋 My name is Saabiq. I am an international student at Grambling State University studying Computer Science.
              I'm on a journey to build the world's largest reservoir of clean medical data and light-weight tools for disease diagnosis in remote areas.
            </p>
            <p className="text-lg leading-relaxed">
              I have worked on a lot of projects ranging from AI tools 
              <a href="https://ai.nasari.tech/" target="_blank" rel="noopener noreferrer" className="text-apple-blue hover:underline"> nasari.ai</a> to marketplaces 
              <a href="https://gsuhub.com/about" target="_blank" rel="noopener noreferrer" className="text-apple-blue hover:underline"> gsuhub</a> for fellow students on my campus.
              I have some experience in building RAG models and their deployment.
            </p>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-semibold mb-8">Skills & Technologies</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-apple hover:shadow-apple-hover transition-shadow">
                  <h4 className="text-xl font-medium mb-4 text-apple-dark">Data Science</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center">
                      <i className="devicon-python-plain text-4xl text-blue-500"></i>
                      <span className="mt-2 text-sm">Python</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <i className="devicon-tensorflow-original text-4xl text-orange-500"></i>
                      <span className="mt-2 text-sm">TensorFlow</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-apple hover:shadow-apple-hover transition-shadow">
                  <h4 className="text-xl font-medium mb-4 text-apple-dark">Web Frontend</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center">
                      <i className="devicon-react-original text-4xl text-blue-400"></i>
                      <span className="mt-2 text-sm">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <i className="devicon-bootstrap-plain text-4xl text-purple-500"></i>
                      <span className="mt-2 text-sm">Bootstrap</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-apple hover:shadow-apple-hover transition-shadow">
                  <h4 className="text-xl font-medium mb-4 text-apple-dark">Backend</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center">
                      <i className="devicon-nodejs-plain text-4xl text-green-500"></i>
                      <span className="mt-2 text-sm">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <i className="devicon-firebase-plain text-4xl text-yellow-500"></i>
                      <span className="mt-2 text-sm">Firebase</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-apple hover:shadow-apple-hover transition-shadow">
                  <h4 className="text-xl font-medium mb-4 text-apple-dark">Communities</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center">
                      <i className="devicon-slack-plain text-4xl text-purple-400"></i>
                      <span className="mt-2 text-sm">Slack</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <i className="devicon-github-original text-4xl"></i>
                      <span className="mt-2 text-sm">GitHub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 