import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.promovacances.com/photos/vacances-maroc/marrakech/piscine-riad-les-etoiles-berberes_872778_panohd.jpg"
          alt="Patio Oriental Riad"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sand uppercase tracking-[0.3em] text-sm mb-6 block"
        >
          Bienvenue au Sanctuaire
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl text-sand font-serif mb-8 leading-tight"
        >
          Riad Élégant au Cœur de Marrakech
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sand/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto"
        >
          Un riad traditionnel paisible où le luxe rencontre l'âme de la Médina. À seulement 5 minutes de Jemaa el-Fna.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#chambres"
            className="inline-block bg-gold text-emerald-deep px-10 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-sand transition-all duration-300"
          >
            Découvrir nos suites
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sand"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
