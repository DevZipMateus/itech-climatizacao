import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
const Blog = () => {
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
  const posts = [{
    title: 'Mudanças na Legislação Tributária para 2023',
    excerpt: 'Confira as principais alterações na legislação tributária que afetam empresas de todos os portes.',
    image: '/images/blog1.jpg',
    date: '12 Mar 2023',
    readTime: '6 min'
  }, {
    title: 'Como Reduzir a Carga Tributária da sua Empresa Legalmente',
    excerpt: 'Estratégias de planejamento tributário que podem ajudar sua empresa a economizar recursos.',
    image: '/images/blog2.jpg',
    date: '24 Fev 2023',
    readTime: '8 min'
  }, {
    title: 'Contabilidade Digital: Benefícios da Transformação Tecnológica',
    excerpt: 'Descubra como a transformação digital tem revolucionado os serviços contábeis e financeiros.',
    image: '/images/blog3.jpg',
    date: '10 Jan 2023',
    readTime: '5 min'
  }];
  return <section ref={sectionRef} id="blog" className="bg-white py-0">
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
            Blog
          </div>
          <h2 className="section-title">Artigos e Notícias</h2>
          <p className="section-subtitle">
            Acompanhe conteúdos relevantes sobre contabilidade, finanças, legislação e gestão empresarial para manter-se
            atualizado e tomar melhores decisões para seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => <motion.div key={index} className="bg-white rounded-xl overflow-hidden shadow-subtle card-hover" initial={{
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
              <div className="h-48 overflow-hidden">
                <div className="h-full w-full bg-slate-200 bg-cover bg-center transition-transform duration-500 hover:scale-105" style={{
              backgroundImage: `url(${post.image})`
            }}></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    {post.readTime} de leitura
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                  Ler mais <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>)}
        </div>

        <motion.div className="mt-12 text-center" initial={{
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
        delay: 0.6
      }}>
          <a href="#" className="btn-secondary">
            Ver Todos os Artigos
          </a>
        </motion.div>
      </div>
    </section>;
};
export default Blog;