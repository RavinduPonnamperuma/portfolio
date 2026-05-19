"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "Python", highlight: false },
      { name: "C#", highlight: false },
      { name: "Java", highlight: false },
      { name: "SQL", highlight: false },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Angular", highlight: true },
      { name: "React", highlight: false },
      { name: "Next.js", highlight: false },
      { name: "HTML5", highlight: false },
      { name: "CSS3", highlight: false },
      { name: "Tailwind CSS", highlight: false },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "NestJS", highlight: true },
      { name: "Node.js", highlight: false },
      { name: "Express", highlight: false },
      { name: ".NET Core", highlight: false },
      { name: "REST APIs", highlight: false },
      { name: "GraphQL", highlight: false },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "PostgreSQL", highlight: false },
      { name: "Redis", highlight: false },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", highlight: false },
      { name: "Git", highlight: false },
      { name: "Linux", highlight: false },
      { name: "AWS", highlight: false },
      { name: "CI/CD", highlight: false },
      { name: "Nginx", highlight: false },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", highlight: false },
      { name: "Jira", highlight: false },
      { name: "Figma", highlight: false },
      { name: "Postman", highlight: false },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-gold text-sm font-medium uppercase tracking-wider mb-2">
            Expertise
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-light">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Rows */}
        <div className="space-y-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-start gap-2 md:gap-0"
            >
              <div className="md:w-32 shrink-0">
                <span className="text-xs sm:text-sm text-gold font-medium uppercase tracking-wider">
                  {cat.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-full text-xs sm:text-sm transition-colors ${
                      skill.highlight
                        ? "bg-gold/20 text-gold border border-gold/30"
                        : "bg-navy-light text-text-muted border border-gold/10 hover:border-gold/30"
                    }`}
                  >
                    {skill.name}
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
