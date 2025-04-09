'use client';

export default function Footer() {
  return (
    <footer className="bg-apple-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-2xl font-bold">Mohammed Saabiq Saha</h2>
            <p className="text-gray-300">
              Building solutions for a better world
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/mohammed-saabiq-saha-abdulai-099b00257/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
              <a href="https://github.com/saabiqsaha" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="mailto:saabiqsaha@gmail.com" className="text-gray-300 hover:text-white">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#about" className="text-base text-gray-300 hover:text-white">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#founder-portfolio" className="text-base text-gray-300 hover:text-white">
                    Founder Portfolio
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-base text-gray-300 hover:text-white">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                My Ventures
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="https://www.nasari.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 hover:text-white">
                    Nasari Farm
                  </a>
                </li>
                <li>
                  <a href="https://www.globinsuite.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 hover:text-white">
                    Globin Suite
                  </a>
                </li>
                <li>
                  <a href="https://calm-beach-0265bc010.5.azurestaticapps.net/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 hover:text-white">
                    Rhizone
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Mohammed Saabiq Saha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 