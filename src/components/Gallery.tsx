import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Gallery items with descriptions in Italian (primary language)
  const galleryItems = [
    { id: 1, title: "Ristrutturazione Bagno", color: "from-blue-600 to-blue-400" },
    { id: 2, title: "Muratura Moderna", color: "from-orange-600 to-orange-400" },
    { id: 3, title: "Pavimentazione Esterna", color: "from-slate-700 to-slate-500" },
    { id: 4, title: "Ristrutturazione Cucina", color: "from-amber-600 to-amber-400" },
    { id: 5, title: "Muro a Secco", color: "from-stone-700 to-stone-500" },
    { id: 6, title: "Demolizione Controllata", color: "from-red-600 to-red-400" },
  ];

  // Translation mapping for descriptions
  const descriptionMap: { [key: string]: { it: string; de: string; en: string } } = {
    "Ristrutturazione Bagno": { it: "Ristrutturazione Bagno", de: "Badrenovierung", en: "Bathroom Renovation" },
    "Muratura Moderna": { it: "Muratura Moderna", de: "Modernes Mauerwerk", en: "Modern Masonry" },
    "Pavimentazione Esterna": { it: "Pavimentazione Esterna", de: "Außenboden", en: "Outdoor Flooring" },
    "Ristrutturazione Cucina": { it: "Ristrutturazione Cucina", de: "Küchenrenovierung", en: "Kitchen Renovation" },
    "Muro a Secco": { it: "Muro a Secco", de: "Trockenmauer", en: "Dry Stone Wall" },
    "Demolizione Controllata": { it: "Demolizione Controllata", de: "Kontrollierter Abriss", en: "Controlled Demolition" },
  };

  const { lang } = useLanguage();

  const getDescription = (title: string) => {
    const descriptions = descriptionMap[title];
    if (!descriptions) return title;
    return descriptions[lang as keyof typeof descriptions] || title;
  };

  return (
    <section id="lavori" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl">{t.gallery.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Gradient background placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

              {/* Overlay on hover */}
              <motion.div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-semibold text-lg">{getDescription(item.title)}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl aspect-square rounded-xl overflow-hidden"
            >
              {/* Image placeholder */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${galleryItems[selectedIndex].color}`}
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-foreground/20 hover:bg-foreground/40 transition-colors text-white"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Description */}
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                <div>
                  <h3 className="text-white text-2xl font-semibold">
                    {getDescription(galleryItems[selectedIndex].title)}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
