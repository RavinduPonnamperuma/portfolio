"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { usePortfolio } from "@/app/context/PortfolioContext";
import type {
  PortfolioCertificate,
  PortfolioEducation,
} from "@/lib/portfolio-types";

type LearningItem = PortfolioEducation | PortfolioCertificate;

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

function LearningCard({ item }: { item: LearningItem }) {
  const Icon = item.type === "degree" ? GraduationCap : Award;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-navy-light rounded-xl border-l-4 border-l-gold p-4 sm:p-5 hover:bg-navy-lighter/50 transition-colors duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          <Icon size={18} className="text-gold" />
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
  );
}

function LearningBlock({
  id,
  headingId,
  eyebrow,
  title,
  items,
  gridClassName,
}: {
  id: string;
  headingId: string;
  eyebrow: string;
  title: string;
  items: readonly LearningItem[];
  gridClassName: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-24">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-gold text-sm font-medium uppercase tracking-wider mb-2">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-light"
          >
            {title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={gridClassName}
        >
          {items.map((item) => (
            <LearningCard
              key={`${item.type}-${item.title}-${item.institution}`}
              item={item}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Education() {
  const { education, certificates } = usePortfolio().data;

  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        <LearningBlock
          id="education"
          headingId="education-heading"
          eyebrow="Academic"
          title="Education"
          items={education}
          gridClassName="grid grid-cols-1 gap-4 max-w-2xl"
        />
        <LearningBlock
          id="certifications"
          headingId="certifications-heading"
          eyebrow="Professional development"
          title="Certifications"
          items={certificates}
          gridClassName="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        />
      </div>
    </div>
  );
}
