
import { Award, Clock, Users, Wrench, Shield, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const differentials = [
    {
      icon: Award,
      title: '15 Anos de Experiência',
      description: 'Mais de uma década transformando lares em ambientes inteligentes e seguros'
    },
    {
      icon: Wrench,
      title: 'Tecnologia de Ponta',
      description: 'Utilizamos os equipamentos mais modernos e confiáveis do mercado'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais certificados e em constante atualização tecnológica'
    },
    {
      icon: Clock,
      title: 'Suporte 24/7',
      description: 'Atendimento e suporte técnico disponível 24 horas por dia, 7 dias por semana'
    },
    {
      icon: Shield,
      title: 'Garantia Total',
      description: 'Garantia completa em todos os equipamentos e serviços prestados'
    },
    {
      icon: Star,
      title: 'Soluções Personalizadas',
      description: 'Cada projeto é único e desenvolvido especialmente para suas necessidades'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      text: 'Transformaram minha casa completamente! Agora tenho total controle e segurança.',
      rating: 5
    },
    {
      name: 'Ana Rodrigues',
      text: 'Profissionais excelentes e atendimento impecável. Recomendo para todos!',
      rating: 5
    },
    {
      name: 'João Santos',
      text: 'A automação superou minhas expectativas. Minha família se sente muito mais segura.',
      rating: 5
    }
  ];

  return (
    <section className="relative py-20 bg-black/30 backdrop-blur-sm">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por Que Escolher a <span className="text-green-400">SmartSecure</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Somos referência em automação e segurança residencial
          </p>
        </div>

        {/* Diferenciais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <item.icon className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            O que nossos <span className="text-green-400">clientes</span> dizem
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <span className="text-white font-semibold">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
