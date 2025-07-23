
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, BarChart3 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Missão',
      description:
        'Fornecer serviços contábeis de alta qualidade que capacitem nossos clientes a tomar decisões financeiras informadas e estratégicas para o crescimento sustentável de seus negócios.',
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: 'Visão',
      description:
        'Ser reconhecidos como referência em soluções contábeis inovadoras, construindo parcerias duradouras baseadas em confiança, excelência e resultados comprovados.',
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
      title: 'Valores',
      description:
        'Integridade, excelência, inovação, compromisso com o cliente e responsabilidade são os pilares que orientam todas as nossas ações e relacionamentos.',
    },
  ];

  const teamMembers = [
    { name: "Ana Silva", role: "Contadora Sênior", initials: "AS" },
    { name: "Carlos Mendes", role: "Especialista Tributário", initials: "CM" },
    { name: "Juliana Alves", role: "Consultora Fiscal", initials: "JA" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section ref={sectionRef} id="about" className="py-16 bg-white">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Sobre Nós
          </div>
          <h2 className="section-title">Quem Somos</h2>
          <p className="section-subtitle">
            Há mais de 15 anos no mercado, oferecemos soluções contábeis completas e personalizadas para empresas de
            todos os portes e segmentos. Nossa equipe é formada por profissionais altamente qualificados e em constante
            atualização.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-subtle card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-slate-50 rounded-2xl overflow-hidden shadow-subtle"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Nossa Equipe</h3>
              <p className="text-slate-600 mb-6">
                Contamos com especialistas em diversas áreas da contabilidade, prontos para atender às necessidades
                específicas do seu negócio com dedicação e excelência.
              </p>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  Profissionais certificados e em constante atualização
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  Atendimento personalizado e próximo
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  Foco em resultados e crescimento sustentável
                </li>
              </ul>
              
              <div className="flex space-x-3 mt-2">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="border-none shadow-none bg-transparent">
                    <CardContent className="p-2">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-14 w-14 border-2 border-blue-100 mb-2">
                          <AvatarFallback className="bg-blue-100 text-blue-500 font-medium">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{member.name}</span>
                        <span className="text-xs text-slate-500">{member.role}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-blue-100 h-64 md:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/team.jpg')] bg-cover bg-center opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
