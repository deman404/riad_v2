import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="propos" className="py-24 px-6 bg-sand relative overflow-hidden">
      <div className="zellige-pattern absolute inset-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://lasmaplone.com/wp-content/uploads/2025/08/Riad-Nelia-Marrakech.jpg"
              alt="Intérieur de luxe Riad"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-terracotta p-8 rounded-2xl hidden md:block">
            <p className="text-sand font-serif text-2xl italic">"Un sanctuaire de paix au milieu de l'effervescence."</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-terracotta uppercase tracking-widest text-sm mb-4 block">Notre Histoire</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-emerald-deep">
            L'Art de Vivre Marocain
          </h2>
          <div className="space-y-6 text-lg text-emerald-deep/80 leading-relaxed font-light">
            <p>
              Niché au cœur des ruelles sinueuses de la Médina, le Riad Élégance est le fruit d'une restauration passionnée. Chaque détail, du bois de cèdre sculpté à la main aux zelliges géométriques, raconte une histoire d'artisanat ancestral.
            </p>
            <p>
              Nous avons conçu ce lieu comme un refuge, un espace où le temps semble s'arrêter. Ici, le murmure de la fontaine du patio et le parfum du jasmin vous accueillent pour une expérience immersive et authentique.
            </p>
            <p>
              Que vous cherchiez la sérénité de notre patio ou la vue imprenable depuis notre terrasse, nous vous promettons un séjour où le luxe rencontre l'âme véritable de Marrakech.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-terracotta/20 pt-10">
            <div>
              <h4 className="font-serif text-3xl text-terracotta">100%</h4>
              <p className="text-sm uppercase tracking-widest opacity-70">Artisanat Local</p>
            </div>
            <div>
              <h4 className="font-serif text-3xl text-terracotta">5 min</h4>
              <p className="text-sm uppercase tracking-widest opacity-70">De Jemaa el-Fna</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
