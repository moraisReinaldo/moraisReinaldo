import { MapPin, Mail, Phone, Globe } from "lucide-react";

export default function AboutSection() {
  const infoItems = [
    {
      icon: Mail,
      label: "E-mail",
      value: "rhestudante07@gmail.com",
      href: "mailto:rhestudante07@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 99689-9390",
      href: "tel:+5511996899390",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Joanópolis, SP",
      href: null,
    },
    {
      icon: Globe,
      label: "Disponibilidade",
      value: "Home Office",
      href: null,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Sobre Mim
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sou desenvolvedor Full Stack com paixão por criar soluções tecnológicas inovadoras. Com experiência em Java, React, Flutter e SQL, já contribuí para projetos desafiadores como sistemas de portaria e aplicações web robustas.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Atualmente cursando Análise e Desenvolvimento de Sistemas no 5º semestre, com formação técnica em Informática pelo IFSP. Busco oportunidades em regime home office para aplicar meus conhecimentos e crescer continuamente como profissional.
            </p>

            {/* Languages */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Idiomas
              </h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-gray-700">Português (Nativo)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-gray-700">Inglês (Intermediário/Avançado)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-4">
              {infoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg text-primary mt-1">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 font-medium">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-900 font-medium hover:text-primary transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
