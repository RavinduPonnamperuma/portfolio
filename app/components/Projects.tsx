"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Server,
  Database,
  Settings,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const iconMap: Record<(typeof portfolioData.projects)[number]["icon"], LucideIcon> = {
  monitor: Monitor,
  server: Server,
  database: Database,
  settings: Settings,
  globe: Globe,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <motion.div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-gold text-sm font-medium uppercase tracking-wider mb-2">
            Portfolio
          </p>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-light"
          >
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {projects.map((project) => {
            const Icon = iconMap[project.icon];
            return (
              <motion.div
                key={project.name}
                variants={cardVariants}
                className="bg-navy-light rounded-xl p-4 sm:p-5 border border-gold/15 hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <Icon
                  size={24}
                  className="text-gold mb-3 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-sm sm:text-base font-medium text-text-light mb-2">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-gold bg-gold/10 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
