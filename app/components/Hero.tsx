"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Download } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Technologies" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left md:w-[60%]"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-gold text-sm sm:text-base font-medium mb-2 tracking-wider uppercase"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mb-3 leading-tight"
            >
              Ravindu Damith
              <br />
              <span className="text-gold">Ponnamperuma</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-text-muted font-medium mb-4"
            >
              IT Coordinator & Software Developer
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-sm sm:text-base text-text-muted leading-relaxed max-w-xl mb-4 mx-auto md:mx-0"
            >
              Passionate software developer with expertise in building robust web
              applications and managing IT infrastructure. Experienced in
              full-stack development with modern frameworks and cloud technologies.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center md:justify-start gap-2 text-text-muted text-sm mb-6"
            >
              <MapPin size={16} className="text-gold" />
              <span>Elpitiya, Sri Lanka</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center text-sm"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors text-center flex items-center justify-center gap-2 text-sm"
              >
                <Download size={16} />
                View Projects
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 lg:gap-8"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`${
                    i > 0 ? "border-l-2 border-gold/30 pl-4 lg:pl-8" : ""
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="md:w-[40%] flex justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full gold-glow"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: "transparent",
                  border: "4px solid #F5A623",
                  borderRadius: "50%",
                }}
              />
              <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gold relative z-10">
                <Image
                  src="/images/profile.jpg"
                  alt="Ravindu Damith Ponnamperuma"
                  width={280}
                  height={280}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
