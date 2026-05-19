"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Server,
  Database,
  Smartphone,
  Settings,
  Globe,
} from "lucide-react";

const projects = [
  {
    icon: Monitor,
    name: "Factory OS – Production Dashboard",
    description:
      "Real-time production monitoring dashboard for garment manufacturing. Displays live machine status, operator performance, shift outputs, and production analytics with WebSocket-powered updates.",
    tech: ["Angular", "NestJS", "MySQL", "WebSocket", "Docker"],
  },
  {
    icon: Globe,
    name: "Visitor Management System",
    description:
      "End-to-end visitor management platform with visitor pre-registration, QR code check-in, email notifications to approvers, and comprehensive visit history tracking.",
    tech: ["Angular", "NestJS", "MySQL", "gRPC", "Email"],
  },
  {
    icon: Server,
    name: "Microservices API Gateway",
    description:
      "Centralized API gateway orchestrating multiple microservices including machine, operator, and shift services. Implements authentication, rate limiting, and request routing.",
    tech: ["NestJS", "Go", "gRPC", "Docker", "Redis"],
  },
  {
    icon: Database,
    name: "Data Export & Reporting Engine",
    description:
      "Automated report generation system supporting PDF and Excel exports. Features server-sent events for real-time progress tracking during large data exports.",
    tech: ["NestJS", "PDFMake", "ExcelJS", "SSE"],
  },
  {
    icon: Smartphone,
    name: "Mobile-First Employee Portal",
    description:
      "Responsive employee self-service portal for leave requests, attendance tracking, and payslip access. Designed with mobile-first approach for factory floor workers.",
    tech: ["React", "TypeScript", "REST API", "PWA"],
  },
  {
    icon: Settings,
    name: "IT Infrastructure Automation",
    description:
      "Automated IT infrastructure management tools including network monitoring, backup scheduling, and asset tracking for multi-site factory operations.",
    tech: ["Python", "Docker", "Linux", "Bash", "Nginx"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
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
            Portfolio
          </p>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-light"
          >
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon;
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
      </div>
    </section>
  );
}
