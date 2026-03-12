import { Code2, Database, Smartphone, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Linguagens",
      skills: ["Java", "JavaScript", "TypeScript", "Dart", "Python"],
    },
    {
      icon: Wrench,
      title: "Frameworks & Bibliotecas",
      skills: ["Spring Boot", "React", "Flutter", "Django", "Node.js"],
    },
    {
      icon: Database,
      title: "Banco de Dados",
      skills: ["SQL", "MySQL", "PostgreSQL", "Firebase"],
    },
    {
      icon: Smartphone,
      title: "Ferramentas & Outros",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "REST APIs"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 text-center">
          Habilidades Técnicas
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Stack completo de tecnologias modernas para desenvolvimento Full Stack
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 text-primary rounded-lg">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Certificações
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">
                  JavaScript Essentials 1
                </p>
                <p className="text-sm text-gray-600">
                  Cisco Networking Academy (2024)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">
                  Introduction to Cybersecurity
                </p>
                <p className="text-sm text-gray-600">
                  Cisco Networking Academy (2024)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">
                  Monitoria de Programação
                </p>
                <p className="text-sm text-gray-600">
                  IFSP Bragança Paulista (2023)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">
                  Palestrante Workshop Python
                </p>
                <p className="text-sm text-gray-600">
                  IFSP Bragança Paulista (2021)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
