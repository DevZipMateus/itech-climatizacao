
import { motion } from 'framer-motion';
import { Camera, Play } from 'lucide-react';

const Gallery = () => {
  const projects = [
    {
      title: 'Casa Moderna - Barra da Tijuca',
      category: 'Automação Completa',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop',
      features: ['Iluminação Inteligente', 'Climatização', 'Segurança 24/7']
    },
    {
      title: 'Apartamento de Luxo - Ipanema',
      category: 'Segurança Avançada',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop',
      features: ['Câmeras 4K', 'Controle de Acesso', 'Alarmes Inteligentes']
    },
    {
      title: 'Cobertura - Leblon',
      category: 'Smart Home Premium',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=300&fit=crop',
      features: ['Automação Total', 'Som Ambiente', 'Segurança Integrada']
    },
    {
      title: 'Casa de Família - Tijuca',
      category: 'Proteção Residencial',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&h=300&fit=crop',
      features: ['Monitoramento', 'Controle Parental', 'Backup de Energia']
    },
    {
      title: 'Mansão - São Conrado',
      category: 'Projeto Completo',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=300&fit=crop',
      features: ['Automação Luxury', 'Segurança Perimetral', 'Home Theater']
    },
    {
      title: 'Loft Moderno - Centro',
      category: 'Automação Urbana',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=500&h=300&fit=crop',
      features: ['Controle por App', 'Economia de Energia', 'Segurança Inteligente']
    }
  ];

  return (
    <section className="relative py-20 bg-slate-900/50 backdrop-blur-sm">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos <span className="text-green-400">Realizados</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Veja alguns dos nossos cases de sucesso em automação e segurança residencial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="h-8 w-8 text-white mx-auto mb-2" />
                      <span className="text-white font-semibold">Ver Projeto</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <div className="space-y-1">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-slate-400 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 mb-4">
            Quer ver seu projeto aqui também?
          </p>
          <button
            onClick={() => window.open('https://wa.me/5521999999999?text=Olá!%20Gostaria%20de%20ver%20mais%20projetos%20e%20solicitar%20um%20orçamento.', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Solicite Seu Projeto Personalizado
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
