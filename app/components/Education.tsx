"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    type: "degree",
    title: "BSc (Hons) in Information Technology",
    institution: "University of Moratuwa",
    year: "2019 – 2023",
    description: "Specialized in Software Engineering",
  },
  {
    type: "degree",
    title: "Diploma in Information Technology",
    institution: "Informatics Institute of Technology",
    year: "2018 – 2019",
    description: "Foundation in IT & Programming",
  },
  {
    type: "cert",
    title: "AWS Cloud Practitioner",
    institution: "Amazon Web Services",
    year: "2023",
    description: "Cloud fundamentals & AWS services",
  },
  {
    type: "cert",
    title: "Angular – The Complete Guide",
    institution: "Udemy",
    year: "2022",
    description: "Advanced Angular development",
  },
  {
    type: "cert",
    title: "NestJS – Zero to Hero",
    institution: "Udemy",
    year: "2022",
    description: "Backend development with NestJS",
  },
  {
    type: "degree",
    title: "GCE Advanced Level – Physical Science",
    institution: "Elpitiya Central College",
    year: "2017",
    description: "Combined Mathematics, Physics, Chemistry",
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
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-gold text-sm font-medium uppercase tracking-wider mb-2">
            Learning
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-light">
            Education & Certifications
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {education.map((item) => (
            <motion.div
              key={item.title}
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
