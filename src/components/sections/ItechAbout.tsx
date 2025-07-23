
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Target } from 'lucide-react';

const ItechAbout = () => {
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

  const values = [
    {
      icon: <Award className="h-6 sm:h-8 w-6 sm:w-8 text-brand-primary" />,
      title: 'Qualidade',
      description: 'Comprometimento com a excelência em todos os serviços prestados'
    },
    {
      icon: <Users className="h-6 sm:h-8 w-6 sm:w-8 text-brand-primary" />,
      title: 'Confiança',
      description: 'Construímos laços duradouros com nossos clientes'
    },
    {
      icon: <Heart className="h-6 sm:h-8 w-6 sm:w-8 text-brand-primary" />,
      title: 'Satisfação',
      description: 'Nossa alegria é ver nossos clientes felizes e satisfeitos'
    },
    {
      icon: <Target className="h-6 sm:h-8 w-6 sm:w-8 text-brand-primary" />,
      title: 'Garantia',
      description: 'Oferecemos garantia em todos os nossos serviços'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="itech-badge mb-4 sm:mb-6">
            Nossa História
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Sobre a <span className="text-transparent bg-clip-text bg-gradient-itech">ITECH</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* História - Melhor responsividade */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Quando criei a <strong className="text-brand-primary">ITECH CLIMATIZAÇÃO</strong>, 
                minha missão era apenas fazer diferença na área da climatização, com um atendimento 
                diferente, serviço com qualidade e garantia no serviço, algo não muito comum em 
                relação aos outros profissionais.
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Minha alegria é ver meu cliente feliz, satisfeito com o conforto que proporcionamos 
                a ele, em saber que a partir daquele trabalho bem feito, criei laços de confiança 
                e uma parceria.
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Comecei como ajudante em uma empresa que prestava serviço na área de climatização 
                e refrigeração. Por lá aprendi muito, sofri muito também, sempre ouvindo dos 
                colegas de profissão que meu lugar não era ali, que isso não era pra mim.
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Minha esposa sempre me incentivava a seguir em frente, sempre levantando minha 
                cabeça. Depois de muito tempo nessa situação, resolvi seguir em frente, busquei 
                conhecimento, procurando sempre o melhor para oferecer aos meus clientes.
              </p>
              
              <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-4 sm:p-6 rounded-xl text-white">
                <p className="text-base sm:text-lg font-semibold leading-relaxed">
                  "Hoje posso dizer que alcancei algo que nunca imaginaria na minha vida. 
                  Hoje tenho pessoas que acreditam no meu trabalho, que confiam em mim."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Valores - Melhor responsividade */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Nossos Valores
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Somos a ITECH CLIMATIZAÇÃO, padrão e qualidade é o que sempre 
                  oferecemos a todos.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="itech-card text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="bg-brand-light w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      {value.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ItechAbout;
