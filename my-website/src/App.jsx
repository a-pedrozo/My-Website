import './App.css'
import profilePhoto from './assets/profilephoto2.jpg'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Social Media Links - Top Left */}
      <div className="fixed top-3 left-3 z-50 flex space-x-2">
        <a 
          href="https://linkedin.com/in/augustine-pedrozo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 text-gray-600 hover:text-blue-600 border border-gray-200/50"
          aria-label="LinkedIn"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a 
          href="https://github.com/a-pedrozo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 text-gray-600 hover:text-gray-900 border border-gray-200/50"
          aria-label="GitHub"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a 
          href="https://instagram.com/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 text-gray-600 hover:text-pink-600 border border-gray-200/50"
          aria-label="Instagram"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Section */}
          <div className="text-center mb-12 profile-section">
            <div className="relative inline-block mb-6 group">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl ring-2 ring-white/80 ring-offset-2 ring-offset-slate-50 group-hover:ring-blue-200 transition-all duration-300">
                <img 
                  src={profilePhoto} 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-3 tracking-tight">
              Your Name
            </h1>
            <p className="text-xl text-slate-600 mb-6 font-medium">
              Software Developer & Creative Problem Solver
            </p>
            <div className="flex justify-center space-x-6 text-sm text-slate-500">
              <span className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200/50">
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                Location
              </span>
              <span className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200/50">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                Available for work
              </span>
            </div>
          </div>

          {/* Biography Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-10 mb-16 biography-section">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-8 text-center">About Me</h2>
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
              <p className="mb-8 text-lg">
                Welcome to my digital space! I'm a passionate software developer with a love for creating 
                innovative solutions and bringing ideas to life through code. With a strong foundation in 
                modern web technologies, I enjoy tackling complex challenges and turning them into elegant, 
                user-friendly applications.
              </p>
              <p className="mb-8 text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in continuous learning 
                and staying up-to-date with the latest trends in technology.
              </p>
              <p className="text-lg">
                I'm always excited to collaborate on interesting projects and connect with fellow developers. 
                Feel free to reach out if you'd like to work together or just have a chat about technology!
              </p>
            </div>
          </div>

          {/* Skills/Interests Section */}
          <div className="grid lg:grid-cols-2 gap-10 mb-16 skills-section">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-8">Technical Skills</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-slate-700 font-medium">JavaScript/TypeScript</span>
                    <span className="text-slate-500 font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-slate-700 font-medium">React</span>
                    <span className="text-slate-500 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-slate-700 font-medium">Node.js</span>
                    <span className="text-slate-500 font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-slate-700 font-medium">Python</span>
                    <span className="text-slate-500 font-semibold">75%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-8">Interests</h3>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-semibold shadow-sm border border-blue-200/50 hover:shadow-md transition-shadow">Web Development</span>
                <span className="px-6 py-3 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 rounded-full text-sm font-semibold shadow-sm border border-emerald-200/50 hover:shadow-md transition-shadow">Machine Learning</span>
                <span className="px-6 py-3 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 rounded-full text-sm font-semibold shadow-sm border border-purple-200/50 hover:shadow-md transition-shadow">UI/UX Design</span>
                <span className="px-6 py-3 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 rounded-full text-sm font-semibold shadow-sm border border-amber-200/50 hover:shadow-md transition-shadow">Open Source</span>
                <span className="px-6 py-3 bg-gradient-to-r from-rose-100 to-rose-200 text-rose-800 rounded-full text-sm font-semibold shadow-sm border border-rose-200/50 hover:shadow-md transition-shadow">Mobile Apps</span>
                <span className="px-6 py-3 bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 rounded-full text-sm font-semibold shadow-sm border border-indigo-200/50 hover:shadow-md transition-shadow">Cloud Computing</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center cta-section">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-12">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-6">Let's Connect!</h3>
              <p className="text-slate-600 mb-10 text-lg max-w-2xl mx-auto">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Let's create something amazing together!
              </p>
              <a 
                href="mailto:your.email@example.com" 
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
