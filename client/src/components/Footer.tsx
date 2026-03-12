export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Copyright */}
          <div>
            <p className="text-sm">
              © {currentYear} Reinaldo Henrique Morais. Todos os direitos reservados.
            </p>
          </div>

          {/* Center - Links */}
          <nav className="flex items-center gap-8">
            <a
              href="#about"
              className="text-sm hover:text-white transition-colors"
            >
              Sobre
            </a>
            <a
              href="#skills"
              className="text-sm hover:text-white transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-white transition-colors"
            >
              Projetos
            </a>
            <a
              href="#experience"
              className="text-sm hover:text-white transition-colors"
            >
              Experiência
            </a>
          </nav>

          {/* Right - Design Credit */}
          <div className="text-sm text-gray-500">
            Desenvolvido com React + Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
