"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePortfolio } from "@/app/context/PortfolioContext";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { experience } = usePortfolio().data;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
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
            Career Path
          </p>
          <h2
            id="experience-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-light"
          >
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gold/30" />

          <div className="space-y-8 sm:space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex items-start"
              >
                <div className="absolute left-0 w-6 h-6 rounded-full bg-navy border-2 border-gold z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>

                <div className="ml-10 sm:ml-12 bg-navy-light rounded-xl p-4 sm:p-5 border border-gold/10 hover:border-l-4 hover:border-l-gold/50 transition-all duration-300 w-full group">
                  <span className="text-xs text-gold uppercase tracking-wider font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-sm sm:text-base font-medium text-text-light mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted mb-2">
                    {exp.company}
                  </p>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  {exp.responsibilities.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-text-muted">
                      {exp.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {"techStack" in exp && exp.techStack && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gold/10">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] text-gold bg-gold/10 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
