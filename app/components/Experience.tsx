"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2023 – Present",
    role: "IT Coordinator & Software Developer",
    company: "MAS Intimates (Pvt) Ltd",
    description:
      "Leading IT operations and developing internal software solutions. Managing infrastructure, implementing automation tools, and building full-stack web applications with Angular, NestJS, and MySQL to streamline business processes.",
  },
  {
    period: "2022 – 2023",
    role: "Associate Software Engineer",
    company: "Virtusa (Pvt) Ltd",
    description:
      "Developed and maintained enterprise-grade applications using Angular and .NET Core. Collaborated with cross-functional teams to deliver high-quality software solutions, participated in code reviews, and contributed to agile ceremonies.",
  },
  {
    period: "2021 – 2022",
    role: "Intern Software Developer",
    company: "Informatics Institute of Technology",
    description:
      "Gained hands-on experience in full-stack web development. Built RESTful APIs, worked with databases, and contributed to academic management system features using modern web technologies.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gold/30" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex items-start"
              >
                {/* Gold dot */}
                <div className="absolute left-0 w-6 h-6 rounded-full bg-navy border-2 border-gold z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>

                {/* Content Card */}
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
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
