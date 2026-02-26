import React from 'react';
import { motion } from 'motion/react';

const images = [
  {
    url: "https://riadshotelsmaroc.com/wp-content/uploads/2024/08/meilleur-riad-marrakech.webp",
    title: "Patio Central",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/fd/35/bd/patio-piscine.jpg?w=900&h=500&s=1",
    title: "Piscine Riad",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWwn-PWTAjSp6rbmMb0QyWYtvJgNIQb74FQ&s",
    title: "Détails Architecture",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://riadsmarokko.de/photos/riad-dar-hanane-terrasse-nuit.jpg",
    title: "Terrasse Panoramique",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    url: "https://www.vacances-desert.com/upload/photo_prestation_1761.jpg",
    title: "Salon Marocain",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://riad-elisa.com/wp-content/uploads/2023/08/Spa_07_Hammam_Main.webp",
    title: "Hammam Traditionnel",
    span: "md:col-span-1 md:row-span-1"
  }
];

export const Gallery = () => {
  return (
    <section id="galerie" className="py-24 px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-terracotta uppercase tracking-widest text-sm mb-4 block">Voyage Visuel</span>
          <h2 className="text-4xl md:text-6xl font-serif text-emerald-deep">L'Âme du Riad en Images</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[1200px] md:h-[800px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-sand font-serif text-2xl tracking-widest uppercase">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
