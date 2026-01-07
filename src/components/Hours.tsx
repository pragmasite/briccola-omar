import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Opening hours from business data: Mon-Fri 07:30-17:30, Sat-Sun closed
  const schedule = [
    { hours: "07:30 - 17:30" }, // Monday
    { hours: "07:30 - 17:30" }, // Tuesday
    { hours: "07:30 - 17:30" }, // Wednesday
    { hours: "07:30 - 17:30" }, // Thursday
    { hours: "07:30 - 17:30" }, // Friday
    { hours: "Chiuso" }, // Saturday
    { hours: "Chiuso" }, // Sunday
  ];

  // Get today's day (0 = Sunday, so we need to adjust)
  const todayIndex = (new Date().getDay() + 6) % 7;

  // Check if currently open (simplified - doesn't account for actual time)
  const isOpen = schedule[todayIndex].hours !== "Chiuso";

  return (
    <section id="orari" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
          <h2 className="mb-4 font-sans text-4xl font-bold md:text-5xl">{t.hours.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl rounded-2xl border border-border bg-card shadow-soft overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-sans text-lg font-semibold text-foreground">{t.hours.header}</span>
          </div>

          {/* Hours list */}
          <div className="divide-y divide-border">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === "Chiuso";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={`px-6 py-4 flex items-center justify-between transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    )}
                    <div>
                      <span
                        className={`${
                          isToday ? "font-semibold text-primary" : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="ml-2 text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full inline-block">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className={isClosed ? "text-muted-foreground" : ""}>
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Status indicator */}
          <div className="px-6 py-3 bg-muted/50 text-center text-sm text-muted-foreground">
            {isOpen ? (
              <span className="text-accent font-semibold">Aperto</span>
            ) : (
              <span className="text-destructive font-semibold">Chiuso</span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
