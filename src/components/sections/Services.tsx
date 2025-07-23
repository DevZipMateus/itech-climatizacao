import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart2, FileSearch, BookOpen, Building, Calendar } from 'lucide-react';
const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const services = [{
    icon: <FileText className="h-8 w-8 text-blue-500" />,
    title: 'Contabilidade Empresarial',
    description: 'Escrituração contábil completa, análise de balanços, demonstrações financeiras e elaboração de relatórios gerenciais personalizados.'
  }, {
    icon: <BarChart2 className="h-8 w-8 text-blue-500" />,
    title: 'Consultoria Fiscal e Tributária',
    description: 'Planejamento tributário estratégico, análise de enquadramento fiscal, recuperação de impostos e assessoria em obrigações acessórias.'
  }, {
    icon: <Building className="h-8 w-8 text-blue-500" />,
    title: 'Abertura e Legalização',
    description: 'Assessoria completa para constituição de empresas, alterações contratuais, registro em órgãos competentes e obtenção de licenças.'
  }, {
    icon: <BookOpen className="h-8 w-8 text-blue-500" />,
    title: 'Departamento Pessoal',
    description: 'Administração de folha de pagamento, admissões e demissões, férias, 13º salário, encargos sociais e obrigações trabalhistas.'
  }, {
    icon: <FileSearch className="h-8 w-8 text-blue-500" />,
    title: 'Auditoria e Compliance',
    description: 'Revisão e análise de procedimentos contábeis, fiscais e trabalhistas, identificação de riscos e implementação de controles internos.'
  }, {
    icon: <Calendar className="h-8 w-8 text-blue-500" />,
    title: 'BPO Financeiro',
    description: 'Terceirização da gestão financeira, controle de contas a pagar e receber, conciliação bancária e fluxo de caixa.'
  }];
  return <section ref={sectionRef} id="services" className="bg-slate-50 py-[23px]">
      <div className="section-container">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{
        opacity: 0,
        y: 20
      }} animate={isVisible ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.7
      }}>
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Nossos Serviços
          </div>
          <h2 className="section-title">Soluções Completas para sua Empresa</h2>
          <p className="section-subtitle">
            Oferecemos uma ampla gama de serviços contábeis e financeiros para atender às necessidades específicas do seu
            negócio, permitindo que você se concentre no que realmente importa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={index} className="bg-white rounded-xl p-6 shadow-subtle card-hover" initial={{
          opacity: 0,
          y: 20
        }} animate={isVisible ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.7,
          delay: 0.2 + index * 0.1
        }}>
              <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>)}
        </div>

        <motion.div className="mt-16 text-center" initial={{
        opacity: 0,
        y: 20
      }} animate={isVisible ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.7,
        delay: 0.8
      }}>
          <a href="#contact" className="btn-primary">
            Solicite um Orçamento
          </a>
        </motion.div>
      </div>
    </section>;
};
export default Services;