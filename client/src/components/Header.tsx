import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Projetos", id: "projects" },
    { label: "Habilidades", id: "skills" },
    { label: "Experiência", id: "experience" },
    { label: "Contato", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo/Name */}
        <button
          onClick={() => handleNavClick("home")}
          className="text-xl font-display font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Reinaldo
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="/curriculo_reinaldo.pdf"
          download
          className="hidden md:inline-block px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Baixar CV
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-sm font-medium text-gray-600 hover:text-primary transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/curriculo_reinaldo.pdf"
              download
              className="inline-block px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors text-center"
            >
              Baixar CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
