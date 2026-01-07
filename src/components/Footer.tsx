import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/images/logo.jpg" alt="Briccola Omar" className="h-12 w-auto mb-4" />
            <p className="text-sm text-primary-foreground/70 mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-primary-foreground/60">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#chi-siamo" className="hover:text-primary-foreground transition-colors">{t.nav.about}</a></li>
              <li><a href="#servizi" className="hover:text-primary-foreground transition-colors">{t.nav.services}</a></li>
              <li><a href="#lavori" className="hover:text-primary-foreground transition-colors">{t.nav.gallery}</a></li>
              <li><a href="#orari" className="hover:text-primary-foreground transition-colors">{t.nav.hours}</a></li>
              <li><a href="#contatti" className="hover:text-primary-foreground transition-colors">{t.nav.contact}</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">{t.contact.label}</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+41797982830" className="hover:text-primary-foreground transition-colors">
                  +41 79 798 28 30
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:briccolatuttofare@bluewin.ch" className="hover:text-primary-foreground transition-colors">
                  briccolatuttofare@bluewin.ch
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Via Santa Croce 1<br />6826 Riva San Vitale, CH</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Social</h3>
            <a
              href="https://www.facebook.com/BriccolaOmarMuratore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors text-primary-foreground"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60"
        >
          <p>
            © {currentYear} Briccola Omar. {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
