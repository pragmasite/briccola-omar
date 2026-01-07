import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 798 28 30",
      href: "tel:+41797982830",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "briccolatuttofare@bluewin.ch",
      href: "mailto:briccolatuttofare@bluewin.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Via Santa Croce 1, 6826 Riva San Vitale, CH",
      href: "https://maps.google.com/?q=45.906112,8.971084",
    },
  ];

  return (
    <section id="contatti" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl">
            {t.contact.title1} <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-6 hover:shadow-soft hover:border-accent/50 transition-all"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button asChild size="lg" className="w-full rounded-lg">
                <a href="tel:+41797982830" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  {t.contact.cta}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border shadow-soft"
          >
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen={true}
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.7899999999997!2d8.971084!3d45.906112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4784f2e2e2e2e2e1%3A0x0!2sBriccola%20Omar%20Muratore!5e0!3m2!1sit!2sch!4v1234567890`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
