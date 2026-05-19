"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const educationItems = [
    ...portfolioData.education,
    ...portfolioData.certificates,
  ];

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
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
            Learning
          </p>
          <h2
            id="education-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-light"
          >
            Education & Certifications
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {educationItems.map((item) => (
            <motion.div
              key={`${item.title}-${item.institution}`}
              variants={cardVariants}
              className="bg-navy-light rounded-xl border-l-4 border-l-gold p-4 sm:p-5 hover:bg-navy-lighter/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {item.type === "degree" ? (
                    <GraduationCap size={18} className="text-gold" />
                  ) : (
                    <Award size={18} className="text-gold" />
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-light mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gold mb-0.5">{item.institution}</p>
                  <p className="text-xs text-text-muted mb-1">{item.year}</p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
