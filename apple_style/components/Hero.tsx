'use client';

export default function Hero() {
  return (
    <section className="relative bg-apple-light">
      <div className="apple-section flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-apple-dark">
          Mohammed Saabiq Saha
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-500 max-w-3xl">
          founder • data scientist • student
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a 
            href="https://www.linkedin.com/in/mohammed-saabiq-saha-abdulai-099b00257/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="apple-button flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            LinkedIn
          </a>
          <a 
            href="https://github.com/saabiqsaha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="apple-button flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
            GitHub
          </a>
          <a 
            href="https://docs.google.com/document/d/1PWPilUncfFdPk-eiWF1bSf-M4U1zv3W2/edit?usp=sharing&ouid=101659685143493040682&rtpof=true&sd=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="apple-button flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-2 17H8v-2h4v2zm6-4H6v-2h12v2zm0-4H6V9h12v2z" />
            </svg>
            Resume
          </a>
        </div>
        
        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-apple-dark hover:text-apple-blue transition-colors">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 