
import { AlertTriangle, CheckCircle, Shield, Zap, Smartphone, Eye } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Sua casa é realmente segura?',
      description: 'Invasões, roubos e falta de monitoramento constante'
    },
    {
      icon: Zap,
      title: 'Tempo é dinheiro, sua casa trabalha para você?',
      description: 'Desperdício de energia e falta de automação'
    },
    {
      icon: Eye,
      title: 'Preocupado com quem entra e sai?',
      description: 'Falta de controle de acesso e monitoramento'
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Monitoramento 24/7, alarmes inteligentes e câmeras de alta definição'
    },
    {
      icon: Smartphone,
      title: 'Controle Total',
      description: 'Automação completa controlada pelo seu smartphone, de qualquer lugar'
    },
    {
      icon: CheckCircle,
      title: 'Tranquilidade',
      description: 'Sistema integrado que protege sua família e otimiza seu lar'
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Problemas que <span className="text-red-400">Preocupam</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            Você já se perguntou sobre esses desafios em sua casa?
          </p>
        </div>

        {/* Problems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-red-500/10 border border-red-500/20"
            >
              <problem.icon className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 text-red-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 px-2">{problem.title}</h3>
              <p className="text-sm sm:text-base text-slate-400 px-2">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            <span className="text-green-400">Soluções</span> que Transformam
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            Acabamos com suas preocupações com tecnologia de ponta
          </p>
        </div>

        {/* Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all duration-300"
            >
              <solution.icon className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 text-green-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 px-2">{solution.title}</h3>
              <p className="text-sm sm:text-base text-slate-400 px-2">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
