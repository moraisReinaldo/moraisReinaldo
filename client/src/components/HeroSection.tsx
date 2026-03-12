import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663430955344/AtChUsa6HxJw2P4K9fsZ6j/hero_bg_7c2762b4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 flex items-center justify-between min-h-screen">
        <div className="w-full md:w-1/2 pr-0 md:pr-12">
          {/* Eyebrow */}
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
              Desenvolvedor Full Stack
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Transformando ideias em código de qualidade
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            Especializado em React, Spring Boot, Flutter e SQL. Pronto para impulsionar seu projeto com soluções robustas e inovadoras em regime home office.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => onNavigate("projects")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Ver Projetos
              <ArrowRight size={20} />
            </button>
            <a
              href="/curriculo_reinaldo.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Baixar CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 font-medium">Conecte-se:</span>
            <a
              href="mailto:rhestudante07@gmail.com"
              className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
              title="E-mail"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/reinaldo-henrique-morais-a9b019240"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/moraisReinaldo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Right Side - Decorative Element */}
        <div className="hidden md:block w-1/2 h-full absolute right-0 top-0 pointer-events-none">
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-15 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
