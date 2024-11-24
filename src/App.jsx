import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  PenTool,
  Layout,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import logo from "./assets/logo.png";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bgColor, setBgColor] = useState({
    background: "bg-black",
    text: "text-white",
    section: "inicio"
  });

  // Controle do background baseado no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicos", "portfolio", "contato"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (["inicio", "contato"].includes(section)) {
              setBgColor({
                background: "bg-black",
                text: "text-white",
                section: section
              });
            } else {
              setBgColor({
                background: "bg-white",
                text: "text-zinc-900",
                section: section
              });
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioSlides = [
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      title: "Estratégia de Marca",
      description:
        "Desenvolvimento de identidade visual para startup de tecnologia",
    },
    {
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
      title: "Design de Interface",
      description: "Criação de interfaces modernas e intuitivas",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Marketing Digital",
      description: "Campanhas estratégicas para crescimento online",
    },
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
      title: "Branding Corporativo",
      description: "Identidade visual para empresas estabelecidas",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length
    );
  };

  // Autoplay do carrossel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const works = [
    {
      title: "Identidade Visual",
      client: "Startup Tech",
      description:
        "Criação de identidade visual moderna e disruptiva para startup de tecnologia.",
      image: "/api/placeholder/800/600",
    },
    {
      title: "Redesign de Marca",
      client: "Empresa de Moda",
      description:
        "Transformação completa da identidade visual para marca de luxo contemporânea.",
      image: "/api/placeholder/800/600",
    },
    {
      title: "Campanha Digital",
      client: "E-commerce",
      description:
        "Estratégia de comunicação digital com foco em conversão e engajamento.",
      image: "/api/placeholder/800/600",
    },
  ];

  const services = [
    {
      icon: <PenTool className="w-12 h-12 text-white" />,
      title: "Branding",
      description: "Desenvolvimento de identidade de marca única e memorável.",
    },
    {
      icon: <Layout className="w-12 h-12 text-white" />,
      title: "Design",
      description: "Criação de interfaces e experiências visuais envolventes.",
    },
    {
      icon: <Globe className="w-12 h-12 text-white" />,
      title: "Marketing Digital",
      description: "Estratégias digitais que conectam sua marca com o público.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className={`font-sans transition-colors duration-300 ${bgColor.background} ${bgColor.text}`}>
      {/* Header - Agora com fundo transparente */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm ${bgColor.background} ${bgColor.text}`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            {bgColor.background === "bg-black" ? (
              <img src={logo} alt="Logo da Agência" className="h-10 w-auto" />
            ) : (
              <div className="text-2xl font-bold tracking-wider">
                ÍCONE
              </div>
            )}
          </div>
          <nav className="hidden md:flex space-x-6">
            {["Início", "Serviços", "Portfólio", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-300 hover:text-blue-500 ${bgColor.text}`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero - Mantém fundo preto */}
      <motion.section
        id="inicio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center text-center px-4 pt-16 bg-black text-white"
      >
        <div className="container mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Transformando Ideias em Experiências Digitais
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Criamos soluções criativas que combinam design, tecnologia e
            estratégia para elevar sua marca.
          </motion.p>
          <motion.a
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href="#contato"
            className="bg-white !text-black px-10 py-4"
          >
            Enviar Proposta
          </motion.a>
        </div>
      </motion.section>

      {/* Serviços - Agora com fundo branco */}
      <motion.section id="servicos" className="py-24 bg-white text-zinc-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Nossos Serviços</h2>
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-zinc-900 p-8 border border-zinc-800 rounded-lg"
              >
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Novo Carrossel de Portfólio */}
      <motion.section
        id="portfolio"
        className="py-24 overflow-hidden bg-white text-zinc-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-zinc-900">
            Nosso Portfólio
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <motion.div
                className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={portfolioSlides[currentSlide].image}
                  alt={portfolioSlides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-xl font-bold mb-1">
                    {portfolioSlides[currentSlide].title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {portfolioSlides[currentSlide].description}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Controles do carrossel */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/20 backdrop-blur-sm p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/20 backdrop-blur-sm p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-4 space-x-2">
              {portfolioSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trabalhos */}
      {/* <motion.section 
        id="trabalhos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-24"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nossos Trabalhos</h2>
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {works.map((work, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <motion.img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-gray-400 mb-4">{work.client}</p>
                  <p className="text-gray-500">{work.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section> */}

      {/* Contato */}
      <motion.section
        id="contato"
        className="py-24 bg-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Vamos Criar Juntos
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.input
                  variants={itemVariants}
                  type="text"
                  placeholder="Nome"
                  className="w-full p-4 bg-black border border-zinc-800 text-white focus:border-white transition-colors"
                />
                <motion.input
                  variants={itemVariants}
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-4 bg-black border border-zinc-800 text-white focus:border-white transition-colors"
                />
              </div>
              <motion.textarea
                variants={itemVariants}
                placeholder="Conte sobre seu projeto"
                rows={6}
                className="w-full p-4 bg-black border border-zinc-800 text-white focus:border-white transition-colors"
              ></motion.textarea>
              <div className="text-center">
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  className="bg-white !text-black px-10 py-4 hover:bg-gray-200 transition-colors"
                >
                  Enviar Proposta
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-black text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-6">ÍCONE</div>
          <div className="flex justify-center space-x-6 mb-8">
            {["Instagram", "Behance", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="hover:text-gray-300 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          <p className="text-gray-400">
            © 2024 Agência Criativa. Todos os direitos reservados.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
