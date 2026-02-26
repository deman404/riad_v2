import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-sand py-16 px-6 border-t border-terracotta/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#accueil" className="text-3xl font-serif font-bold tracking-widest text-emerald-deep uppercase mb-6 block">
              Riad <span className="text-terracotta">Élégance</span>
            </a>
            <p className="text-emerald-deep/60 font-light max-w-md leading-relaxed">
              Une expérience immersive au cœur de Marrakech, où chaque détail est une célébration de l'artisanat marocain et du luxe discret.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-emerald-deep">Navigation</h4>
            <ul className="space-y-4 text-sm uppercase tracking-widest text-emerald-deep/70">
              <li><a href="#accueil" className="hover:text-terracotta transition-colors">Accueil</a></li>
              <li><a href="#propos" className="hover:text-terracotta transition-colors">À Propos</a></li>
              <li><a href="#chambres" className="hover:text-terracotta transition-colors">Chambres</a></li>
              <li><a href="#experiences" className="hover:text-terracotta transition-colors">Expériences</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-emerald-deep">Suivez-nous</h4>
            <div className="flex gap-6 text-emerald-deep/70">
              <a href="#" className="hover:text-terracotta transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-terracotta transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-terracotta transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-terracotta/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-[0.2em] text-emerald-deep/40">
          <p>© 2026 Riad Élégance Marrakech. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-deep transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-emerald-deep transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
