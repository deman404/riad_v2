import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Sunrise, Wind, Map } from 'lucide-react';

const experiences = [
  {
    icon: <Coffee className="text-gold" size={32} />,
    title: "Petit-déjeuner Royal",
    description: "Commencez votre journée sur la terrasse avec des crêpes marocaines fraîches, du miel local et du thé à la menthe traditionnel."
  },
  {
    icon: <Sunrise className="text-gold" size={32} />,
    title: "Coucher de Soleil",
    description: "Admirez la vue imprenable sur la Koutoubia et les toits de la Médina alors que le ciel se pare de teintes orangées."
  },
  {
    icon: <Wind className="text-gold" size={32} />,
    title: "Hammam & Spa",
    description: "Un rituel de purification ancestral au savon noir et à l'eucalyptus, suivi d'un massage relaxant à l'huile d'argan."
  },
  {
    icon: <Map className="text-gold" size={32} />,
    title: "Excursions Sur Mesure",
    description: "Du désert d'Agafay aux sommets de l'Atlas, nous organisons vos aventures pour découvrir le Maroc authentique."
  }
];

export const Experiences = () => {
  return (
    <section id="experiences" className="py-24 px-6 bg-sand relative overflow-hidden">
      <div className="zellige-pattern absolute inset-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-terracotta uppercase tracking-widest text-sm mb-4 block">Expériences Uniques</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-emerald-deep">Plus Qu'un Séjour, Une Immersion</h2>
            <p className="text-lg text-emerald-deep/70 font-light mb-12 leading-relaxed">
              Nous croyons que le luxe réside dans les moments authentiques. Chaque service est pensé pour vous faire découvrir la richesse de la culture marocaine.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <div key={index} className="p-6 bg-white/50 rounded-2xl border border-terracotta/10 hover:shadow-xl transition-all">
                  <div className="mb-4">{exp.icon}</div>
                  <h3 className="text-xl font-serif mb-2 text-emerald-deep">{exp.title}</h3>
                  <p className="text-sm text-emerald-deep/60 font-light leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-full border-8 border-gold/20">
              <img
                src="https://www.ahstatic.com/photos/b1v2_ho_00_p_1024x768.jpg"
                alt="Expérience Riad"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-gold rounded-full flex items-center justify-center text-emerald-deep text-center p-4 shadow-lg animate-pulse">
              <p className="font-serif text-sm font-bold uppercase tracking-tighter">Réservez Votre Expérience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
