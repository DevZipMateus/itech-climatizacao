
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ItechTestimonials = () => {
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

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'Campo Maior - PI',
      text: 'Excelente atendimento! O técnico foi muito profissional e explicou todo o processo. Meu ar condicionado está funcionando perfeitamente. Recomendo!',
      rating: 5,
      service: 'Manutenção Preventiva'
    },
    {
      name: 'João Santos',
      location: 'Teresina - PI',
      text: 'Instalação impecável! Equipe pontual, educada e muito competente. O serviço foi realizado com toda a qualidade prometida. Parabéns!',
      rating: 5,
      service: 'Instalação'
    },
    {
      name: 'Ana Costa',
      location: 'Campo Maior - PI',
      text: 'Serviço de higienização excelente! Notei a diferença imediatamente na qualidade do ar. Muito satisfeita com o resultado e atendimento.',
      rating: 5,
      service: 'Higienização'
    },
    {
      name: 'Carlos Oliveira',
      location: 'Altos - PI',
      text: 'Profissionalismo exemplar! Rapidez no atendimento, preço justo e garantia do serviço. Já indiquei para vários amigos.',
      rating: 5,
      service: 'Reparo'
    },
    {
      name: 'Luciana Ferreira',
      location: 'Campo Maior - PI',
      text: 'Atendimento diferenciado! Desde o primeiro contato até a finalização do serviço, tudo perfeito. Confiança total no trabalho da ITECH.',
      rating: 5,
      service: 'Instalação'
    },
    {
      name: 'Roberto Lima',
      location: 'Teresina - PI',
      text: 'Equipe muito qualificada! Resolveram um problema que outros técnicos não conseguiam. Agora meu ar condicionado está como novo!',
      rating: 5,
      service: 'Manutenção Corretiva'
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="itech-badge mb-4 sm:mb-6">
            Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            O que nossos <span className="text-transparent bg-clip-text bg-gradient-itech">clientes</span> dizem
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é a nossa maior conquista. 
            Veja alguns depoimentos de quem já experimentou nossos serviços.
          </p>
        </motion.div>

        {/* Grid responsivo melhorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-brand-primary/20">
                <Quote className="h-6 sm:h-8 w-6 sm:w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-600 mb-4 sm:mb-6 italic leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Service Badge */}
              <div className="mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {testimonial.service}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg mr-3 sm:mr-4 flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-slate-900 text-sm sm:text-base truncate">{testimonial.name}</div>
                  <div className="text-slate-500 text-xs sm:text-sm truncate">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Melhor responsividade */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
              Que tal ser o próximo cliente satisfeito?
            </h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90 leading-relaxed">
              Entre em contato conosco e descubra por que somos referência em climatização
            </p>
            <a
              href="https://wa.me/5586994666688?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20ITECH%20CLIMATIZAÇÃO."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-brand-primary px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 text-sm sm:text-base min-h-[48px]"
            >
              Solicitar Orçamento Grátis
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ItechTestimonials;
