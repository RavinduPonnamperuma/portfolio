"use client";

import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

function LinkedinIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { personal } = portfolioData;

  const contactItems = [
    {
      id: "email",
      icon: Mail,
      label: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      id: "phone",
      icon: Phone,
      label: personal.phone,
      href: personal.phoneHref,
    },
    {
      id: "location",
      icon: MapPin,
      label: personal.location.full,
      href: null,
    },
    {
      id: "linkedin",
      icon: LinkedinIcon,
      label: personal.social.linkedin.label,
      href: personal.social.linkedin.url,
    },
    {
      id: "github",
      icon: GithubIcon,
      label: personal.social.github.label,
      href: personal.social.github.url,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
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
            Let&apos;s Connect
          </p>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-light"
          >
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-text-muted mt-3 max-w-xl">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 lg:gap-6 mb-8"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-0">
                <Icon size={18} className="text-gold shrink-0" />
                <span className="text-sm text-text-muted hover:text-text-light transition-colors">
                  {item.label}
                </span>
              </div>
            );

            return (
              <Fragment key={item.id}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="bg-navy-light sm:bg-transparent rounded-lg sm:rounded-none border border-gold/10 sm:border-none"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="bg-navy-light sm:bg-transparent rounded-lg sm:rounded-none border border-gold/10 sm:border-none">
                    {content}
                  </div>
                )}
              </Fragment>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block w-full sm:w-auto px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors text-center text-sm"
          >
            Send Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
