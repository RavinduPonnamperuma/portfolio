"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Server,
  Database,
  Settings,
  Globe,
  ExternalLink,
  FolderGit2,
  type LucideIcon,
} from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const iconMap: Record<
  (typeof portfolioData.projects)[number]["icon"],
  LucideIcon
> = {
  monitor: Monitor,
  server: Server,
  database: Database,
  settings: Settings,
  globe: Globe,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { projects, githubRepositoriesUrl, featuredProjectCount } =
    portfolioData;
  const featuredProjects = projects.slice(0, featuredProjectCount);
  const remainingCount = projects.length - featuredProjects.length;

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
          className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-gold text-sm font-medium uppercase tracking-wider mb-2">
              Portfolio
            </p>
            <h2
              id="projects-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-light"
            >
              Featured Projects
            </h2>
            <p className="text-sm text-text-muted mt-2 max-w-xl">
              Latest {featuredProjects.length} of {projects.length} repositories
              from{" "}
              <span className="text-text-light">@RavinduPonnamperuma</span>
            </p>
          </div>
          <a
            href={githubRepositoriesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gold border border-gold/40 rounded-lg px-4 py-2 hover:bg-gold/10 transition-colors shrink-0"
          >
            <FolderGit2 size={16} />
            View all on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {featuredProjects.map((project) => {
            const Icon = iconMap[project.icon];
            return (
              <motion.a
                key={project.repo}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className="bg-navy-light rounded-xl p-4 sm:p-5 border border-gold/15 hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 group block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`${project.name} on GitHub`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <Icon
                    size={24}
                    className="text-gold shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <ExternalLink
                    size={16}
                    className="text-text-muted group-hover:text-gold transition-colors shrink-0"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-medium text-text-light mb-1 group-hover:text-gold transition-colors">
                  {project.name}
                </h3>
                <p className="text-[11px] text-gold/80 font-mono mb-2">
                  {project.repo}
                </p>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-gold bg-gold/10 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-text-muted">
                  Updated {project.updatedAt}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {remainingCount > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-sm text-text-muted mt-8"
          >
            +{remainingCount} more on{" "}
            <a
              href={githubRepositoriesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline inline-flex items-center gap-1"
            >
              GitHub
              <ExternalLink size={12} />
            </a>
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
