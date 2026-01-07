import { motion } from "framer-motion";
import { Phone, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        {/* Using a construction-themed gradient since no hero image provided */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent opacity-50" />
      </div>

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-40 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -left-40 bottom-1/4 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm tracking-widest text-white backdrop-blur-sm"
        >
          {t.hero.badge}
        </motion.span>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 max-w-4xl font-sans text-4xl font-bold text-white md:text-6xl lg:text-7xl leading-tight"
        >
          {t.hero.title1}
          <br />
          <span className="text-accent">{t.hero.title2}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-10 max-w-2xl text-lg text-white/90"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="rounded-lg">
            <a href="tel:+41797982830" className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              {t.contact.callNow}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 rounded-lg"
          >
            <a href="mailto:briccolatuttofare@bluewin.ch" className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5" />
              {t.hero.sendEmail}
            </a>
          </Button>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-white/70 text-sm"
        >
          {t.hero.location}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#chi-siamo"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 rounded-full border border-white/30 p-3 text-white/60 hover:bg-white/10 transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
