import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="servizi" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.services.label}</span>
          <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl">{t.services.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.services.items.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group rounded-xl border border-border bg-card p-6 hover:shadow-medium transition-all hover:border-accent/50"
            >
              <div className="mb-4 h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <div className="h-6 w-6 rounded bg-accent/60 group-hover:bg-accent transition-colors" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground text-lg">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
