import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

export const Booking = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
    alert("Merci ! Votre demande a été envoyée. Nous vous contacterons très prochainement.");
  };

  return (
    <section id="reservation" className="py-24 px-6 bg-emerald-deep text-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Contact & Accès</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Préparez Votre Venue</h2>
            <p className="text-lg text-sand/70 font-light mb-12 leading-relaxed">
              Situé au cœur de la Médina, à seulement 5 minutes à pied de la célèbre place Jemaa el-Fna, notre Riad est facilement accessible tout en restant un havre de paix.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-sand/10 rounded-full text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Localisation</h4>
                  <p className="text-sand/60 font-light">Derb El Ferrane, Médina, Marrakech, Maroc</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-sand/10 rounded-full text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Téléphone</h4>
                  <p className="text-sand/60 font-light">+212 5 24 00 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-sand/10 rounded-full text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Email</h4>
                  <p className="text-sand/60 font-light">contact@riad-elegance.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/212000000000"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform"
              >
                <MessageCircle size={24} />
                Assistance WhatsApp Instantanée
              </a>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-sand p-8 md:p-12 rounded-3xl text-emerald-deep"
          >
            <h3 className="text-3xl font-serif mb-8">Demande de Réservation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-50">Nom Complet</label>
                  <input
                    required
                    type="text"
                    placeholder="Votre nom"
                    className="w-full bg-transparent border-b border-emerald-deep/20 py-3 focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-50">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full bg-transparent border-b border-emerald-deep/20 py-3 focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-50">Arrivée</label>
                  <input
                    required
                    type="date"
                    className="w-full bg-transparent border-b border-emerald-deep/20 py-3 focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-50">Départ</label>
                  <input
                    required
                    type="date"
                    className="w-full bg-transparent border-b border-emerald-deep/20 py-3 focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-50">Chambre Souhaitée</label>
                <select className="w-full bg-transparent border-b border-emerald-deep/20 py-3 focus:outline-none focus:border-terracotta transition-colors appearance-none">
                  <option>Suite Ambre Royale</option>
                  <option>Chambre Jardin d'Émeraude</option>
                  <option>Suite Vue Atlas</option>
                  <option>Chambre Coucher de Soleil</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-50">Message (Optionnel)</label>
                <textarea
                  rows={4}
                  placeholder="Demandes particulières..."
                  className="w-full bg-transparent border-b border-emerald-deep/20 py-3 focus:outline-none focus:border-terracotta transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-terracotta text-white py-4 rounded-xl font-medium uppercase tracking-widest hover:bg-emerald-deep transition-all flex items-center justify-center gap-3"
              >
                <Send size={18} />
                Envoyer la demande
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
