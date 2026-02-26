import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: "Suite Ambre Royale",
    price: "1,800 DH",
    image: "https://www.riadcocoon.com/wp-content/uploads/elementor/thumbs/chambre3-qdp67vt7z4apha7gnzy9wlbtjnh410ofmyiv01rtyo.jpg",
    description: "Un espace majestueux aux tons chauds, doté d'un salon privé et d'une baignoire en marbre."
  },
  {
    id: 2,
    name: "Chambre Jardin d'Émeraude",
    price: "1,400 DH",
    image: "https://www.riadkheirredine.com/wp-content/uploads/2017/02/Lotus-Hero-Shot-1367x912.jpg",
    description: "Une oasis de fraîcheur avec vue directe sur le patio fleuri et ses fontaines."
  },
  {
    id: 3,
    name: "Suite Vue Atlas",
    price: "2,100 DH",
    priceNum: 2100,
    image: "https://riad-babouchta.com/images/rooms/Chambre-Triple.jpg",
    description: "Située au dernier étage, offrant une vue panoramique sur les montagnes de l'Atlas."
  },
  {
    id: 4,
    name: "Chambre Coucher de Soleil",
    price: "1,200 DH",
    image: "https://www.riadlyla.com/wp-content/uploads/2023/11/Riad-Lyla-Familiale-36.jpg",
    description: "Une chambre intimiste et romantique, baignée par la lumière dorée du soir."
  }
];

export const Rooms = () => {
  return (
    <section id="chambres" className="py-24 px-6 bg-emerald-deep text-sand">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Hébergement de Prestige</span>
            <h2 className="text-4xl md:text-6xl font-serif">Nos Suites & Chambres</h2>
          </div>
          <p className="max-w-md text-sand/70 font-light italic">
            Chaque chambre est une pièce unique, décorée avec soin pour offrir un confort moderne dans un cadre historique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-sand text-emerald-deep px-4 py-2 rounded-full font-serif text-lg">
                  {room.price} <span className="text-sm">/ nuit</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-2 group-hover:text-gold transition-colors">{room.name}</h3>
                  <p className="text-sand/60 font-light max-w-sm">{room.description}</p>
                </div>
                <button className="p-3 rounded-full border border-sand/20 group-hover:bg-gold group-hover:text-emerald-deep transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
