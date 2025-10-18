export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center gap-8 mb-12">
          {/* Personal Information */}
          <div className="text-center">
            <div className="mb-2">
              <h1 className="text-3xl lg:text-4xl font-mono font-bold mb-1 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                David Ortega
              </h1>
              <h2 className="text-xl lg:text-2xl font-mono font-bold mb-2 text-cyan-300">
                {'>'} DESARROLLADOR_
              </h2>
              <p className="text-lg text-gray-300 mb-2 font-mono">
                [22] Guatemala • Ingeniería en Sistemas
              </p>
              <p className="text-sm text-gray-400 mb-1 font-mono">
                Universidad Mariano Gálvez • Décimo Ciclo
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-gray-800/80 text-cyan-300 rounded-sm text-xs border border-cyan-500/30 font-mono">
                  Enfoque: UI/UX
                </span>
                <span className="px-3 py-1 bg-gray-800/80 text-green-300 rounded-sm text-xs border border-green-500/30 font-mono">
                  Inglés: Básico
                </span>
                <span className="px-3 py-1 bg-gray-800/80 text-purple-300 rounded-sm text-xs border border-purple-500/30 font-mono">
                  7 Tecnologías
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4 text-cyan-400 text-center lg:text-left">
            {'>'} SOBRE_MÍ
          </h2>
          <div className="max-w-3xl mx-auto lg:mx-0">
            <p className="text-sm text-gray-300 leading-relaxed text-center lg:text-left font-mono border-l-2 border-cyan-500/30 pl-4">
              Desarrollador junior enfocado en sistemas de diseño UI/UX. Actualmente cursando el décimo ciclo de Ingeniería en Sistemas en la Universidad Mariano Gálvez de Guatemala. Apasionado por crear experiencias de usuario intuitivas mediante desarrollo frontend moderno.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4 text-green-400 text-center lg:text-left">
            {'>'} HABILIDADES
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            <span className="px-3 py-2 bg-gray-800/60 text-cyan-300 text-xs font-mono text-center border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-200">
              Node.js
            </span>
            <span className="px-3 py-2 bg-gray-800/60 text-green-300 text-xs font-mono text-center border border-green-500/20 hover:border-green-400/50 transition-all duration-200">
              NestJS
            </span>
            <span className="px-3 py-2 bg-gray-800/60 text-blue-300 text-xs font-mono text-center border border-blue-500/20 hover:border-blue-400/50 transition-all duration-200">
              React
            </span>
            <span className="px-3 py-2 bg-gray-800/60 text-purple-300 text-xs font-mono text-center border border-purple-500/20 hover:border-purple-400/50 transition-all duration-200">
              Next.js
            </span>
            <span className="px-3 py-2 bg-gray-800/60 text-red-300 text-xs font-mono text-center border border-red-500/20 hover:border-red-400/50 transition-all duration-200">
              Java
            </span>
            <span className="px-3 py-2 bg-gray-800/60 text-yellow-300 text-xs font-mono text-center border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-200">
              JavaScript
            </span>
            <span className="px-3 py-2 bg-gray-800/60 text-pink-300 text-xs font-mono text-center border border-pink-500/20 hover:border-pink-400/50 transition-all duration-200">
              Spring Boot
            </span>
          </div>
        </div>


        {/* Academic Research Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-mono font-bold mb-4 text-orange-400 text-center lg:text-left">
            {'>'} INVESTIGACIONES_
          </h2>
          <div className="bg-gray-800/40 backdrop-blur-sm border border-orange-500/20 p-6">
            <p className="text-gray-300 text-sm mb-4 font-mono text-center lg:text-left">
              Trabajos académicos del curso de Aseguramiento de la Calidad de Software
            </p>
            <div className="text-center lg:text-left">
              <a
                href="/proyectos"
                className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-300 border border-orange-500/30 hover:bg-orange-500/30 hover:border-orange-400/50 transition-all duration-200 font-mono text-sm"
              >
                Ver Investigaciones Académicas →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
