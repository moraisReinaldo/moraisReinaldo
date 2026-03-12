import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "E-mail",
      value: "rhestudante07@gmail.com",
      href: "mailto:rhestudante07@gmail.com",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 99689-9390",
      href: "tel:+5511996899390",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Reinaldo Henrique Morais",
      href: "https://www.linkedin.com/in/reinaldo-henrique-morais-a9b019240",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "moraisReinaldo",
      href: "https://github.com/moraisReinaldo",
      color: "bg-gray-100 text-gray-800",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Estou sempre aberto a novas oportunidades e desafios. Se você tem um projeto interessante ou gostaria de conversar sobre desenvolvimento, não hesite em entrar em contato!
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block p-8 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-lg ${method.color}`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {method.label}
                    </h3>
                    <p className="text-gray-600 group-hover:text-primary transition-colors break-all">
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="mailto:rhestudante07@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <Mail size={24} />
            Enviar E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
