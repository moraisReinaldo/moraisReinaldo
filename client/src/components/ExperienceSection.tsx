import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Agente de Defesa Civil",
      company: "Defesa Civil",
      period: "Atual",
      description:
        "Atuação em gestão de riscos e resposta a emergências, desenvolvendo habilidades de organização e resolução de problemas em ambientes de alta pressão.",
      isCurrent: true,
    },
    {
      id: 2,
      type: "work",
      title: "Estagiário em Suporte e Desenvolvimento",
      company: "Prefeitura de Joanópolis",
      period: "2023-2024",
      description:
        "Suporte técnico a usuários e sistemas, garantindo a continuidade das operações. Participação no desenvolvimento de soluções tecnológicas para otimização de serviços públicos.",
      isCurrent: false,
    },
    {
      id: 3,
      type: "work",
      title: "Desenvolvedor Full Stack",
      company: "Condomínio Top Ville",
      period: "2023-2024",
      description:
        "Atuação no desenvolvimento de sistemas de portaria, com foco em Java e SQL. Colaboração na análise de requisitos e na entrega de soluções que atendiam às necessidades do cliente.",
      isCurrent: false,
    },
    {
      id: 4,
      type: "work",
      title: "Desenvolvedor Full Stack",
      company: "Condomínio do Porto",
      period: "2023",
      description:
        "Desenvolvimento e manutenção de sistemas de portaria, utilizando Java e SQL. Implementação de funcionalidades para otimização de processos de segurança e controle de acesso.",
      isCurrent: false,
    },
    {
      id: 5,
      type: "education",
      title: "Análise e Desenvolvimento de Sistemas",
      company: "Instituto Federal de São Paulo (IFSP)",
      period: "2023-2025 (5º semestre)",
      description:
        "Cursando Análise e Desenvolvimento de Sistemas com foco em desenvolvimento de software, arquitetura de sistemas e metodologias ágeis.",
      isCurrent: true,
    },
    {
      id: 6,
      type: "education",
      title: "Técnico em Informática",
      company: "Instituto Federal de São Paulo (IFSP)",
      period: "Concluído",
      description:
        "Formação técnica em Informática com ênfase em programação, redes e suporte técnico.",
      isCurrent: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 text-center">
          Experiência Profissional
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Trajetória profissional e acadêmica em desenvolvimento de software
        </p>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.type === "work" ? Briefcase : GraduationCap;
            const isLast = index === experiences.length - 1;

            return (
              <div key={exp.id} className="relative mb-8 last:mb-0">
                {/* Timeline Line */}
                {!isLast && (
                  <div className="absolute left-8 top-20 w-1 h-12 bg-gradient-to-b from-primary to-blue-200" />
                )}

                {/* Timeline Item */}
                <div className="flex gap-6">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                        exp.isCurrent
                          ? "bg-primary border-primary text-white shadow-lg"
                          : "bg-blue-50 border-primary text-primary"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.isCurrent && (
                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full whitespace-nowrap">
                          ATUAL
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 mb-3 font-medium">
                      {exp.period}
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
