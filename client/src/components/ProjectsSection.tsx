import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Sistema de Portaria - Condomínio do Porto",
      description:
        "Sistema completo de portaria para controle de acesso e segurança. Desenvolvido com Java e SQL, oferecendo funcionalidades robustas para gerenciamento de residentes e visitantes.",
      technologies: ["Java", "SQL", "Spring Boot"],
      category: "fullstack",
      github: "https://github.com/moraisReinaldo/Portaria_Condominio_do_Porto",
      year: "2023-2024",
    },
    {
      id: 2,
      title: "Sistema de Portaria - Top Ville",
      description:
        "Aplicação de portaria para condomínio Top Ville com funcionalidades avançadas de controle de acesso. Implementado em Java com integração de banco de dados SQL.",
      technologies: ["Java", "SQL", "Backend"],
      category: "fullstack",
      github: "https://github.com/moraisReinaldo/Portaria_condominio_TopVille",
      year: "2023-2024",
    },
    {
      id: 3,
      title: "YouTube Downloader",
      description:
        "Aplicação Python para download de vídeos do YouTube. Ferramenta útil com interface simples e funcionalidades de conversão de qualidade.",
      technologies: ["Python", "CLI"],
      category: "backend",
      github: "https://github.com/moraisReinaldo/YoutubeDowloader",
      year: "2023",
    },
    {
      id: 4,
      title: "Defesa em Foco - App Flutter",
      description:
        "Aplicativo mobile em Flutter para gestão e informações de Defesa Civil. Desenvolvido com suporte multiplataforma (iOS, Android, Web), oferecendo interface intuitiva e funcionalidades robustas para acesso a informações de defesa e segurança.",
      technologies: ["Flutter", "Dart", "Mobile"],
      category: "mobile",
      github: "https://github.com/moraisReinaldo/Defesa",
      year: "2024-2025",
    },
    {
      id: 5,
      title: "Análise de Similaridade - Bragantec",
      description:
        "Projeto de análise de similaridade desenvolvido em Java. Implementa algoritmos de comparação e processamento de dados.",
      technologies: ["Java", "Análise de Dados"],
      category: "backend",
      github: "https://github.com/moraisReinaldo/Similaridade_Na_Bragantec",
      year: "2023",
    },
  ];

  const filters = [
    { label: "Todos", value: "all" },
    { label: "Full Stack", value: "fullstack" },
    { label: "Backend", value: "backend" },
    { label: "Frontend", value: "frontend" },
    { label: "Mobile", value: "mobile" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 text-center">
          Projetos Destacados
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Seleção de projetos que demonstram minhas habilidades em desenvolvimento Full Stack
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className="p-8 pb-6 border-b border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.year}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors w-full"
                >
                  <Github size={18} />
                  Ver no GitHub
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
