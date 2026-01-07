import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "20+", label: t.about.stat1 },
    { value: "100+", label: t.about.stat2 },
    { value: "98%", label: t.about.stat3 },
  ];

  return (
    <section id="chi-siamo" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
            <h2 className="mb-6 font-sans text-4xl font-bold md:text-5xl">
              {t.about.title1} <span className="text-accent">{t.about.title2}</span>
            </h2>

            <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
              {t.about.p1}
            </p>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              {t.about.p2}
            </p>

            {/* Stats */}
            <div className="grid gap-6 sm:grid-cols-3 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {t.about.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 rounded-lg border border-border bg-background p-4 hover:shadow-soft transition-shadow"
              >
                <div className="flex-shrink-0 text-accent pt-1">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
