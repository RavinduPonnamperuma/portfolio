"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/lib/portfolio-data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-gold text-sm font-medium uppercase tracking-wider mb-2">
            Expertise
          </p>
          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-light"
          >
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="space-y-6">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-start gap-2 md:gap-0"
            >
              <div className="md:w-40 shrink-0">
                <span className="text-xs sm:text-sm text-gold font-medium uppercase tracking-wider">
                  {cat.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 rounded-full text-xs sm:text-sm transition-colors ${
                      (cat.highlights as readonly string[]).includes(tech)
                        ? "bg-gold/20 text-gold border border-gold/30"
                        : "bg-navy-light text-text-muted border border-gold/10 hover:border-gold/30"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
